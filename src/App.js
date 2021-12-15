import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navigation from "./Components/Navigation";
import CalculatorPage from "./Pages/CalculatorPage";
import ErrorPage from "./Pages/ErrorPage";

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
        </Switch>
    </div>
  );
}

export default App;
