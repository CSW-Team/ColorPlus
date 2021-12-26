import React from "react";
import "./Header.css";
import logo from "../asset/colorplus.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="upheader">
        <img className="logo" src={logo} alt="logo img" />
      </div>
      <div className="menu">
        <Link className="menu-item" to="/cc">
          Color Combination
        </Link>
        <Link className="menu-item" to="/ce">
          Color Extraction
        </Link>
        <Link className="menu-item" to="/coty">
          Color Of The Year
        </Link>
      </div>
    </nav>
  );
};

export default Header;
