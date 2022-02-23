import { useEffect } from "react";
import { trackPageview, trackClick } from "../trackingUtils";
import { Link, useLocation } from "react-router-dom";
import calculatorPages from "../data/calculatorPages";
import ToolTipModal from "../Components/ToolTipModal";
import Text from "../ui-kit/Text";
import ProgressBar from "../Components/ProgressBar";
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
    buttons,
    footerLink,
    disclaimer,
    tooltip,
    progressBar,
  } = content;

  const renderButtons = (buttons) =>
    buttons.map(({ text, href, color }) => {
      return (
        <Grid container key={text} direction="column" style={{ padding: 10 }}>
          <Button
            onClick={() => trackClick(text)}
            variant="contained"
            href={href}
            style={{
              backgroundColor: BUTTON_COLORS[color || "blue"],
              color: "var(--white)",
            }}
          >
            <Text text={text} variant={"h6"}></Text>
          </Button>
        </Grid>
      );
    });

  const renderBody = ({ type, text, href, items }) => {
    switch (type) {
      case "paragraph":
        return <Text key={text} text={text} variant={"h4"}></Text>;
      case "link":
        return (
          <List>
            <CVPListItem
              isLink={true}
              useBulletPoint={true}
              text={text}
              href={href}
              onClick={() => trackClick(text)}
            />
          </List>
        );
      case "list":
        return (
          <List>
            {items.map((item) => (
              <CVPListItem isLink={false} useBulletPoint={true} text={item} />
            ))}
          </List>
        );
      default:
        break;
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
          {!["/calculator/landing-0", "/calculator/landing-1"].includes(
            pathname
          ) && (
            <Grid item>
              <BackButton />
            </Grid>
          )}

          {header && <Text text={header} variant={"h3"}></Text>}
          {body && <Container maxWidth="sm">{body.map(renderBody)}</Container>}
          {buttons && renderButtons(buttons)}
          {tooltip && <ToolTipModal text={tooltip} />}
          {footerLink && (
            <Link
              target="_blank"
              rel="noreferrer"
              href={footerLink.href}
              onClick={() => trackClick(footerLink.text)}
            >
              {footerLink.text}
            </Link>
          )}
          {disclaimer && (
            <Container className="disclaimer">
              <Typography variant="h6">{disclaimer}</Typography>
            </Container>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default CalculatorPage;
