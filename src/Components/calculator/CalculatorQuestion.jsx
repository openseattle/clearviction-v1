import React, { useState, useEffect } from "react";
import Button from "../Button";
import { useParams, useHistory } from "react-router-dom";
import "../../CSS/Calculator.css";
import InfoModal from "../InfoModal";

import MJQuestions from "../../data/calculatorMJQuestions.json";
import HeadQuestions from "../../data/calculatorHead.json";

/** A component to display an individual question from the question list */
const CalculatorQuestion = ({
  setUserResponse,
  userResponse,
  setIfCompleted,
  isCompleted,
  branch,
  branchTheme,
  setBranch,
  currBranchQuestions,
  setQuestions,
}) => {
  let { branchName, number } = useParams();
  const [showQuestions, setShowQuestions] = useState(true);
  const history = useHistory();

  useEffect(() => {
    //set branch by slug helps to prevent errors is user pushes back button
    setBranch(branchName);
    //set theme by branch. Currenly only handles progress bar visability and size
    const progressBar = document.getElementById("progressBar");
    const progressBarWrapper = document.getElementById("progressBarWrapper");
    progressBarWrapper.style.visibility = branchTheme[`${branch}`].visibility;
    progressBar.style.width = branchTheme[`${branch}`].width;
    //renders width of progress bar if vissable updates if user uses back button
    if (branchTheme[`${branch}`].visibility === "visible") {
      const MAX_QUESTIONS = currBranchQuestions.length;
      progressBar.style.width = `${Math.floor(
        ((number - 1) / MAX_QUESTIONS) * 100
      )}%`;
    }
    // if path changes --> switch the data state to the json matching that branch --> 'calculator/branchName'
  }, [branch, branchTheme, branchName, setBranch, number, currBranchQuestions]);

  const handleClick = (a) => {
    // on last question (6) or "No" on numbers 1-5 stop delivering question --> reset state --> conditionally push number/question ID or 'results' as slug
    // attempted to extrapolate this out into a method (above) but for some reason it redirects to 404
    // handleBranchRedirect(a);

    if (a === "Possession of Marijuana") {
      setQuestions("mj");
      return history.push(`/calculator/mj/1`);
    } else if (a === "Prostitution Misdemeanor") {
      return history.push(`/calculator/`);
    } else if (a === "Violation of a Fishing Regulation") {
      return history.push(`/calculator/`);
    } else if (a === "All other cases") {
      return history.push(`/calculator/`);
    }

    if (number === "4") {
      setShowQuestions(false);
      let completed = isCompleted.completed;
      completed = true;
      setIfCompleted(completed);
    }
    let newResponse = userResponse;
    newResponse[number] = a === "Yes" ? true : false;
    setUserResponse(newResponse);
    if (number === "4" || (number < 4 && a === "No")) {
      history.push(`/calculator/results`);
    } else {
      history.push(`/calculator/${branchName}/${parseInt(number) + 1}`);
    }
  };

  const foundQuestion = () => {
    return currBranchQuestions.filter((q) => q.id == number)[0];
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
          <InfoModal branch={branchName} id={number} />
        </>
      );
    } else {
      history.push("/404");
    }
  };

  return <div className="calc-grid">{showQuestions && deliverQuestion()}</div>;
};

export default CalculatorQuestion;
