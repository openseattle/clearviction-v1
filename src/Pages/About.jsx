import React from "react";
import "../CSS/About.css";
import logo from "../Assets/CVP.png";
import AboutDetails from "../Components/AboutDetails";
import data from "../data/team.json";

const About = () => {
  return (
    <div>
      <section id="filler"></section>
      <section className="container-fluid">
        <img src={logo} id="logo" alt="CVP logo" />
      </section>
      <section className="container-fluid-content">
        <h1 className="display-6">Our Team</h1>
        <div className="row row-cols-sm-2">
          {data.map((person, id) => (
            <div className="col">
              <AboutDetails
                name={person.name}
                title={person.title}
                img={person.img}
                description={person.description}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="container-fluid-content">
        <h1 className="display-6">Want To Be A Part of Our Team?</h1>
        <p>
          We are always looking for proactive and passionate volunteers with a
          diverse skillset to help us advance our goal.
        </p>
        <p>Reach out to learn more and opportunities to volunteer with us.</p>
        <button type="button" className="btn btn-primary">
          <a className="white-link" href="mailto:cvp@seamus.work">
            Contact Us!
          </a>
        </button>
      </section>
    </div>
  );
};

export default About;
