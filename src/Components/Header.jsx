import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
const Header = () => {
  return (
    <div className="header">
      <div className="navbar-cont">
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
