import React from "react";
import ReactDOM  from "react-dom";

class Clock{
  print(){
    return(
  <h1 className="heading">
  <span className="text">Hello {new Date().toLocaleTimeString()}</span>
  </h1>);
  }
}

const ClockComponent= new Clock();
ReactDOM.render(ClockComponent.print(),document.getElementById('root'));