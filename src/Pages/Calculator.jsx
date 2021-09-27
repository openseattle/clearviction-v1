import React from "react";
import { useLocation } from "react-router-dom";
import calculatorPages from "../data/calculatorPages";
import "../CSS/Calculator.css";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import BasicModal from "../Components/Modal";
import { Typography } from "@mui/material";


// TODO: add progress bar

const BUTTON_COLORS = {
  blue: "#4e6c99",
  green: "#419D77",
};

const Calculator = () => {
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

  const renderBody = ({ type, text, href, className }) => {
    const key = `${type}-${text}`;
    switch (type) {
      case "paragraph":
        return (
          <p key={key} className={className}>
            {text}
          </p>
        );
      case "link":
        return (
          <a key={key} className={className} target="_blank" href={href}>
            {text}
          </a>
        );
    }
  };

  return (
    <Container>
      <div className="calculator">
        {header && <Typography variant="h4">{header}</Typography> }
        {body && <div className="calculator-body">{body.map(renderBody)}</div>}
        {buttons && renderButtons(buttons)}
        {tooltip && (
          <BasicModal/>     
        )}
        {footerLink && (
          <a
            target="_blank"
            href={footerLink.href}
          >
            {footerLink.text}
          </a>
        )}
        {disclaimer && <p className="calculator-disclaimer">{disclaimer}</p>}
      </div>
    </Container>
  );
};

export default Calculator;