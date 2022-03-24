import { useEffect } from "react";
import { trackPageview, trackClick } from "../trackingUtils";
import { useLocation } from "react-router-dom";
import calculatorPages from "../data/calculatorPages";
import ToolTipModal from "../Components/ToolTipModal";
import Text from "../ui-kit/Text";
import ProgressBar from "../Components/ProgressBar";
import RestartButton from "../Components/RestartButton";
import "../CSS/Calculator.css";

/** MATERIAL UI IMPORTS */
import {
  Box,
  List,
  Container,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { CVPListItem } from "../ui-kit/ListItem";
import { BackButton } from "../ui-kit/BackButton";
import PrimaryButton from "../ui-kit/PrimaryButton";
import MainBranchTitle from "./Calculator/MainBranchTitle";
import SpecialCaseTitle from "./Calculator/SpecialCaseTitle";
import { PageType } from "../data/calculatorPagesTypes";

const BUTTON_COLORS = {
  blue: "#4e6c99",
  green: "#419D77",
};

const CalculatorPage = () => {
  const { pathname } = useLocation();
  const indexOfPageId = pathname.split("/").length - 1;
  const pageId = pathname.split("/")[indexOfPageId];
  const content = calculatorPages[pageId];

  if (!content) window.location = "/404";
  useEffect(() => trackPageview("Calculator"), []);

  const {
    header,
    body,
    type,
    buttons,
    disclaimer,
    tooltip,
    progressBar,
    showRestartButton,
  } = content;

  const renderButtons = (buttons) =>
    buttons.map(({ text, href, color }) => {
      return (
        <Grid container key={text} direction="column" style={{ padding: 10 }}>
          <PrimaryButton
            onClick={() => trackClick(text)}
            href={href}
            text={text}
          />
        </Grid>
      );
    });

  const renderBody = (type) => {
    console.log(type);
    switch (type) {
      case PageType.MAIN:
        return (
          <MainBranchTitle
            header={header}
            body={body[0].text}
            buttonText={buttons[0].text}
            buttonHref={buttons[0].href}
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
    }
  };
  return (
    <Box
      sx={{
        padding: 20,
      }}
    >
      <Container maxWidth="sm" padding={10}>
        <Grid container direction="column" spacing={2}>
          {progressBar && (
            <ProgressBar
              currentSectionName={progressBar.currentSectionName}
              currentSection={progressBar.currentSection}
              totalSections={progressBar.totalSections}
            />
          )}
          {/* back button now on all pages but the landing and quick start pages - 
          we can probably do this cleaner by creating a more formal standalone 
          quick start page that can launch the calculator rather than having it 
          share interface with the calculator.*/}
          {/* {!["/calculator/landing-0", "/calculator/landing-1"].includes(
            pathname
          ) && (
            <Grid item>
              <BackButton variant="text" />
            </Grid>
          )} */}

          {body && renderBody(type)}
          {/* {buttons && renderButtons(buttons)} */}
          {/* {showRestartButton && <RestartButton />} */}
          {/* {tooltip && <ToolTipModal text={tooltip} />} */}
          {/* {disclaimer && (
            <Container className="disclaimer">
              <Typography variant="h6">{disclaimer}</Typography>
            </Container>
          )} */}
        </Grid>
      </Container>
    </Box>
  );
};

export default CalculatorPage;
