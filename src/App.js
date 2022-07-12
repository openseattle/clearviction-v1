import "./App.css";
import { CssBaseline, ThemeProvider, Box } from "@material-ui/core";
import Theme from "./Components/Theme";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navigation from "./Components/Navigation";
import CalculatorPage from "./Pages/CalculatorPage";
import ErrorPage from "./Pages/ErrorPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import Footer from "./Components/Footer";
import GetInvolvedPage from "./Pages/GetInvolvedPage";
import GetStartedPage from "./Pages/GetStartedPage";
import ResourcesPage from "./Pages/ResourcesPage";
import ContactSuccessPage from "./Pages/ContactSuccessPage";
import OnboardingHome from "./Pages/Onboarding/OnboardingHome";
import OnboardingMod1 from "./Pages/Onboarding/OnboardingMod1";
import OnboardingMod2 from "./Pages/Onboarding/OnboardingMod2";
import OnboardingMod3 from "./Pages/Onboarding/OnboardingMod3";
import OnboardingMod4 from "./Pages/Onboarding/OnboardingMod4";

function App() {
    const location = useLocation();

    return (
        <div>
            <ThemeProvider theme={Theme}>
                <Box
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "100vh",
                    }}
                >
                    <CssBaseline />
                    {location.pathname.includes("/onboarding") ? null : <Navigation />}
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
                        <Route exact path="/contact/success">
                            <ContactSuccessPage />
                        </Route>
                        <Route path="/get-involved">
                            <GetInvolvedPage />
                        </Route>
                        <Route path="/get-started">
                            <GetStartedPage />
                        </Route>
                        <Route path="/resources">
                            <ResourcesPage />
                        </Route>

                        {/* Volunteer onboarding pages */}
                        <Route exact path="/onboarding">
                            <OnboardingHome />
                        </Route>
                        <Route path="/onboarding-mod1">
                            <OnboardingMod1 />
                        </Route>
                        <Route path="/onboarding-mod2">
                            <OnboardingMod2 />
                        </Route>
                        <Route path="/onboarding-mod3">
                            <OnboardingMod3 />
                        </Route>
                        <Route path="/onboarding-mod4">
                            <OnboardingMod4 />
                        </Route>
                        <Route>
                            <Redirect to="/404" />
                        </Route>
                    </Switch>
                    <Footer />
                </Box>
            </ThemeProvider>
        </div>
    );
}

export default App;
