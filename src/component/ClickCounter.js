export default function ClickCounter ({countbal, incrementCount}){
        return (
      <div>
        <button type="button" onClick={incrementCount}>Click {countbal} Times</button>
      </div>
    );

}