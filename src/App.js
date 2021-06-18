import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
//component imports
import NotFoundPage from "./Components/NotFoundPage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Resources from "./Pages/Resources";
import Volunteer from "./Pages/Volunteer";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CalculatorLanding from "./Pages/CalculatorLanding";
import CalculatorQuestionContainer from "./Pages/CalculatorQuestionContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/404">
          <NotFoundPage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="/calculator">
          <CalculatorLanding />
        </Route>
        <Route path="/resources">
          <Resources />
        </Route>
        <Route path="/volunteer">
          <Volunteer />
        </Route>
        <Route path="/calculator">
          <CalculatorQuestionContainer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
