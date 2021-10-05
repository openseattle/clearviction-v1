import React from "react";
import { useLocation } from "react-router-dom";
import calculatorPages from "../data/calculatorPages";
import ToolTipModal from "../Components/ToolTipModal";

/** MATERIAL UI IMPORTS */
import { Typography } from "@mui/material";
import Box from '@material-ui/core/Box';
import Link from '@mui/material/Link';
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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

  const { header, body, buttons, footerLink, disclaimer, tooltip } = content;

  const renderButtons = (buttons) =>
    buttons.map(({ text, href, color }) => {
      return (
        <Stack direction="column" style={{padding: 10}}>
          <Button
            variant="contained"
            href={href}
            style={
              { backgroundColor: BUTTON_COLORS[color || "blue"] }}
          >
            {text}
          </Button>
        </Stack>
      );
    }
  );

  const renderBody = ({ type, text, href }) => {
    switch (type) {
      case "paragraph":
        return (
          <Typography variant="body1">
            {text}
          </Typography>
        );
      case "link":
        return (
          <Link href={href} target="_blank" rel="noreferrer">
            {text}
          </Link>
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
        <Stack direction="column" spacing={2}>
          { header && 
              <Typography variant="h5">{header}</Typography> 
          }
          { body && 
            <Container maxWidth="sm">{ body.map(renderBody) }</Container>
          }
          { buttons && 
            renderButtons(buttons)
          }
          { tooltip &&
            <ToolTipModal
              text={tooltip}
            />     
          }
          { footerLink && (
            <a
              target="_blank"
              rel="noreferrer"
              href={footerLink.href}
            >
              {footerLink.text}
            </a>
          ) }
          { disclaimer && 
            <Typography variant="body1">{disclaimer}</Typography> 
          }
        </Stack>
      </Container>
    </Box>
  );
};

export default CalculatorPage;