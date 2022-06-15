import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "../Context/themeContext";
import React from "react";

export default class Content extends React.Component{
  render(){
      return(
    <div>
      <h1>This is Content.js Component</h1>
      <Counter>
        {(counter,incrementCount)=>(
          <ThemeContext.Consumer>
            {({theme, switchTheme})=>(<HoverCounter count={counter} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme}/>)}</ThemeContext.Consumer>
        )}
      </Counter>
    </div>
  );
  }
};