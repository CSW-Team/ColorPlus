import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SignPage from "./pages/SignPage";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="cc" element={<SignPage />} />
      <Route path="ce" element={<MainPage />} />
      <Route path="coty" element={<ProfilePage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
