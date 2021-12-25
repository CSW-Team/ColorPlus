// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return <h1></h1>;
// }

// export default App;

import React from "react";
import "./App.css";
import "./Box.js";

class App extends React.Component {
  render() {
    return (
      <div className="boxs">
        <Box id={1233} year={2021} />
      </div>
    );
  }
}

export default App;
