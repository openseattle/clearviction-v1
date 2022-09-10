import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../Footer";

describe("<Footer />", () => {
    it("should render the footer with expected elements", () => {
        render(<Footer />, { wrapper: BrowserRouter, });
        const footer = screen.getByTestId("footer");
        expect(footer).toBeVisible();

        const footerLinks = screen.getAllByTestId("footer-link");
        expect(footerLinks.length).toEqual(6);
        expect(footerLinks[1]).toHaveAttribute("href", "/get-started");
    });
});
