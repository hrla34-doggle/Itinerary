import React from "react";
import MapInfo from "./mapInfo.jsx";
import ZoomInIcon from '../assets/lens.svg';
import PrintIcon from '../assets/print.svg';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <div className="map-container display-block" id="map-container">
        <h1 className="light-black nunito maintitle">Your itinerary<span onClick={() => window.print()} className="float-right print-button">Print<PrintIcon className="float-right margin-left-10" height="23px" width="23px"/></span></h1>
        <div className="position-relative" onClick={this.props.expandMap} id="map">
          <div className="zoom-in-icon position-absolute box-shadow"><ZoomInIcon className="print-icon-center" height="25px" width="25px"/></div>
          <div id="extendo-left" className="position-absolute extendo"></div><div id="extendo-right" className="position-absolute right-extendo"></div>
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
