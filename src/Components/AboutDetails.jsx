import React from "react";
import "../CSS/AboutDetails.css";

const AboutDetails = (props) => {
  return (
    <div className="container-sm" id="about-details">
      <img
        src={props.img}
        className="about-img"
        alt={props.name}
        id="about-profile-pic"
      />
      <div className="container" id="about-info">
        <h5 id="about-name">{props.name}</h5>
        <h6 id="about-title">{props.title}</h6>
        <p id="about-desc">{props.description}</p>
      </div>
    </div>
  );
};

export default AboutDetails;
