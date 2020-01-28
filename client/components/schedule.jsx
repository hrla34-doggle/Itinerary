import React from "react";
import ScheduleDay from "./scheduleDay.jsx";
class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="display-none margin-top-10 " id="schedule-container">
        {this.props.plan.cities.map((city, index) => {
          return <ScheduleDay city={city} day={index} />;
        })}
      </div>
    );
  }
}
export default Schedule;
