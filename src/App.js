import "./App.css";

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//component imports
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import Navigation from "./Components/Navigation";
import CalculatorPage from "./Pages/CalculatorPage";
import ErrorPage from "./Pages/ErrorPage";
import { CalcProvider } from "./calcContext";
import { makeStyles, Grid } from '@material-ui/core';

// const useStyles = makeStyles(() => ({
//   container: {
//       border: '3px solid purple',
//       padding: '10px',
//       display: 'block'
//   }
// }));

function App() {
  // const classes = useStyles();
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/404">
          <ErrorPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <CalcProvider>
          <Route path="/calculator/:pageId">
            <CalculatorPage />
          </Route>
          <Route exact path="/calculator">
            <Redirect to="/calculator/landing-0" />
          </Route>
        </CalcProvider>
      </Switch>
    </div>
  );
}

export default App;
