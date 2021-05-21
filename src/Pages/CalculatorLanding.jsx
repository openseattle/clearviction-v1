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
    history.push("/calculator/MMHP-2");
  };

  /** Callback for button if Ineligible */
  const onIneligibleClick = () => {
    /** User clicks I'm Not Sure */
    /** User is sent to unfortunately question */
    history.push("/calculator/MMPS-0");
  };

  return (
    <div>
      <h1>Welcome to Conviction Vacation Project!</h1>
      {/* // TODO Import the figma text */}
      <p>Welcome to the Conviction Vacation Project! You can use our eligibility calculator to know if you are eligible for conviction vacation, based on the information you provide. Currently, we only process convictions that are misdemeanors for possession of marijuana. Does that sound like your conviction?</p>

      {/* When a user clicks this they will begin the questionaire */}
      <Button text="That sounds like what I need" onClick={onStartClick} />
       {/* When a user clicks this they will be sent to Ineligible*/}
      <Button text="My conviction is NOT a marijuana misdemeanor" onClick={onIneligibleClick} />
    </div>
  );
};

export default CalculatorLanding;
