import React from "react";
import Map from "./map.jsx";
import Checklist from "./checklist.jsx";
import Schedule from "./schedule.jsx";
import BackIcon from "../assets/back-arrow.svg";
import DetailIcon from "../assets/next-arrow.svg";

const axios = require("axios");
class Itinerary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: [],
      plan: "",
      map: "normal",
      view: "map"
    };
    this.getItinerary = this.getItinerary.bind(this);
    this.detailButton = this.detailButton.bind(this);
    this.backButton = this.backButton.bind(this);
    this.checkmaps = this.checkmaps.bind(this);
    this.expandMap = this.expandMap.bind(this);
    this.checkScroll = this.checkScroll.bind(this);
    this.onSearchChangeMap = this.onSearchChangeMap.bind(this);
  }
  componentDidMount() {
    this.getItinerary();
    
  }
  onSubmithandler(id) {
    axios.get(`http://localhost:3000/trips/${id}`).then(result => {
      this.setState({
        plans: result.data,
        plan: result.data
      });
    });
  }

  getItinerary() {
    var urlStart = window.location.href.slice(22);
    var question = window.location.href.indexOf('?');
    let urlid = urlStart.slice(0, question - 22);
    console.log(urlid,'fuk', question)
    
    axios.get("http://localhost:3000/trips/hi").then(result => {
      var place = 0;
      this.setState({
        plans: result.data,
        plan: result.data[place]
      });
      for( var x = 0; x < this.state.plans.length; x++){
        if(true == true){
          this.setState({
            plan:this.state.plans[urlid -1]
          })
        }
      }
    });
    
  }
  onSearchChangeMap(location){
    for(var x = 0; x < this.state.plans.length; x++) {
      if(this.state.plans[x].location === location){
        this.setState({
          plan: this.state.plan[x]
        })
      }
    }
    
  }
  checkmaps() {
    var x = 0;
    setInterval(() => {
      this.setState({
        plan: this.state.plans[x]
      });
      x++;
    }, 5000);
  }

  detailButton() {
    
    if (this.state.view === 'map') {
      setTimeout(()=>{this.refs.checklist.anchorClick()}, 700)
      if (document.getElementById("map-container").className !== "display-none") {
        document.getElementById("map-container").className =
          "map-container fade-out";
      }
      setTimeout(() => {
        document.getElementById("detail-button").className = "display-none";
        document.getElementById("back-button").className =
          "back-button display-block button-animation";
        document.getElementById("checklist-container").className = "slide-left";
      }, 200);
      setTimeout(() => {
        document.getElementById("map-container").className = "display-none";
        document.getElementById("checklist-container").className =
          "padding-left-70";
        document.getElementById("schedule-container").className =
          "display-block float-right scroll slide-start-pos";
      }, 500);
      setTimeout(() => {
        document.getElementById("schedule-container").className =
          "display-block scroll float-left";
      }, 530);
      this.setState({
        view: "schedule"
      })
    } 
  }
  backButton() {
    this.checkScroll('');
    this.refs.schedule.reset();
    setTimeout(()=>{this.refs.map.deleteLines();}, 500)
    setTimeout(()=>{for( var x = 0; x < this.state.plan.cities.length-1; x++) {
      this.refs.map.lineMaker(x);}}, 500)
    document.getElementById("schedule-container").className =
      "fade-out slide-right";
    setTimeout(() => {
      document.getElementById("checklist-container").className =
        "slide-right padding-left-40";
    }, 100);
    setTimeout(() => {
      document.getElementById("back-button").className =
        "back-button display-none";
      document.getElementById("detail-button").className =
        "detail-button display-block button-animation";
      document.getElementById("map-container").className =
        "map-container-v2 display-block";
      document.getElementById("checklist-container").className =
        "padding-left-40";
      document.getElementById("schedule-container").className = "display-none";
    }, 400);
    setTimeout(() => {
      document.getElementById("map-container").className =
        "map-container-v2 display-block fade-in";
    }, 420);
    this.setState({
      view: "map"
    })
  }
  expandMap() {
    if (this.state.map === "normal") {
      document.getElementById("expandMap").className = "position-sticky";
      setTimeout(() => {
        document.getElementById("expandMap").firstChild.className = "map-grow";
      }, 20);
      this.setState({
        map: "extended"
      });
    } else {
      document.getElementById("expandMap").firstChild.className = "map-shrink";
      setTimeout(() => {
        document.getElementById("expandMap").className = "fade-out";
      }, 200);
      setTimeout(() => {
        document.getElementById("expandMap").className = "display-none";
      }, 400);
      this.setState({
        map: "normal"
      });
    }
    
  }
  checkScroll(x){
    this.refs.checklist.activateDay(x)
  }
  render() {
    if (this.state.plan === "") {
      return <div>
        <span className="loadingtext">Loading</span>
        <br></br>
        <img className="loading" src="https://ebtrafalgar.s3-us-west-1.amazonaws.com/PinClipart.com_loading-clipart_4588206.png"/>
      </div>;
    }
    return (
      <div id="itinerary-container">
        <button className="display-none" onClick={this.checkmaps}>
          check all maps
        </button>
        <div
          id="back-button"
          onClick={this.backButton}
          className="back-button display-none"
        >
          <BackIcon />
          Back
        </div>
        <Map ref ="map" expandMap={this.expandMap} plan={this.state.plan} />
        <Checklist ref="checklist" view={this.state.view} detailButton={this.detailButton} plan={this.state.plan} />
        <Schedule ref="schedule" checkScroll={this.checkScroll} plan={this.state.plan} />
        <div
          id="detail-button"
          onClick={this.detailButton}
          className="detail-button button-animation float-right"
        >
          <DetailIcon />
          Detail
        </div>
        <div className="position-absolute z-index-7"><div onClick={this.expandMap} id="expandMap" className="display-none">
          <img src={this.state.plan.mapPic} />
        </div></div>
        
      </div>
    );
  }
}
export default Itinerary;
