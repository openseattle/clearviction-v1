import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const isCalcOpen = location.pathname.includes("/calculator");

  return (
    <div
      className="navbar navbar-expand-lg navbar-light bg-light"
      role="navigation"
      aria-current="page"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/calculator/head/1"
                // Open in new tab if the user isn't already on the calculator page
                // target={isCalcOpen ? "" : "_blank"}
              >
                Calculator
              </NavLink>
            </li>
            {/* 
            <li className="nav-item">
              <NavLink className="nav-link" to="/volunteer">
                Volunteer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/resources">
                Resources
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
