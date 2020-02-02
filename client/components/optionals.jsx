import React from 'react';

var Optionals = (props) => {
    return (
        <div className="optional-box">
            <span className="nunito grey font-size">AVAILABLE ON DAY {props.optional.day}</span> 
            <br/>
            <span className="nunito light-black font-size margin-block-10">{props.optional.title}</span>   
            <p id="optional-description" className="light-black">{props.optional.description}</p>
            <span className="light-black">Adult Price: <span className="light-black font-weight-600">{props.optional.price}</span></span>
            <br/>
            <span className="light-black footnote">* The Optionals and pricing listed here are a guideline only and subject to change.</span>
        </div>
    )
}
export default Optionals;