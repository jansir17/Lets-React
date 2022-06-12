import React from 'react';

export default class Form extends React.Component{
  state= {
    title: 'javaScript',
    textAreaValue:'JS is Awesome',
    jsLibrary:'React',
    isAwesome: true,
  };


  handleChange=(e)=>{
    if(e.target.type==='text'){
      console.log(e.target.value)
          this.setState({
      title: e.target.value,
    })}
    else if(e.target.type==='textarea'){
      console.log(e.target.value)
          this.setState({
      textAreaValue: e.target.value,
    })
    }
    else if(e.target.type==='select-one'){
      console.log(e.target.value)
          this.setState({
      jsLibrary: e.target.value,
    })
    }
    else if(e.target.type==='checkbox'){
      console.log(e.target.value)
          this.setState({
      isAwesome: e.target.checked,
    })
    }
    else {console.log('nothing here');}
  }

  submitHandle= (e)=>{
    e.preventDefault();
    const {title, textAreaValue,jsLibrary,isAwesome}=this.state;
    console.log(title, textAreaValue,jsLibrary,isAwesome);
  }

  render(){
    const {title, textAreaValue,jsLibrary,isAwesome}=this.state;
    return(
      <form onSubmit={this.submitHandle}>
        <input placeholder='Enter Title' type='text' value={title} onChange={this.handleChange}/>
        <br/>
        <br/>
        <textarea type="textarea" name="text" value={textAreaValue} onChange={this.handleChange}/>
        <br/>
        <br/>
        <select type='select' value={jsLibrary} onChange={this.handleChange}>
          <option value='React'>React</option>
          <option value='Angular'>Angular</option>
          <option value='Vue'>Vue</option>
        </select>
        <br/>
        <br/>
        <input type="checkbox" checked={isAwesome} onChange={this.handleChange}/>
        <br/>
        <br/>
        <input type='submit' value="Submit Here"/>
      </form>
    )
  }
}