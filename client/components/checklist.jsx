import React from "react";
import ChecklistDay from "./checklistDay.jsx";
class Checklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDay: "",
      view: this.props.view
    };
    this.activateDay = this.activateDay.bind(this);
    this.anchorClick = this.anchorClick.bind(this);
    this.optionalCheck = this.optionalCheck.bind(this);
  }
  activateDay(day) {
    this.setState({
      activeDay: day
    });
    setTimeout(() => {
      for (var x = 0; x < this.props.plan.schedule.length; x++) {
        this.refs[`ChecklistDay${x}`].changeState();
      }
    }, 50);
  }
  anchorClick(){
    console.log('hi')
    if(this.state.activeDay === "" ) {
      document.getElementById('list').children[0].children[1].click()
    }
    document.getElementById('list').children[this.state.activeDay - 1].children[1].click();
  }
  optionalCheck() {
    this.activateDay(this.props.plan.schedule.length + 1)
  }

  render() {
    return (
      <div
        key={this.state.key}
        className="float-right padding-left-40"
        id="checklist-container"
      >
        <span className="light-black nunito titlefont">Select a day</span>
        <ol id="list" onClick={this.props.detailButton} className="checklist">
          {this.props.plan.schedule.map((schedule, index) => {
            return (
              <ChecklistDay
                ref={`ChecklistDay${index}`}
                activeDay={this.state.activeDay}
                activateDay={this.activateDay}
                schedule={schedule}
                day={index + 1}
              />
            );
          })}
          <li id="optional-li" day={this.props.plan.schedule.length + 2}onClick={this.optionalCheck}className="listEntry">
          <span className="circle">
            <span className="innercircle">
              <span className="lastcircle"></span>
            </span>
          </span>
          <a  href={'#optionals'}>
            <span className="nunito light-black checklist-day-padding optional-checklist-font">
              All optional experiences for this trip
            </span>
          </a>
        </li>
        </ol>
      </div>
    );
  }
}
export default Checklist;
