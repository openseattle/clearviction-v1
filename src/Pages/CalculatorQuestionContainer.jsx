import React, { useState } from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import CalculatorQuestion from "../Components/CalculatorQuestion";
import CalculatorResults from "../Components/CalculatorResults";
import "../CSS/Calculator.css";

const CalculatorQuestionCont = () => {
  let { path } = useRouteMatch();

  const [userResponse, setUserResponse] = useState({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
  });

  return (
    <>
      <Switch>
        <Route path={`${path}/results_no`}>
          <CalculatorResults
            userResponse={userResponse}
            setUserResponse={setUserResponse}
          />
        </Route>
        <Route path={`${path}/results`}>
          <CalculatorResults
            userResponse={userResponse}
            setUserResponse={setUserResponse}
          />
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
