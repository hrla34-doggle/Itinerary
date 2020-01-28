import React from "react";

class ChecklistDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
    this.isActiveHandler = this.isActiveHandler.bind(this);
    this.changeState = this.changeState.bind(this);
  }
  isActiveHandler() {
    this.props.activateDay(this.props.day)
    
  }
  changeState() {
    console.log(this.props.day)
    if(this.props.activeDay === this.props.day ) {
      this.setState({
        isActive: true
      })
    } else {
      this.setState({
        isActive: false
      })
    }
  
  }

  render() {

    if (this.state.isActive == true) {
      return (
        <li onClick={this.isActiveHandler}
          className="listEntry background-white"
        >
          <span className="circle background-red">
            <span className="innercircle">
              <span className="lastcircle background-red circle-grow"></span>
            </span>
          </span>
          <a id="checklist-anchor" href={"#" + this.props.day}>
            <span className="nunito grey padding">DAY {this.props.day}: </span>
            <span className="nunito-bold uppercase light-black">
              SPEND THE DAY IN {this.props.city}
            </span>
          </a>
        </li>
      );
    } else {
      return (
        <li onClick={this.isActiveHandler} className="listEntry">
          <span className="circle">
            <span className="innercircle">
              <span className="lastcircle"></span>
            </span>
          </span>
          <a id="checklist-anchor" href={"#" + this.props.day}>
            <span className="nunito grey padding">DAY {this.props.day}: </span>
            <span className="nunito-bold uppercase light-black">
              SPEND THE DAY IN {this.props.city}
            </span>
          </a>
        </li>
      );
    }
  }
}
export default ChecklistDay;
