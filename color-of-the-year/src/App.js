import React from "react";
import "./App.css";
import Box from "./Box.js";

function App() {
  return (
    <div>
      <Box year={2020} color="black" />
      <Box year={2021} color="blue" />
    </div>
  );
}

export default App;
