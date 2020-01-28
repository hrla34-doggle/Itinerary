import React from "react";

var ScheduleDay = props => {
  return (
    <div className="" id="schedule-day">
      <a name={props.day + 1}></a>
      <h2 className="nunito schedule-day-font grey">Day {props.day + 1}</h2>
      <h3 className="nunito-bold large-font light-black no-margin">
        {props.city}
      </h3>
      <p className="light-black">
        Tread in the footsteps of Lawrence of Arabia, crusading knights and
        Bedouin tribes, who once crossed the length and breadth of Jordan
        leaving their mark on its mystical desert landscapes. Our springboard to
        the spellbinding ancient trading history of Jordan is the white stone
        city of Amman, which you will have an opportunity to explore at your
        leisure after being transferred to your hotel from the airport. Meet
        your fellow travellers this evening for a cocktail reception followed by
        dinner.
      </p>
    </div>
  );
};
export default ScheduleDay;
