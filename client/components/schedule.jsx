import React from "react";
import Optional from './optionals.jsx';
import ScheduleDay from "./scheduleDay.jsx";
class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="display-none margin-top-10 " id="schedule-container">
        {this.props.plan.schedule.map((schedule, index) => {
          return <ScheduleDay schedule={schedule} day={index} optional={this.props.plan.optionals[index]} />;
        })}
        <br/>
        <div className="optional-container">
          <span className="nunito-bold light-black" >All optional experience from this trip</span>
          <br/>
          <span className="light-black">Book with your travel director when you travel</span>
          {this.props.plan.optionals.map(optional => <Optional optional={optional}/>)}
        </div>
        
      </div>
    );
  }
}
export default Schedule;
