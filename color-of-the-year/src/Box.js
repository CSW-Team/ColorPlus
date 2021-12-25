import React from "react";
import "./Box.css";

function Box({ year, color }) {
  return (
    <div class="color_box" style={{ backgroundColor: color }}>
      <div class="color_box_in_text">{year}</div>
    </div>
  );
}

export default Box;
