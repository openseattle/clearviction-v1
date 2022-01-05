import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navigation from "./Components/Navigation";
import CalculatorPage from "./Pages/CalculatorPage";
import ErrorPage from "./Pages/ErrorPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import VolunteerPage from "./Pages/VolunteerPage";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/404">
          <ErrorPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/calculator/:pageId">
          <CalculatorPage />
        </Route>
        <Route exact path="/calculator">
          <Redirect to="/calculator/landing-0" />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/volunteer">
          <VolunteerPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
