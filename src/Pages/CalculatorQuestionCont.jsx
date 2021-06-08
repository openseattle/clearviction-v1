import React, { useState } from "react";
import CalculatorQuestion from "./CalculatorQuestion";
import CalculatorResults from "../Components/CalculatorResults";
import { useRouteMatch, Switch, Route } from "react-router-dom";

const CalculatorQuestionCont = (props) => {
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
    <div>
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
    </div>
  );
};

export default CalculatorQuestionCont;
