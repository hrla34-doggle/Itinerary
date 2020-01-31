import React from "react";
import Map from "./map.jsx";
import Checklist from "./checklist.jsx";
import Schedule from "./schedule.jsx";


const axios = require("axios");
class Itinerary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: [],
      plan: "",
      map: "normal"
    };
    this.getItinerary = this.getItinerary.bind(this);
    this.detailButton = this.detailButton.bind(this);
    this.backButton = this.backButton.bind(this);
    this.checkmaps = this.checkmaps.bind(this);
    this.expandMap = this.expandMap.bind(this);
  }
  componentDidMount() {
    this.getItinerary();
  }
  getItinerary() {
    axios.get("/trips").then(result => {
      this.setState({
        plans: result.data,
        plan: result.data[17]
      });
    });
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
    if (document.getElementById("map-container").className !== "display-none") {
      document.getElementById("map-container").className = "map-container fade-out";
    }
    setTimeout(() => {
      document.getElementById("detail-button").className = "display-none";
      document.getElementById("back-button").className =
        "back-button display-block button-animation";
      document.getElementById("checklist-container").className =
        "slide-left";
    }, 200);
    setTimeout(() => {
      
      document.getElementById("map-container").className = "display-none";
      document.getElementById("checklist-container").className =
        "padding-left-70";
      document.getElementById("schedule-container").className =
        "display-block float-right scroll slide-start-pos";
    }, 500);
    setTimeout(()=>{
      document.getElementById("schedule-container").className =
        "display-block scroll float-right";
    }, 530)
  }
  backButton() {
    document.getElementById("schedule-container").className = "fade-out slide-right";
    setTimeout(()=>{
      document.getElementById("checklist-container").className = "slide-right padding-left-40";
    }, 100)
    setTimeout(() => {
      document.getElementById("back-button").className =
        "back-button display-none";
      document.getElementById("detail-button").className =
        "detail-button display-block button-animation";
      document.getElementById("map-container").className = "map-container-v2 display-block";
      document.getElementById("checklist-container").className =
        "padding-left-40";
      document.getElementById("schedule-container").className = "display-none";
    }, 400);
    setTimeout(()=>{
      document.getElementById("map-container").className = "map-container-v2 display-block fade-in";
    }, 420)
  }
  expandMap() {
    if (this.state.map === "normal") {
      document.getElementById("expandMap").className = "";
      setTimeout(() => {
        document.getElementById("expandMap").firstChild.className = "map-grow";
      }, 20);
      this.setState({
        map: "extended"
      });
    } else {
      document.getElementById("expandMap").firstChild.className = "map-shrink";
      setTimeout(() => {document.getElementById("expandMap").className = "fade-out";}, 200)
      setTimeout(() => {
        document.getElementById("expandMap").className = "display-none";
      }, 400);
      this.setState({
        map: "normal"
      });
    }
  }
  render() {
    if (this.state.plan === "") {
      return <div>LOADING</div>;
    }
    return (
      <div id="itinerary-container">
        <button className="display-none"onClick={this.checkmaps}>check all maps</button>
        <button
          id="back-button"
          onClick={this.backButton}
          className="back-button display-none"
        >
          back
        </button>
        <Map expandMap={this.expandMap} plan={this.state.plan} />
        <Checklist detailButton={this.detailButton} plan={this.state.plan} />
        <Schedule plan={this.state.plan} />
        <button
          id="detail-button"
          onClick={this.detailButton}
          className="detail-button button-animation float-right"
        >
          >
        </button>
        <div onClick={this.expandMap} id="expandMap" className="display-none">
          <img src={this.state.plan.mapPic} />
        </div>
      </div>
    );
  }
}
export default Itinerary;
