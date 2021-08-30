import React from "react";
import { useLocation } from "react-router-dom";
import calculatorPages from "../data/calculatorPages";

const Calculator = () => {
    const {pathname} = useLocation();
    const indexOfPageId = pathname.split("/").length - 1;
    const pageId = pathname.split("/")[indexOfPageId];
    const content = calculatorPages[pageId];

    if (!content) window.location = "/404";

    const {header, body, buttons, footerLink, disclaimer} = content;

    return <div className="calculator">
        {header && <h4 className="calculator-header">{header}</h4>}
        {body && <p className="calculator-body">{body}</p>}
        {buttons?.map(({text, href}) => {
            return <a className="calculator-button" key={text} href={href}>{text}</a>
        })}
        {footerLink && <a className="calculator-footer-link" target="_blank" href={footerLink.href}>{footerLink.text}</a>}
        {disclaimer && <p className="calculator-disclaimer">{disclaimer}</p>}
    </div>
}

export default Calculator;