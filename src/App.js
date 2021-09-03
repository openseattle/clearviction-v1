import "./App.css";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//component imports
import NotFoundPage from "./Components/NotFoundPage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Resources from "./Pages/Resources";
import Volunteer from "./Pages/Volunteer";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Calculator from "./Pages/Calculator";
import { CalcProvider } from "./calcContext";

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
        <Route path="/resources">
          <Resources />
        </Route>
        <Route path="/volunteer">
          <Volunteer />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <CalcProvider>
          <Route path="/calculator/:pageId">
            <Calculator />
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
