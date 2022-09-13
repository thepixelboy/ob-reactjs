import React, { useState } from "react";

let red = 0;
let green = 0;
let blue = 0;

const RandomColoredBox = () => {
  const [color, setColor] = useState(`rgb(${red}, ${green}, ${blue})`);

  const randomizeColors = () => {
    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);

    setColor(`rgb(${red}, ${green}, ${blue})`);
  };

  const setDefaultColor = () => {
    setColor(`rgb(0, 0, 0)`);
  };

  const boxStyle = {
    backgroundColor: color,
    width: "255px",
    height: "255px",
  };

  let coloredBox = (
    <div
      onMouseEnter={randomizeColors}
      onMouseOut={setDefaultColor}
      onDoubleClick={setDefaultColor}
      className="box"
      style={boxStyle}
    ></div>
  );

  return (
    <div className="container">
      <h1>Exercise for sessions 10, 11, 12</h1>
      <h2>Random colored box</h2>
      <ul>
        <li>Enter the box to randomize color</li>
        <li>Leave the box to stop color changing</li>
        <li>Double click to stop color changing</li>
      </ul>
      {coloredBox}
    </div>
  );
};

export default RandomColoredBox;
