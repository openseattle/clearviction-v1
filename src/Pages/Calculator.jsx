import React from "react";
import { useLocation } from "react-router-dom";
import calculatorPages from "../data/calculatorPages";
import "../CSS/Calculator.css";
import { useState } from "react";
import Modal from 'react-modal';

// TODO: add progress bar

const Calculator = () => {
    const { pathname } = useLocation();
    const indexOfPageId = pathname.split("/").length - 1;
    const pageId = pathname.split("/")[indexOfPageId];
    const content = calculatorPages[pageId];
    const [showTooltip, setShowTooltip] = useState(false);

    if (!content) window.location = "/404";

    const { header, body, buttons, footerLink, disclaimer, tooltip } = content;

    const openTooltip = ev => {
        ev.preventDefault();
        setShowTooltip(true);
    }

    const closeTooltip = () => {
        setShowTooltip(false);
    }

    return <div className="calculator">
        {tooltip && <Modal className="calculator-tooltip-modal" isOpen={showTooltip} onRequestClose={closeTooltip}>
            <p>
                If you don't know how to answer this question, you may be able to
                locate your records here:{" "}
                <a target="_blank" href="https://www.wsp.wa.gov/crime/criminal-history">
                    https://www.wsp.wa.gov/crime/criminal-history
                </a>
            </p>
        </Modal>}
        {header && <h4 className="calculator-header">{header}</h4>}
        {body && <p className="calculator-body">{body}</p>}
        {buttons?.map(({ text, href }) => {
            return <a className="calculator-button" key={text} href={href}>{text}</a>
        })}
        {tooltip && <a className="calculator-tooltip-link" onClick={openTooltip}>{tooltip}</a>}
        {footerLink && <a className="calculator-footer-link" target="_blank" href={footerLink.href}>{footerLink.text}</a>}
        {disclaimer && <p className="calculator-disclaimer">{disclaimer}</p>}
    </div>
}

export default Calculator;