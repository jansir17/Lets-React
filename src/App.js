import ClickCounter from "./component/ClickCounter";
import HoverCounter from "./component/HoverCounter";
import Counter from "./component/Counter";


function App(){
  return (
    <div>
      <Counter renderprop={(counterchet,incrementCount)=><ClickCounter countbal={counterchet} incrementCount={incrementCount}/>}/>
      <Counter renderprop={(counterchet,incrementCount)=><HoverCounter countbal={counterchet} incrementCount={incrementCount}/>}/>
    </div>
  )
}

export default App;