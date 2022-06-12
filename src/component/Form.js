import React from 'react';

export default class Form extends React.Component{
  state= {title: 'javaScript'};

  handleChange=(e)=>{
    console.log(e.target.value)
    this.setState({
      title: e.target.value,
    })
  }
  render(){
    const {title}=this.state;
    return(
      <div>
        <input placeholder='Enter Title' type='text' value={title} onChange={this.handleChange}/>
      </div>
    )
  }
}