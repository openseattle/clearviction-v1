import React, { useState, useEffect, useContext } from "react";
import Button from "../Button";
import { useParams, useHistory } from "react-router-dom";
import InfoModal from "../InfoModal";
import { CalculatorService } from "./CalculatorService";
import "../../CSS/Calculator.css";
import CalcContext from "../../calcContext";

/** A component to display an individual question from the question list */
const CalculatorQuestion = () => {
  const calcContext = useContext(CalcContext);
  let { number } = useParams();
  const [showQuestions, setShowQuestions] = useState(true);
  const history = useHistory();
  //css
  const theme = calcContext.branchTheme[calcContext.currBranch];
  let progressBarWidth = Math.floor(
    (number / calcContext.currBranchQuestions.length) * 100
  );

  useEffect(() => {}, []);

  const handleClick = (a) => {
    let slug = `${calcContext.currBranch}/${parseInt(number) + 1}`;

    // if head branch
    if (calcContext.currBranch === "head") {
      slug = CalculatorService.handleHead(a, number, calcContext.setBranch);
    }

    // if mj branch
    else if (calcContext.currBranch === "mj") {
      slug = CalculatorService.handleMJ(a, number, calcContext.setEligibility);
      if (slug === "results") {
        setShowQuestions("false");
      }
    }

    history.push(`/calculator/${slug}`);
  };

  const foundQuestion = () => {
    return calcContext.currBranchQuestions.filter((q) => q.id === number)[0];
  };

  const deliverQuestion = () => {
    if (foundQuestion()) {
      const { text, subtext, tooltip, options } = foundQuestion();
      return (
        <>
          <div
            className="calc progress-bar-wrapper"
            id="progressBarWrapper"
            style={{ visibility: theme.progressBar.visibility }}
          >
            <div
              className="calc progress-bar"
              id="progressBar"
              style={{ width: `${progressBarWidth}%` }}
            />
          </div>
          <p className="calc-col title question">{text}</p>
          {subtext && <p className="calc-subtext">{subtext}</p>}
          {tooltip}
          <div className="calc-col answers">
            {options.map((a) => (
              <Button
                key={a}
                text={a}
                className="calc-button"
                onClick={() => handleClick(a)}
                style={
                  a === "All other cases"
                    ? { backgroundColor: theme.buttons.backgroundColor }
                    : { backgroundColor: "#4e6c99" }
                }
              />
            ))}
          </div>
          <InfoModal branch={calcContext.currBranch} id={number} />
        </>
      );
    } else {
      history.push("/404");
    }
  };

  return <div className="calc-grid">{showQuestions && deliverQuestion()}</div>;
};

export default CalculatorQuestion;
