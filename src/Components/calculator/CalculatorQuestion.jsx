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

  useEffect(() => {
    //set theme by branch. Currenly only handles progress bar visability and size
    const progressBar = document.getElementById("progressBar");
    const progressBarWrapper = document.getElementById("progressBarWrapper");
    progressBarWrapper.style.visibility =
      calcContext.branchTheme[`${calcContext.currBranch}`].visibility;
    progressBar.style.width =
      calcContext.branchTheme[`${calcContext.currBranch}`].width;
    //renders width of progress bar if vissable updates if user uses back button
    if (
      calcContext.branchTheme[`${calcContext.currBranch}`].visibility ===
      "visible"
    ) {
      const MAX_QUESTIONS = calcContext.currBranchQuestions.length;
      progressBar.style.width = `${Math.floor(
        ((number - 1) / MAX_QUESTIONS) * 100
      )}%`;
    }
    // if path changes --> switch the data state to the json matching that branch --> 'calculator/branchName'
  }, [calcContext, number]);

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
    return calcContext.currBranchQuestions.filter((q) => q.id == number)[0];
  };

  const deliverQuestion = () => {
    if (foundQuestion()) {
      const { text, subtext, tooltip, options } = foundQuestion();
      return (
        <>
          <div className="calc-col-progress-bar" id="progressBarWrapper">
            <div className="calc-progress-bar" id="progressBar" />
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
