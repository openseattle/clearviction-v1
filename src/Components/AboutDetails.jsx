import React from "react";
import "../CSS/AboutDetails.css";

const AboutDetails = (props) => {
  return (
    <div className="container-sm">
      <img src={props.img} className="about-img" alt={props.name}/>
      <div className="container" id="about-info">
        <h5>{props.name}</h5>
        <h6 id="about-title">{props.title}</h6>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default AboutDetails;
