import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import PrimaryButton from "../Components/PrimaryButton";
import CalcContext from "../calcContext";
// import "../CSS/Calculator.css";

/** The page that gets displayed when a user clicks the Calculator link in the Nav Bar
 * Will always show welcome message, description and a start button
 */
const CalculatorLanding = () => {
  /** Use history hook to start the questionaire  */
  const history = useHistory();
  const calcContext = useContext(CalcContext);
  /** Use reset context if user navigates back to landing screen  */
  const resetContext = calcContext.resetContext;

  useEffect(() => {
    resetContext();
  }, [resetContext]);

  /** Callback for Start button to begin the questionaire */
  const onStartClick = () => {
    /** User clicks start */
    /** User is sent to first question */
    calcContext.setBranch("head");
    // calcContext.setQuestions("head");
    history.push("/calculator/head/1");
  };

  /** Callback for button if Ineligible */
  const onIneligibleClick = () => {
    history.push("/calculator/results");
  };

  return (
    <div className="calc-grid">
      <h1 className="calc-col title"> Misdemeanor Calculator</h1>

      <div className="calc-col body">
        <p className="calc-col landing-text">
          You can use our eligibility calculator to determine whether you are
          eligible to vacate your misdemeanor conviction.
        </p>
      </div>

      {/* When a user clicks this they will begin the questionaire */}
      <PrimaryButton
        className="calc-button landing"
        text="Start"
        onClick={onStartClick}
      />

      {/* When a user clicks this they will be sent to Ineligible*/}
      <div className="calc-col footer">
        <span onClick={onIneligibleClick}>
          My conviction is not a misdemeanor or I’m not sure
        </span>
      </div>
    </div>
  );
};

export default CalculatorLanding;
