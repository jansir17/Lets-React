export default function HoverCounter({count,incrementCount,theme,switchTheme}) {
  const style = theme === 'dark'? {backgroundColor: '#000000', color: '#ffffff'} : null
        return (
      <div>
        <h1 onMouseOver={incrementCount} style={style} > Hovered {count} Times</h1>
        <button onClick={switchTheme}>Change Theme</button>
      </div>
    );
}