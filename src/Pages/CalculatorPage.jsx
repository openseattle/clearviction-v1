import { useEffect } from "react";
import { trackPageview } from "../trackingUtils";
import { useLocation } from "react-router-dom";
import calculatorPages from "../data/calculatorPages";
import "../CSS/Calculator.css";

/** MATERIAL UI IMPORTS */
import { Container, Grid } from "@material-ui/core";
import MainBranchTitle from "./Calculator/MainBranchTitle";
import SpecialCaseTitle from "./Calculator/SpecialCaseTitle";
import { PageType } from "../data/calculatorPagesTypes";
import QuestionScreen from "./Calculator/QuestionScreen";
import EndScreen from "./Calculator/EndScreen";
import QuickStartGuide from "./Calculator/QuickStartGuide";
import ProgressBar from "../Components/ProgressBar";
import { useDocumentTitle } from "../Components/customHooks/useDocumentTitle";

const CalculatorPage = () => {
    const [documentTitle, setDocumentTitle] = useDocumentTitle("Eligibility Calculator - ");
    console.log("enter calculator");
    const { pathname } = useLocation();
    const indexOfPageId = pathname.split("/").length - 1;
    const pageId = pathname.split("/")[indexOfPageId];
    const content = calculatorPages[pageId];

    if (!content) window.location = "/404";
    useEffect(() => trackPageview("Calculator"), []);

    const { header, body, type, buttons, disclaimer, tooltip, progressBar, showRestartButton } = content;

    const renderPage = type => {
        switch (type) {
            case PageType.GUIDE:
                return (
                    <QuickStartGuide
                        header={header}
                        body={body}
                        buttonText={buttons[0].text}
                        buttonHref={buttons[0].href}
                        tooltip={tooltip}
                        progressBar={progressBar}
                    />
                );
            case PageType.MAIN:
                return (
                    <MainBranchTitle
                        header={header}
                        body={body}
                        buttonText={buttons[0].text}
                        buttonHref={buttons[0].href}
                        progressBar={progressBar}

                    />
                );
            case PageType.SPECIAL:
                return (
                    <SpecialCaseTitle
                        header={header}
                        body={body}
                        buttonText={buttons[0].text}
                        buttonHref={buttons[0].href}
                    />
                );
            case PageType.QUESTION:
                return (
                    <QuestionScreen
                        header={header}
                        body={body}
                        buttons={buttons}
                        progressBar={progressBar}
                        tooltip={tooltip}
                    />
                );
            case PageType.END:
                return (
                    <EndScreen
                        header={header}
                        body={body}
                        buttons={buttons}
                        tooltip={tooltip}
                        showRestartButton={showRestartButton}
                        disclaimer={disclaimer}
                        progressBar={progressBar}
                    />
                );
            default:
                break;
        }
    };

    return (
        <Container maxWidth="md">
            <Grid container direction="column" spacing={2}>
                {renderPage(type)}
            </Grid>
        </Container>
    );
};

export default CalculatorPage;
