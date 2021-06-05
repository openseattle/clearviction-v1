import React from "react";
import Button from "../Components/Button";
import { useParams, useHistory } from "react-router-dom";
import "../CSS/Calculator.css";

// data import
import Questions from "../data/calculatorQuestions.json";

/**
 * ! Thoughts on Data Structure
 * for the answers array we could also use tupules
 * "answers": [ ["yes", 0], ["no", 1],["text to display", 2]]
 *  or keep it as is
 * reinforced data rules vs. nesting ??
 */

/** A page to display an individual question from the question list */
const CalculatorQuestion = () => {
  /** Grab the number that comes after /calculator in the url */
  const { number } = useParams();
  const history = useHistory();
  /**
   * Filter through Questions file to find question to display
   * useParams returns a string, so we have to parseInt the `number` value
   * Filter returns an array so we grab the first element
   * and destructure the question properties: question, tooltip, and answers
   */
  const { question, tooltip, answers, next_question } = Questions.filter(
    // no longer need to change ID to integer
    (q) => q.id == number
  )[0];

  const handleClick = (i) => {
    /**
     * grabbing index value at next_question[i]
     * pushing to history
     * history will trickle down to filter function on line 19 to update the question.
     */
    history.push(`/calculator/${next_question[i]}`);
  };

  return (
    <div className="calc-grid">
      <p className="calc-col body">{question}</p>
      {tooltip}
      <div className="calc-col">
        {answers.map((a, i) => (
          /**
           * adding index to handleClick function
           * will determine which index to grab from within next_question array
           * which corresponds to the answer's index within answers array.
           */
          <Button
            className="calc-button"
            text={a}
            onClick={() => handleClick(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default CalculatorQuestion;
