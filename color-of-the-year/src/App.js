import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Ce from "./pages/Ce.js";
import Coty from "./pages/Coty.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/ce" exact component={Ce} />
            <Route path="/coty" component={Coty} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
