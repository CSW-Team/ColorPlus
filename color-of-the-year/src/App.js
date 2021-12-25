import React from "react";
import "./App.css";
import Box from "./Box.js";
import Box2 from "./Box2.js";

function App() {
  return (
    <div>
      <div class="color_year_box">
        <Box year={2022} color="#6667ab" />
        <Box2 year={2021} color="#f5df4d" color2="#939597" />
        <Box year={2020} color="#0f4c81" />
      </div>
      <div class="color_year_box">
        <Box year={2019} color="#ff6f61" />
        <Box year={2018} color="#5F4B8B" />
        <Box year={2017} color="#88B04B" />
      </div>
      <div class="color_year_box">
        <Box2 year={2016} color="#91A8D0" color2="#F7CAC9" />
        <Box year={2015} color="#964F4C" />
        <Box year={2014} color="#AD5E99" />
      </div>
      <div class="color_year_box">
        <Box year={2013} color="#009473" />
        <Box year={2012} color="#DD4124" />
        <Box year={2011} color="#D94F70" />
      </div>
      <div class="color_year_box">
        <Box year={2010} color="#45B5AA" />
        <Box year={2009} color="#F0C05A" />
        <Box year={2008} color="#5A5B9F" />
      </div>
      <div class="color_year_box">
        <Box year={2007} color="#9B1B30" />
        <Box year={2006} color="#DECDBE" />
        <Box year={2005} color="#53B0AE" />
      </div>
      <div class="color_year_box">
        <Box year={2004} color="#E2583E" />
        <Box year={2003} color="#7BC4C4" />
        <Box year={2002} color="#BF1932" />
      </div>
      <div class="color_year_box">
        <Box year={2001} color="#C74375" />
        <Box year={2000} color="#98B2D1" />
        <Box color="#" />
      </div>
    </div>
  );
}

export default App;
