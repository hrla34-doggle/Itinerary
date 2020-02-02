import React from "react";
import AirplaneIcon from "../assets/airplane-svgrepo-com.svg";
import FerryIcon from "../assets/ferry-facing-right-svgrepo-com.svg";
import CruiseIcon from "../assets/cruise-ship-svgrepo-com.svg";
import FastTrainIcon from "../assets/fast-train-svgrepo-com.svg";
import TrainIcon from "../assets/train-svgrepo-com.svg";
class MapInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "city-list"
    };
    this.mapInfoClickHandler = this.mapInfoClickHandler.bind(this);
  }
  mapInfoClickHandler(e) {
    if (e.currentTarget.className === "city-list text-center") {
      document.getElementById('extendo-left').className = 'position-absolute extendo-alt';
      document.getElementById('extendo-right').className = 'position-absolute right-extendo-alt';
      e.currentTarget.parentNode.children[3].className =
        "city-list-info padding";
      e.currentTarget.parentNode.children[2].className =
        "map-key-info display-none";
        e.currentTarget.parentNode.children[1].firstChild.className = 'nunito-bold light-black map-info-span-center';
        e.currentTarget.parentNode.children[0].firstChild.className = 'nunito-bold light-black map-info-span-center font-weight-100';
        e.currentTarget.parentNode.children[1].className = 'city-list text-center background-white city-list-active';
        e.currentTarget.parentNode.children[0].className = 'map-key text-center background-grey map-key-inactive';
        
    }
    if (e.currentTarget.className === "map-key text-center background-grey map-key-inactive") {
      document.getElementById('extendo-left').className = 'position-absolute extendo';
      document.getElementById('extendo-right').className = 'position-absolute right-extendo';
      e.currentTarget.parentNode.children[2].className = "map-key-info padding";
      e.currentTarget.parentNode.children[3].className =
        "city-list-info display-none";
        e.currentTarget.parentNode.children[1].firstChild.className = 'nunito-bold light-black map-info-span-center font-weight-100';
        e.currentTarget.parentNode.children[0].firstChild.className = 'nunito-bold light-black map-info-span-center';
        e.currentTarget.parentNode.children[1].className = 'city-list text-center';
        e.currentTarget.parentNode.children[0].className = 'map-key text-center';
        
        
    }
  }

  render() {
    return (
      <div style={{backgroundColor:"white"}}>
        <div onClick={this.mapInfoClickHandler} className="map-key text-center">
          <span className="nunito-bold light-black map-info-span-center">Map key</span>
        </div>
        <div
          onClick={this.mapInfoClickHandler}
          className="city-list text-center"
        >
          <span className="nunito-bold light-black map-info-span-center font-weight-100">City List</span>
        </div>
        <div id="map-key-info" className="map-key-info padding display-flex">
          <div className="icon-col">
            <svg className="icon-center" height="30px" width="30px">
              <circle cx="15" cy="15" r="13" fill="#60AE0A" />
            </svg>
            <span className="text-center top-center">Start Location</span>
          </div>
          <div className="icon-col">
            <AirplaneIcon className="icon-center" height="30px" width="30px" />
            <span className="text-center top-center" height="30px">Plane</span>
          </div>
          <div className="icon-col">
            <CruiseIcon className="icon-center" height="30px" width="30px" />
            <span className="text-center top-center">Cruise</span>
          </div>
          <div className="icon-col">
            <svg className="icon-center" height="30px" width="30px">
              <circle cx="15" cy="15" r="13" fill="black" />
              <text textAnchor="middle" fill="white">
                1
              </text>
            </svg>
            <span className="text-center top-center">Over night</span>
          </div>
          <div className="icon-col">
            <FastTrainIcon
              className="icon-center"
              height="30px"
              width="30px"
            />
            <span className="text-center top-center">High Speed Train</span>
          </div>
          <div className="icon-col">
            <svg className="icon-center" height="30px" width="30px">
              <circle cx="15" cy="15" r="7" fill="black" />
            </svg>
            <span className="text-center top-center">Visited Location</span>
          </div>
          <div className="icon-col">
            <svg className="icon-center" height="30px" width="30px">
              <circle cx="15" cy="15" r="13" fill="#E60032" />
            </svg>
            <span className="text-center top-center">End Location</span>
          </div>
          <div className="icon-col">
            <TrainIcon className="icon-center" height="30px" width="30px" />
            <span className="text-center top-center">Train</span>
          </div>
          <div className="icon-col">
            <FerryIcon className="icon-center" height="30px" width="30px" />
            <span className="text-center top-center">Ferry</span>
          </div>
        </div>
        <div id="city-list-info" className="city-list-info display-none">
          <div className="nunito light-black fontsmall margin-left-15">
            {this.props.cities.length} Cities
          </div>
          {this.props.cities.map(city => {
            return (
              <div className="map-city-list nunito light-black fontsmall">
                {city}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default MapInfo;
