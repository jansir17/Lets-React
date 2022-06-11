import Clock from './Clock';

function Clocklist({quantities=[]}){
  return(
    <div>
      {quantities.map(()=><Clock key={Math.random}/>)}
    </div> 
  );
}

export default Clocklist;