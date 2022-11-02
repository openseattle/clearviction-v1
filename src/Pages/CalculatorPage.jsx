import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../CSS/Calculator.css";

/** MATERIAL UI IMPORTS */
import { Container, Grid } from "@mui/material";
import MainBranchTitle from "./Calculator/MainBranchTitle";
import SpecialCaseTitle from "./Calculator/SpecialCaseTitle";
import { PageType } from "../data/calculatorPagesTypes.ts";
import QuestionScreen from "./Calculator/QuestionScreen";
import EndScreen from "./Calculator/EndScreen";
import QuickStartGuide from "./Calculator/QuickStartGuide";
import { useDocumentTitle } from "../Components/customHooks/useDocumentTitle";
import calculatorPages from "../data/calculatorPages.ts";
import { trackPageview } from "../trackingUtils";

const CalculatorPage = () => {
    useDocumentTitle("Eligibility Calculator - ");
    const { pathname } = useLocation();
    const indexOfPageId = pathname.split("/").length - 1;
    const pageId = pathname.split("/")[indexOfPageId];
    const content = calculatorPages[pageId];

    if (!content) window.location = "/404";
    useEffect(() => trackPageview("Calculator"), []);

    const { header, body, type, buttons, disclaimer, tooltip, progressBar, showRestartButton } = content;

    const renderPage = pageType => {
        switch (pageType) {
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
                        showProgressBar={Boolean(progressBar)}
                    />
                );
            default:
                return null;
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
