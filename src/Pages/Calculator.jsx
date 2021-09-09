import React from "react";
import { useLocation } from "react-router-dom";
import calculatorPages from "../data/calculatorPages";
import "../CSS/Calculator.css";
import { useState } from "react";
import Modal from "react-modal";

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
  const [showTooltip, setShowTooltip] = useState(false);

  if (!content) window.location = "/404";

  const { header, body, buttons, footerLink, disclaimer, tooltip } = content;

  const openTooltip = (ev) => {
    ev.preventDefault();
    setShowTooltip(true);
  };

  const closeTooltip = () => {
    setShowTooltip(false);
  };

  const tooltipModal = (
    <Modal
      className="calculator-tooltip-modal"
      isOpen={showTooltip}
      onRequestClose={closeTooltip}
    >
      <p>
        If you don't know how to answer this question, you may be able to locate
        your records here:{" "}
        <a target="_blank" href="https://www.wsp.wa.gov/crime/criminal-history">
          https://www.wsp.wa.gov/crime/criminal-history
        </a>
      </p>
    </Modal>
  );

  const renderButtons = (buttons) =>
    buttons.map(({ text, href, color }) => {
      return (
        <a
          className="calculator-button"
          key={text}
          href={href}
          style={{ backgroundColor: BUTTON_COLORS[color || "blue"] }}
        >
          {text}
        </a>
      );
    });

  const renderBody = ({ type, text, href, className }) => {
    switch (type) {
      case "paragraph":
        return <p className={className}>{text}</p>;
      case "link":
        return (
          <a className={className} target="_blank" href={href}>
            {text}
          </a>
        );
    }
  };

  return (
    <div className="calculator">
      {tooltip && tooltipModal}
      {header && <h4 className="calculator-header">{header}</h4>}
      {body && <div className="calculator-body">{body.map(renderBody)}</div>}
      {buttons && renderButtons(buttons)}
      {tooltip && (
        <a className="calculator-tooltip-link" onClick={openTooltip}>
          I'm not sure
        </a>
      )}
      {footerLink && (
        <a
          className="calculator-footer-link"
          target="_blank"
          href={footerLink.href}
        >
          {footerLink.text}
        </a>
      )}
      {disclaimer && <p className="calculator-disclaimer">{disclaimer}</p>}
    </div>
  );
};

export default Calculator;
