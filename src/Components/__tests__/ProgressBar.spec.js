import React from "react";
import { render, screen } from "@testing-library/react";
import ProgressBar from "../ProgressBar";

const getDefaultProps = () => {
    return {
        currentSectionName: "Surrounding Circumstances",
        totalSections: 3,
    };
};

describe("<ProgressBar />", () => {
    it("should render a progress bar with expected elements", () => {
        render(<ProgressBar {...getDefaultProps()} />);
        const progressBar = screen.getByTestId("progress-bar");
        expect(progressBar).toBeVisible();

        const steps = screen.getAllByTestId("progress-bar-step");
        expect(steps.length).toEqual(3);

        const firstStepLabel = screen.getByText("Surrounding Circumstances");
        expect(firstStepLabel).toBeVisible();
        expect(firstStepLabel).toHaveClass("Mui-active");
    });
});
