import React from "react";
import "./Box2.css";

function Box({ year, color, color2 }) {
  return (
    <div class="color_box" style={{ backgroundColor: color }}>
      <div class="color_box2" style={{ backgroundColor: color2 }}></div>
      <div class="color_box_in_text">{year}</div>
    </div>
  );
}

export default Box;
