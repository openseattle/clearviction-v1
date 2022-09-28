import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToolTipModal from "../ToolTipModal";

describe("<ToolTipModal />", () => {
    const template = <ToolTipModal text={"test"} />;

    it("should render the default modal ui", () => {
        render(template);

        expect(screen.getByTestId("tooltip-modal-wrapper")).toBeVisible();
        expect(screen.getByRole("button", { name: /test/i })).toBeInTheDocument();
        expect(screen.queryByTestId("tooltip-modal")).not.toBeInTheDocument();
    });

    it("should open and close the modal", async () => {
        const user = userEvent.setup();
        const contentMatcher = /If you don't know the answer, you may check your criminal record/i;

        render(template);

        await user.click(screen.getByRole("button", { name: /test/i }));

        expect(screen.getByText(contentMatcher)).toBeVisible();

        await user.keyboard("{Esc}");

        expect(screen.queryByText(contentMatcher)).not.toBeInTheDocument();
    });
});
