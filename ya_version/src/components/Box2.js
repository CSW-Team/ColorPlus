import React from "react";
import "./Box2.css";

function Box2({ year, color, color2, color_name, color2_name }) {
  return (
    <div>
      <div class="color_box" style={{ backgroundColor: color }}>
        <div class="color_box2" style={{ backgroundColor: color2 }}></div>
        <div class="color_box_in_text">{year}</div>
      </div>
      <div class="color_code_text">{color_name}</div>
      <div class="color_code_text2">{color2_name}</div>
    </div>
  );
}

export default Box2;
