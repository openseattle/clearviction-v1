import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory, Switch, Route } from "react-router-dom";
import CalculatorQuestion from "../Components/CalculatorQuestion";
import CalculatorResults from "../Components/CalculatorResults";
import "../CSS/Calculator.css";

import MJQuestions from "../data/calculatorMJQuestions.json";
import HeadQuestions from "../data/calculatorHead.json";

/** Directs traffic to result screen or current question based on URL */
const CalculatorQuestionCont = () => {
  let { path } = useRouteMatch();
  let history = useHistory();
  useEffect(() => {}, []);
  let Questions = { head: HeadQuestions, mj: MJQuestions };

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
  /**
   * Default isCompleted is false to handle some edge cases
   * 1. If the finish the calculator it will update to true
   */
  const [isCompleted, setIfCompleted] = useState({
    completed: false,
  });

  /** Return a switch that routes to result screen, or question to display */
  return (
    <>
      <Switch>
        <Route exact path={`${path}/results`}>
          <CalculatorResults
            userResponse={userResponse}
            isCompleted={isCompleted}
          />
        </Route>
        <Route exact path={`${path}/:branchName/:number`}>
          <CalculatorQuestion
            userResponse={userResponse}
            setUserResponse={setUserResponse}
            isCompleted={isCompleted}
            setIfCompleted={setIfCompleted}
          />
        </Route>
      </Switch>
    </>
  );
};

export default CalculatorQuestionCont;
