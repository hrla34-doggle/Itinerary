import React from "react";
import ReactDOM from 'react-dom';
import MapInfo from "./mapInfo.jsx";
import ZoomInIcon from '../assets/lens.svg';
import PrintIcon from '../assets/print.svg';
import AirplaneIcon from "../assets/airplane-svgrepo-com.svg";
import FerryIcon from "../assets/ferry-facing-right-svgrepo-com.svg";
import CruiseIcon from "../assets/cruise-ship-svgrepo-com.svg";
import FastTrainIcon from "../assets/fast-train-svgrepo-com.svg";
import TrainIcon from "../assets/train-svgrepo-com.svg";


class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.randomizer = this.randomizer.bind(this);
    this.lineMaker = this.lineMaker.bind(this);
    this.deleteLines = this.deleteLines.bind(this);
    this.Print = this.Print.bind(this);
  
  }
  componentDidMount(){
    for( var x = 0; x < this.props.plan.cities.length-1; x++) {
      this.lineMaker(x);

    }
  }
  componentDidUpdate(){

    for( var x = 0; x < this.props.plan.cities.length-1; x++) {
      this.lineMaker(x);

    }
  }
  componentWillReceiveProps(){
      this.deleteLines();
  }
  deleteLines(){
    for(var w = 0; w < 100; w ++) {
      if(document.getElementById(`line${w}`)!== null){
        document.getElementById(`line${w}`).remove(); 
      }
    }
  }
  randomizer(){
    var random = Math.random() * 400 + 100;
    return random;
    
  }
  
  lineMaker(x){
    
    var reflex=document.getElementById('itinerary').getBoundingClientRect().y;
    console.log(window.scrollY)
    var x1 = document.getElementById(`icon${x}`).getBoundingClientRect().x + window.scrollX;
    var y1 = document.getElementById(`icon${x}`).getBoundingClientRect().y -reflex;
    var x2 = document.getElementById(`icon${x+1}`).getBoundingClientRect().x + window.scrollX;
    var y2 = document.getElementById(`icon${x+1}`).getBoundingClientRect().y -reflex;
    let line = document.createElementNS("http://www.w3.org/2000/svg","path");
    let div = document.createElement('div');
    div.className = "position-absolute from-0 z-index-5";
    div.id = `line${x}`;
    let svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
    svg.appendChild(line);
    div.appendChild(svg);
    svg.setAttributeNS(null,"viewBox", "0 0 639 631")
    line.setAttributeNS(null,"stroke", "grey");
    line.setAttributeNS(null, "stroke-dasharray", "5,5,5");
    var mpx = (x2 + x1) * 0.5;
    var mpy = (y2 + y1) * 0.5;
    var theta = Math.atan2(y2 - y1, x2 - x1) - Math.PI / 2;
    var offset = 20;
    var c1x = mpx + offset * Math.cos(theta);
    var c1y = mpy + offset * Math.sin(theta);
    var curve = "M" + (x1 -35) + " " + (y1 -80) + " Q " +c1x+ " " + c1y + " " +(x2-35) + " " + (y2-80);
    line.setAttributeNS(null, "fill", "none")
    line.setAttributeNS(null , "d", curve)
    document.getElementById('map').appendChild(div);
    if( document.getElementById(`plane${x}`)!== null ) {
      document.getElementById(`plane${x}`).setAttribute('style', `top: ${c1x - offset}; left: ${mpx};`);
    }
    
  }
  Print(){
    window.print();
  }
  render() {
    return (
      <div className="map-container display-block" id="map-container">
        <h1 className="light-black nunito maintitle">Your itinerary<span onClick={this.Print} className="float-right print-button">Print<PrintIcon className="float-right margin-left-10" height="23px" width="23px"/></span></h1>
        <div className="position-relative" onClick={this.props.expandMap} id="map">
          <div className="zoom-in-icon position-absolute box-shadow"><ZoomInIcon className="print-icon-center" height="25px" width="25px"/></div>
          <div id="extendo-left" className="position-absolute extendo"></div><div id="extendo-right" className="position-absolute right-extendo"></div>
          <div id="icon0" className="icon-center position-absolute" style={{left: this.props.plan.coordinates[0].left, top: this.props.plan.coordinates[0].top}}><svg className="icon-center position-absolute" height="30px" width="30px">
              <circle cx="15" cy="15" r="10" fill="#60AE0A" />
            </svg><text className="position-absolute background-white left-moar">{this.props.plan.cities[0]}</text></div>
            {this.props.plan.cities.map((city, index) => {if(index > 0 && index < this.props.plan.cities.length - 1){
              return <div id={`icon${index}`} className="icon-center position-absolute" style={{left: this.props.plan.coordinates[index].left, top: this.props.plan.coordinates[index].top}}><svg className="icon-center position-absolute"  height="30px" width="30px">
              <circle cx="15" cy="15" r="10" fill="lightgrey"/>
            </svg><text className="position-absolute background-white left-moar">{this.props.plan.cities[index]}</text></div>}})}
            <div id={`icon${this.props.plan.cities.length-1}`} className="icon-center position-absolute" style={{left: this.props.plan.coordinates[this.props.plan.cities.length-1].left, top: this.props.plan.coordinates[this.props.plan.cities.length-1].top}}><svg className="icon-center position-absolute" height="30px" width="30px">
              <circle cx="15" cy="15" r="10" fill="red" />
            </svg><text className="position-absolute background-white left-moar">{this.props.plan.cities[this.props.plan.cities.length - 1]}</text></div>
            <AirplaneIcon id="plane0" className="icon-center position-absolute" height="30px" width="30px" style={{left: 10, top: 10}}/>
          <img className="bigger" src={this.props.plan.mapPic}/>
        </div>
        <div id="mapInfo-container">
          <MapInfo cities={this.props.plan.cities} />
        </div>
      </div>
    );
  }
}
export default Map;
