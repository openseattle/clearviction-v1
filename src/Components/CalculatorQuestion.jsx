import React, { useState, useEffect } from "react";
import Button from "./Button";
import { useParams, useHistory } from "react-router-dom";
import "../CSS/Calculator.css";
import InfoModal from "../Components/InfoModal";

import MJQuestions from "../data/calculatorMJQuestions.json";
import HeadQuestions from "../data/calculatorHead.json";

/** A component to display an individual question from the question list */
const CalculatorQuestion = ({
  setUserResponse,
  userResponse,
  setIfCompleted,
  isCompleted,
}) => {
  let { branchName, number } = useParams();
  const [showQuestions, setShowQuestions] = useState(true);
  const history = useHistory();
  const [branch, setBranch] = useState();

  useEffect(() => {
    // if path changes --> switch the data state to the json matching that branch --> 'calculator/branchName'
  }, [branchName]);

  const handleClick = (a) => {
    // on last question (6) or "No" on numbers 1-5 stop delivering question --> reset state --> conditionally push number/question ID or 'results' as slug
    if (number === "6") {
      setShowQuestions(false);
      let completed = isCompleted.completed;
      completed = true;
      setIfCompleted(completed);
    }
    let newResponse = userResponse;
    newResponse[number] = a === "Yes" ? true : false;
    setUserResponse(newResponse);
    if (number === "6" || (number < 6 && a === "No")) {
      history.push(`/calculator/results`);
    } else {
      // increases progress bar with each question number
      const progressBar = document.getElementById("progressBar");
      const MAX_QUESTIONS = 6;
      progressBar.style.width = `${Math.floor(
        (number / MAX_QUESTIONS) * 100
      )}%`;

      history.push(`/calculator/${branchName}/${parseInt(number) + 1}`);
    }
  };

  const foundQuestion = () => {
    switch (branchName) {
      case "head":
        // code block
        return HeadQuestions.filter((q) => q.id == number)[0];
        break;
      case "MJ":
        // code block
        return MJQuestions.filter((q) => q.id == number)[0];
        break;
      default:
        console.log("no path given");
    }
  };

  const deliverQuestion = () => {
    if (foundQuestion()) {
      const { text, subtext, tooltip, options } = foundQuestion();
      return (
        <>
          <div className="calc-col-progress-bar">
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
          <InfoModal />
        </>
      );
    } else {
      history.push("/404");
    }
  };

  return <div className="calc-grid">{deliverQuestion()}</div>;
};

export default CalculatorQuestion;
