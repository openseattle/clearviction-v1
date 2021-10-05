import "./App.css";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//component imports
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CalculatorPage from "./Pages/CalculatorPage";
import ErrorPage from "./Pages/ErrorPage";
import { CalcProvider } from "./calcContext";

function App() {
  return (
    <div className="App">
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
