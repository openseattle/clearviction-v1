import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Components/Button";
//! Import css

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
    history.push("/calculator/results_no");
  };

  return (
    <div id="calc-landing-page-cont">
      <div>
        <h1>Welcome to Conviction Vacation Project!</h1>
        {/* // TODO Import the figma text */}
        <p>
          You can use our eligibility calculator to know if you are eligible to
          vacate your marijuana conviction.{" "}
        </p>
        <p className="sub-text">
          *This only works with marijuana misdemeanor convictions currently{" "}
        </p>

        {/* When a user clicks this they will begin the questionaire */}
        <Button styles="calc-btn" text="Start" onClick={onStartClick} />
        <p id="defaultNoLink" onClick={onIneligibleClick}>
          My conviction is not a marijuana misdemeanor
        </p>
      </div>
    </div>
  );
};

export default CalculatorLanding;
