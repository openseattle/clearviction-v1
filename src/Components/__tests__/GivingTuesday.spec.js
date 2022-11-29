import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../Theme.tsx";
import GivingTuesdayPage from "../../Pages/GivingTuesdayPage.jsx";

describe("<GivingTuesdayPage />", () => {
    it("renders", () => {
        render(
            <ThemeProvider theme={Theme}>
                <GivingTuesdayPage />
            </ThemeProvider>
        );
    });
});
