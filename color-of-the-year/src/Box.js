import React from "react";
import "./Box.css";

function Box({ year, color, color_name }) {
  return (
    <div>
      <div class="color_box" style={{ backgroundColor: color }}>
        <div class="color_box_in_text">{year}</div>
      </div>
      <div class="color_code_text">{color_name}</div>
    </div>
  );
}

export default Box;
