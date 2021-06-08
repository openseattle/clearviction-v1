import React, { useState } from "react";
import Button from "../Components/Button";
import { useParams, useHistory } from "react-router-dom";

// data import
import Questions from "../data/calcuatorQuestions.json";

/** A page to display an individual question from the question list */
const CalculatorQuestion = ({ setUserResponse, userResponse }) => {
  let { number } = useParams();
  const [showQuestions, setShowQuestions] = useState(true);
  const history = useHistory();

  const handleClick = (a, i) => {
    // on last question (6) stop delivering question --> reset state --> conditionally push number/question ID or 'results' as slug
    if (number === "6") setShowQuestions(false);
    let newResponse = userResponse;
    newResponse[number] = a === "Yes" ? true : false;
    setUserResponse(newResponse);
    if (number === "6") {
      history.push(`/calculator/results`);
    } else {
      history.push(`/calculator/${parseInt(number) + 1}`);
    }
  };

  const deliverQuestion = () => {
    const { text, tooltip, options } = Questions.filter(
      (q) => q.id == number
    )[0];
    return (
      <div id="calc-quest">
        <h1>{text}</h1>
        {tooltip}
        <ul>
          {options.map((a, i) => (
            <Button text={a} onClick={() => handleClick(a, i)} />
          ))}
        </ul>
      </div>
    );
  };

  return <div id="calc-quest-cont">{showQuestions && deliverQuestion()}</div>;
};

export default CalculatorQuestion;
