import React from "react";
// import { useHistory } from "react-router-dom";
import { CalculatorService } from "./calculator/CalculatorService";
import "../CSS/Calculator.css";

const ResultUnsure = ({ branchName }) => {
  // const history = useHistory();
  // const onClick = () => history.push("/");
  let text;
  if (branchName === "mj") {
    text = CalculatorService.ResultUnsure.mj();
  } else if (branchName === "head") {
    text = CalculatorService.ResultUnsure.head;
  } else if (branchName === "main") {
    text = CalculatorService.ResultUnsure.main();
  }

  return (
    <>
      <p className="calc-col title result">
        Our calculator can’t determine your eligibility
      </p>
      <div className="calc-col results">
        <p className="calc-col branch results">{text}</p>
        <p>
          Our calculator is unable to assist you with your conviction at this
          point. We would like to hear your input and learn about your
          experience as we continue building our calculator.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeuT2oIBnxFAMv6p8tsujNlSugWxFS5la4DUC4rTFekInrcqQ/viewform?usp=sf_link "
          target="_blank"
          rel="noreferrer noopener"
          className="survey"
        >
          Take Survey
        </a>
      </div>
      <p className="calc-col disclaimer">
        The information provided by the Conviction Vacation Project is not
        intended to replace legal advice and does not in any way constitute an
        attorney-client relationship. If you need legal advice or assistance, we
        strongly recommend that you reach out to a licensed professional.
      </p>
    </>
  );
};

export default ResultUnsure;
