import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "../Components/Button";
import CalcContext from "../calcContext";
import "../CSS/Calculator.css";

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
        <ul className="small">
          <li>
            <a
              href="https://app.leg.wa.gov/rcw/default.aspx?cite=69.50.4014"
              target="_blank"
              rel="noreferrer noopener"
            >
              RCW 69.50.4014
            </a>
          </li>
          <li>
            <a
              href="https://leg.wa.gov/CodeReviser/documents/sessionlaw/1979c67.pdf?cite=1979%20c%2067%20%C2%A7%201"
              target="_blank"
              rel="noreferrer noopener"
            >
              RCW 69.50.401(e)
            </a>
          </li>
          <li>
            <a
              href="https://leg.wa.gov/CodeReviser/documents/sessionlaw/1971ex1c308.pdf?cite=1971%20ex.s.%20c%20308%20%C2%A7%2069.50.406"
              target="_blank"
              rel="noreferrer noopener"
            >
              RCW 69.50.401(d)
            </a>
          </li>
        </ul>
      </div>

      {/* When a user clicks this they will begin the questionaire */}
      <Button
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
