import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Components/Button";
import "../CSS/Calculator.css";

/** The page that gets displayed when a user clicks the Calculator link in the Nav Bar
 * Will always show welcome message, description and a start button
 */
const CalculatorLanding = () => {
  /** Use history hook to start the questionaire  */
  const history = useHistory();

  /** Callback for Start button to begin the questionaire */
  const onStartClick = () => {
    /** User clicks start */
    /** User is sent to first question */
    history.push("/calculator/1");
  };

  /** Callback for button if Ineligible */
  const onIneligibleClick = () => {
    history.push("/calculator/results");
  };

  return (
    <div className="calc-grid">
      <h1 className="calc-col title">
        Welcome to the Conviction Vacation Project!
      </h1>

      <div className="calc-col body">
        <p>
          You can use our eligibility calculator to know if you are eligible to
          vacate your marijuana conviction.
        </p>
        <small>
          *This only works with marijuana misdemeanor convictions currently
        </small>
      </div>

      {/* When a user clicks this they will begin the questionaire */}
      <Button className="calc-button" text="Start" onClick={onStartClick} />

      {/* When a user clicks this they will be sent to Ineligible*/}
      <div className="calc-col footer">
        <span onClick={onIneligibleClick}>
          My conviction is not a marijuana misdemeanor.
        </span>
      </div>
    </div>
  );
};

export default CalculatorLanding;
