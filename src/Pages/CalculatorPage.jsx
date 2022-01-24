import { useEffect } from "react";
import { trackPageview, trackClick } from "../trackingUtils";
import { useLocation } from "react-router-dom";
import calculatorPages from "../data/calculatorPages";
import ToolTipModal from "../Components/ToolTipModal";
import Text from "../ui-kit/Text";
import ProgressBar from "../Components/ProgressBar";
import "../CSS/Calculator.css";

/** MATERIAL UI IMPORTS */
import { Box, Link, Container, Button, Grid } from "@material-ui/core";

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
            style={{ backgroundColor: BUTTON_COLORS[color || "blue"] }}
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
          <Link
            href={href}
            target="_blank"
            rel="noreferrer"
            key={text}
            onClick={() => trackClick(text)}
            style={{display: "block", marginTop: "0.5em", textDecoration: "underline"}}
          >
            {text}
          </Link>
        );
      case "list":
        return (
          <ul key={items[0]}>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
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
      <Container maxWidth="xs" padding={10}>
        <Grid container direction="column" spacing={2}>
          {progressBar && (
            <ProgressBar
              currentSectionName={progressBar.currentSectionName}
              currentSection={progressBar.currentSection}
              totalSections={progressBar.totalSections}
            />
          )}
          {header && <Text text={header} variant={"h3"}></Text>}
          {body && <Container maxWidth="sm">{body.map(renderBody)}</Container>}
          {buttons && renderButtons(buttons)}
          {tooltip && <ToolTipModal text={tooltip} />}
          {footerLink && (
            <a
              target="_blank"
              rel="noreferrer"
              href={footerLink.href}
              onClick={() => trackClick(footerLink.text)}
            >
              {footerLink.text}
            </a>
          )}
          {disclaimer && <Text text={disclaimer} variant={"h6"}></Text>}
        </Grid>
      </Container>
    </Box>
  );
};

export default CalculatorPage;
