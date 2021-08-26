import React from "react";
import { CalculatorService } from "./calculator/CalculatorService";

const ResultNo = ({ variation }) => {
  let text = "";

  if (variation === "mj") {
    text = CalculatorService.ResultNo.mj;
  } else if (variation === "main-violent") {
    text = CalculatorService.ResultNo.mainViolent;
  } else if (variation === "main-dui") {
    text = CalculatorService.ResultNo.mainDui;
  }

  return (
    <>
      <p className="calc-col title result">{text}</p>
      <p className="calc-col disclaimer result-no">
        The information provided by the Conviction Vacation Project is not
        intended to replace legal advice and does not in any way constitute an
        attorney-client relationship. If you need legal advice or assistance, we
        strongly recommend that you reach out to a licensed professional.
      </p>
    </>
  );
};

export default ResultNo;
