import React from 'react';
import Button from './Button'

class Clock extends React.Component{
  state= {date: new Date(), locale: 'bn-BD'};

  componentDidMount(){
    this.clockTimer=setInterval(()=>this.tick(),1000);
  }

  componentWillUnmount(){
    clearInterval(this.clockTimer);
  }

  tick(){
        this.setState({
        date: new Date(),
      });
  }

  handleClick=(locale)=>{
    this.setState({locale:locale});
  }

  render(){
    const {date,locale}= this.state;
    return(
  <div>
  <h1 className="heading">
  <span className="text">Today's {this.props.children} {date.toLocaleTimeString(locale)}</span>
  </h1>
  <Button change={this.handleClick} locale='en-US'>Click</Button>
  </div>
);
  }
}

export default Clock;