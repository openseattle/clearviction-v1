import React from "react";
import Button from "./Button";
import { useHistory } from "react-router-dom";

const ResultYes = () => {
  const history = useHistory();
  const onClick = () => history.push("/");

  return (
    <>
      <p class="calc-col title">
        From your answers, it seems that you may be eligible to vacate your
        marijuana misdemeanor conviction!
      </p>
      <div className="calc-col results">
        <p>
          Your next step is to fill out a Motion and Declaration for Order
          Vacating Marijuana Conviction.
        </p>

        <a
          href="https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38"
          target="_blank"
          rel="noreferrer"
        >
          Court Form No. CrRLJ 09.0800
        </a>

        <p>Steps to vacating a conviction in Washington state:</p>

        <a
          href="https://www.expeal.com/steps/#washington"
          target="_blank"
          rel="noreferrer"
        >
          https://www.expeal.com/steps/#washington
        </a>
      </div>

      <Button className="calc-button" onClick={onClick} text="Back to Site" />
    </>
  );
};

export default ResultYes;
