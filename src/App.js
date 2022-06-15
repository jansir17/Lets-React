import React from "react";
import ClickCounter from "./component/ClickCounter";
import Counter from "./component/Counter";
import Section from "./component/Section";
import ThemeContext from "./Context/themeContext";


export default class App extends React.Component {
  state= {
    theme: 'red'
  };
  render(){
    const {theme}=this.state;
          return (
    <div>
      <Counter>
        {(counter,incrementCount)=>(<ClickCounter count={counter} incrementCount={incrementCount}/>)}
      </Counter>
      <ThemeContext.Provider value={{theme}}><Section/></ThemeContext.Provider>
    </div>
  )
  }
}