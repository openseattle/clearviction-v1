import React from "react";
import { useHistory } from "react-router-dom";
import "../CSS/Calculator.css";

const ResultYes = () => {
  const history = useHistory();
  const onClick = () => history.push("/");

  return (
    <>
      <p className="calc-col title">
        From your answers, it seems that you may be eligible to vacate your
        marijuana misdemeanor conviction!
      </p>
      <div className="calc-col results">
        <p>It looks like your conviction may be one of the following:</p>
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
          <li>(Possession of forty grams or less of marijuana)</li>
        </ul>
        <h3>Next steps</h3>
        <ol>
          <li>
            Fill out a Motion and Declaration for Order Vacating Marijuana
            Conviction (CrRLJ 09.0100).
            <p>
              <a
                href="https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38"
                target="_blank"
                rel="noreferrer"
              >
                https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38
              </a>
            </p>
          </li>
          <li>
            See instructions for vacating a conviction in form CrRLJ 09.0300
            <p>
              <a
                href="https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38"
                target="_blank"
                rel="noreferrer"
              >
                https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38
              </a>
            </p>
          </li>
        </ol>
      </div>
    </>
  );
};

export default ResultYes;
