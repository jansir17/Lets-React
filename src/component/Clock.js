import React from 'react';

class Clock extends React.Component{
  state= {dateVar: new Date()};

  componentDidMount(){
    this.clockTimer=setInterval(()=>this.tick(),1000);
  }

  componentWillUnmount(){
    clearInterval(this.clockTimer);
  }

  tick(){
        this.setState({
        dateVar: new Date(),
      });
  }

  render(){
    return(
  <h1 className="heading">
  <span className="text">Today's {this.props.children} {this.state.dateVar.toLocaleTimeString(this.props.locale)}</span>
  </h1>);
  }
}

export default Clock;