import React from "react";
import { useHistory } from "react-router-dom";
import "../CSS/Calculator.css";

const ResultUnsure = () => {
  const history = useHistory();
  const onClick = () => history.push("/");

  return (
    <>
      <p className="calc-col title">
        Our calculator can’t determine your eligibility
      </p>
      <div className="calc-col results">
        <p>
          It looks like your conviction may not be one of the following:
          <ul>
            <li>
              <a
                href="https://app.leg.wa.gov/rcw/default.aspx?cite=69.50.4014"
                target="_blank"
                rel="noreferrer noopener"
              >
                RCW 69.50.4014
              </a>
            </li>
            <li>
              <a
                href="https://leg.wa.gov/CodeReviser/documents/sessionlaw/1979c67.pdf?cite=1979%20c%2067%20%C2%A7%201"
                target="_blank"
                rel="noreferrer noopener"
              >
                RCW 69.50.401(e)
              </a>
            </li>
            <li>
              <a
                href="https://leg.wa.gov/CodeReviser/documents/sessionlaw/1971ex1c308.pdf?cite=1971%20ex.s.%20c%20308%20%C2%A7%2069.50.406"
                target="_blank"
                rel="noreferrer noopener"
              >
                RCW 69.50.401(d)
              </a>
            </li>
            <li>
              (*All of the above pertain to possession of forty grams or less of
              marijuana)
            </li>
          </ul>
        </p>
        <p>
          Our calculator is unable to assist you with your conviction at this
          point. We would like to hear your input and learn about your
          experience as we continue building our calculator.
        </p>
        <a href="https://docs.google.com/forms/d/1sgz7iVlJM8lHc-hD0fu8uqkHGM9Oe2d8NVkf7d6yZUU/edit " target="_blank" rel="noreferrer noopener">
          Take Survey
        </a>
      </div>
      <p className="calc-col calc-grid disclaimer">
        The information provided by the Conviction Vacation Project is not intended to replace legal advice and does not in any way constitute an attorney-client relationship. If you need legal advice or assistance, we strongly recommend that you reach out to a licensed professional.
      </p>
    </>
  );
};

export default ResultUnsure;
