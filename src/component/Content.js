import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "../Context/themeContext";

export default function Content(){
  return(
    <div>
      <h1>This is Content.js Component</h1>
      <Counter>
        {(counter,incrementCount)=>(
          <ThemeContext.Consumer>
            {({theme})=>(<HoverCounter count={counter} iancrementCount={incrementCount} theme={theme}/>)}</ThemeContext.Consumer>
        )}
      </Counter>
    </div>
  );
};