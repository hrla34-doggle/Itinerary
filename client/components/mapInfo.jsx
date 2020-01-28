import React from "react";

class MapInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "city-list"
    };
    this.mapInfoClickHandler = this.mapInfoClickHandler.bind(this);
  }
  mapInfoClickHandler(e) {
    console.log(e.currentTarget.parentNode.children[2]);
    if (e.currentTarget.className === "city-list text-center") {
      e.currentTarget.parentNode.children[3].className =
        "city-list-info padding";
      e.currentTarget.parentNode.children[2].className =
        "map-key-info display-none";
    }
    if (e.currentTarget.className === "map-key text-center") {
      e.currentTarget.parentNode.children[2].className = "map-key-info";
      e.currentTarget.parentNode.children[3].className =
        "city-list-info display-none";
    }
  }

  render() {
    return (
      <div>
        <div onClick={this.mapInfoClickHandler} className="map-key text-center">
          <span className="nunito-bold light-black top-center">Map key</span>
        </div>
        <div
          onClick={this.mapInfoClickHandler}
          className="city-list text-center"
        >
          <span className="nunito-bold light-black top-center">City List</span>
        </div>
        <div id="map-key-info" className="map-key-info">
          MAP KEY INFO GOES HERE
        </div>
        <div id="city-list-info" className="city-list-info display-none">
          <div className="nunito light-black fontsmall">
            {this.props.cities.length} cities
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
