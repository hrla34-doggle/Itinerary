import React from "react";
import Optional from './optionals.jsx';
import ScheduleDay from "./scheduleDay.jsx";
class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTop: ""
    };
    this.onScrollHandler = this.onScrollHandler.bind(this);
    this.reset = this.reset.bind(this);
  }
  onScrollHandler(e){ 
    
    for( var x = 0; x < this.props.plan.schedule.length+1; x++ ) {
      if(e.currentTarget.children[x].getBoundingClientRect().top <= 35 && e.currentTarget.children[x].getBoundingClientRect().bottom >= 35 ){
        if(this.state.currentTop !== e.currentTarget.children[x].getElementsByTagName('a')[0].name) {
          console.log(e.currentTarget.children[x].getElementsByTagName('a')[0].name)
          this.props.checkScroll(e.currentTarget.children[x].getElementsByTagName('a')[0].name)
        }
        this.setState({currentTop: e.currentTarget.children[x].getElementsByTagName('a')[0].name})
      }
      
    }
    if(this.state.currentTop === 'optionals'){
      document.getElementById('optional-li').children[0].className = "circle background-red stayRed"
      document.getElementById('optional-li').firstChild.firstChild.firstChild.className = 'lastcircle background-red circle-grow';
    } else {
      document.getElementById('optional-li').children[0].className = "circle"
      document.getElementById('optional-li').firstChild.firstChild.firstChild.className = 'lastcircle';
    }
  }
  reset(){
    if(this.state.currentTop === 'optionals'){
      this.setState({
        currentTop: ""
      })
    }  
    document.getElementById('optional-li').children[0].className = "circle"
    document.getElementById('optional-li').firstChild.firstChild.firstChild.className = 'lastcircle';
  }
  render() {
    return (
      <div onScroll={this.onScrollHandler}className="display-none margin-top-10 " id="schedule-container">
        {this.props.plan.schedule.map((schedule, index) => {
          return <ScheduleDay schedule={schedule} day={index} optional={this.props.plan.optionals[index]} />;
        })}
        <div className="optional-container">
          <a className="no-padding" name="optionals"></a>
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
