export default function HoverCounter({countbal,incrementCount}) {
        return (
      <div>
        <h1 onMouseOver={incrementCount}>Hover {countbal} Times</h1>
      </div>
    );
}