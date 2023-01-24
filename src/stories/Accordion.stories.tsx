import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AccordionSummary, AccordionDetails } from "@mui/material";
import { MuiAccordion as Accordion } from "./Accordion.component";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/Accordion",
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = args => (
    <>
        <Accordion {...args}>
            <AccordionSummary>Accordion 1</AccordionSummary>
            <AccordionDetails>Lorem ipsum 12345</AccordionDetails>
        </Accordion>
        <Accordion {...args}>
            <AccordionSummary>Accordion 2</AccordionSummary>
            <AccordionDetails>Lorem ipsum 12345</AccordionDetails>
        </Accordion>
        <Accordion {...args}>
            <AccordionSummary>Accordion 3</AccordionSummary>
            <AccordionDetails>Lorem ipsum 12345</AccordionDetails>
        </Accordion>
    </>
);

export const Playground: ComponentStory<typeof Accordion> = Template.bind({});
Playground.args = { variant: "outlined" };

export const Variants: ComponentStory<typeof Accordion> = Template.bind({});
