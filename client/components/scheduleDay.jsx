import React from "react";
import MealIcon from '../assets/Meal.svg';
import HotelIcon from '../assets/hotel.svg';


var ScheduleDay = props => {
  if(props.schedule.hotel !== false) {
    return (
      <div className="" id="schedule-day">
        <a className="no-padding" name={props.day + 1}></a>
        <h2 className="nunito schedule-day-font grey">Day {props.day + 1}</h2>
        <h3 className="nunito-bold large-font light-black no-margin">
          {props.schedule.title}
        </h3>
        <p className="light-black">
         {props.schedule.description}
         <br/>
         <div className="scheduleDayIcon-margin"><HotelIcon className="scheduleDayIcon-padding" height="25px" width="25px"/>Hotel - {props.schedule.hotel}</div>
         <div className="scheduleDayIcon-margin"><MealIcon className="scheduleDayIcon-padding" height="25px" width="25px"/>Included Meals - {props.schedule.meal}</div>
         {(()=>{if(props.optional !== undefined){return <div className="optional-box">
            <span className="nunito grey font-size">OPTIONAL EXPERIENCE</span> 
            <br/>
            <span className="nunito-bold light-black">{props.optional.title}</span>   
            <p id="optional-description" className="light-black">{props.optional.description}</p>
            <span className="light-black">Adult Price: <span className="light-black font-weight-600">{props.optional.price}</span></span>
            <br/>
            <span className="light-black footnote">* The Optionals and pricing listed here are a guideline only and subject to change.</span>
         </div>}})()}
        </p>
        
      </div>
    );
  }
  return (
    <div className="" id="schedule-day">
      <a className="no-padding" name={props.day + 1}></a>
      <h2 className="nunito schedule-day-font grey">Day {props.day + 1}</h2>
      <h3 className="nunito-bold large-font light-black no-margin">
        {props.schedule.title}
      </h3>
      <p className="light-black">
       {props.schedule.description}
       <br/>
       <div className="scheduleDayIcon-margin"><MealIcon className="scheduleDayIcon-padding" height="25px" width="25px"/>Included Meals - {props.schedule.meal}</div>
       {(()=>{if(props.optional !== undefined){return <div className="optional-box">
            <span className="nunito grey font-size">OPTIONAL EXPERIENCE</span> 
            <br/>
            <span className="nunito-bold light-black">{props.optional.title}</span>   
            <p id="optional-description" className="light-black">{props.optional.description}</p>
            <span className="light-black">Adult Price: <span className="light-black font-weight-600">{props.optional.price}</span></span>
            <br/>
            <span className="light-black footnote">* The Optionals and pricing listed here are a guideline only and subject to change.</span>
        </div>}})()}
      </p>
    </div>
  );
};
export default ScheduleDay;
