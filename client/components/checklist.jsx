import React from "react";
import ChecklistDay from "./checklistDay.jsx";
class Checklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDay: ""
    };
    this.activateDay = this.activateDay.bind(this);
  }
  activateDay(day) {
    this.setState({
      activeDay: day
    });
    setTimeout(() => {
      for (var x = 0; x < this.props.plan.schedule.length; x++) {
        this.refs[`ChecklistDay${x}`].changeState();
      }
    }, 100);
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
        </ol>
      </div>
    );
  }
}
export default Checklist;
