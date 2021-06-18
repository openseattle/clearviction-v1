import React, { useState } from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import CalculatorQuestion from "../Components/CalculatorQuestion";
import CalculatorResults from "../Components/CalculatorResults";
import "../CSS/Calculator.css";

/** Directs traffic to result screen or current question based on URL */
const CalculatorQuestionCont = () => {
  let { path } = useRouteMatch();

  /**
   * Default userResponse is false to handle some edge cases
   * 1. They click the link on the landing page because their conviction is not a MJ misdemeanor
   * 2. They navigate to 'calculator/results' using their url bar
   */
  const [userResponse, setUserResponse] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  /** Return a switch that routes to result screen, or question to display */
  return (
    <>
      <Switch>
        <Route exact path={`${path}/results`}>
          <CalculatorResults userResponse={userResponse} />
        </Route>
        <Route exact path={`${path}/:number`}>
          <CalculatorQuestion
            userResponse={userResponse}
            setUserResponse={setUserResponse}
          />
        </Route>
      </Switch>
    </>
  );
};

export default CalculatorQuestionCont;
