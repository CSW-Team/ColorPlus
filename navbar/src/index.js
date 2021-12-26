import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Cc from "./pages/Cc";
import Ce from "./pages/Ce";
import Coty from "./pages/Coty";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="cc" element={<Cc />} />
      <Route path="ce" element={<Ce />} />
      <Route path="coty" element={<Coty />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
