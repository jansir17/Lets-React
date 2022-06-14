import React from "react";

class Counter extends React.Component{
          state ={
    count:0,
  };

  incrementCount=()=>{
    this.setState((prevState)=>({count:prevState.count+1}))
  };
  render(){
    const {renderprop} =this.props;
    const {count}= this.state;
    return renderprop(count, this.incrementCount)
  }
}

export default Counter;