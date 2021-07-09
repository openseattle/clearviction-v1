import React from "react";
import "../CSS/layout.css";

const Footer = () => {
  return (
    <footer className="footer-cont">
      <div className="info-cont">
        <a className="white-link" href="mailto:cvp@seamus.work">
          <ul>Email Us</ul>
        </a>
        <a className="white-link" href="https://www.democracylab.org/about">
          <ul>Democracy Lab</ul>
        </a>
        <a className="white-link" href="https://openseattle.org/about/">
          <ul>Open Seattle</ul>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
