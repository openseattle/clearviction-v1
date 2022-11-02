import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Footer from "../Footer";
import Theme from "../Theme.tsx";

describe("<Footer />", () => {
    it("should render the footer with expected elements", () => {
        render(
            <ThemeProvider theme={Theme}>
                <Footer />
            </ThemeProvider>,
            { wrapper: BrowserRouter }
        );

        const footer = screen.getByTestId("footer");
        expect(footer).toBeVisible();

        const footerLinks = screen.getAllByTestId("footer-link");
        expect(footerLinks.length).toEqual(4);
        expect(footerLinks[0]).toHaveAttribute("href", "/get-started");
    });
});
