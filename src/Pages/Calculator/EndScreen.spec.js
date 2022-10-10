import React from "react";
import { render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import EndScreen from "./EndScreen";
import { BodyType } from "../../data/calculatorPagesTypes";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../../Components/Theme";

describe("<EndScreen />", () => {
    it("should render all main elements as expected when all props are passed", () => {
        const body = [
            {
                type: BodyType.PARAGRAPH,
                text: "It looks like your conviction may be eligible to vacate",
            },
            {
                type: BodyType.HEADING,
                text: "Next steps:",
            },
            {
                type: BodyType.LIST,
                items: ["list item 1", "list item 2"],
            },
            {
                type: BodyType.LINK,
                linkText: "full line link",
                href: "www.fulllinelink.com",
            },
            {
                type: BodyType.LINK,
                textBeforeLink: "test of inline link. ",
                linkText: "inline link",
                textAfterLink: " - text after link",
                href: "www.inlinelink.com",
            },
        ];

        const buttons = [
            {
                text: "test button",
                href: "test.com",
            },
        ];

        const progressBar = {
            currentSectionName: "ELIGIBLE",
        };

        render(
            <ThemeProvider theme={Theme}>
                <EndScreen
                    header={"Your Conviction May Be Eligible to Vacate!"}
                    body={body}
                    buttons={buttons}
                    disclaimer={"This is the disclaimer"}
                    showRestartButton={true}
                    progressBar={progressBar}
                />
            </ThemeProvider>,
            { wrapper: BrowserRouter }
        );

        expect(screen.getByTestId("end-screen")).toBeVisible();
        expect(screen.getByRole("heading", { name: "Your Conviction May Be Eligible to Vacate!" })).toBeInTheDocument();

        expect(screen.getByText("It looks like your conviction may be eligible to vacate")).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Next steps:" })).toBeInTheDocument();

        const lists = screen.getAllByRole("list");
        expect(lists.length).toBe(3);

        const listItemsInList = within(lists[0]).getAllByRole("listitem");
        expect(listItemsInList).toHaveLength(2);
        expect(listItemsInList[0]).toHaveTextContent("list item 1");

        const fullLineLink = within(lists[1]).getByRole("link");
        expect(fullLineLink).toHaveTextContent("full line link");
        expect(fullLineLink).toHaveAttribute("href", "www.fulllinelink.com");
        expect(fullLineLink).not.toHaveAttribute("role", "button");

        const inlineLinkListItem = within(lists[2]).getByRole("listitem");
        expect(inlineLinkListItem).toHaveTextContent("test of inline link. inline link - text after link");

        const inlineLink = within(inlineLinkListItem).getByRole("link");
        expect(inlineLink).toHaveTextContent("inline link");
        expect(inlineLink).toHaveAttribute("href", "www.inlinelink.com");

        expect(screen.getByRole("button", { name: "test button" })).toHaveAttribute("href", "test.com");
        expect(screen.getByRole("link", { name: "Check another conviction" })).toBeInTheDocument();
        expect(screen.getByText("This is the disclaimer")).toBeInTheDocument();
        expect(screen.getByTestId("progress-bar")).toBeInTheDocument();
    });
});
