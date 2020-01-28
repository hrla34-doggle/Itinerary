import React from "react";
import MapInfo from "./mapInfo.jsx";
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="display-block" id="map-container">
        <h1 className="light-black nunito maintitle">Your Itinerary</h1>
        <div onClick={this.props.expandMap} id="map">
          <img className="bigger" src={this.props.plan.mapPic} />
        </div>
        <div id="mapInfo-container">
          <MapInfo cities={this.props.plan.cities} />
        </div>
      </div>
    );
  }
}
export default Map;
