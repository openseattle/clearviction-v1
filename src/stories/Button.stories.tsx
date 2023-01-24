import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Stack } from "@mui/material";
import { Button } from "./Button.component";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/Button",
    component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Playground = Template.bind({});
Playground.args = {
    children: "Click me!",
};

export const Variants: ComponentStory<typeof Button> = () => (
    <Stack spacing={2} maxWidth={300}>
        <Button variant="text">Text button</Button>
        <Button variant="contained">Contained button</Button>
        <Button variant="outlined">Outlined button</Button>
    </Stack>
);

export const Colors: ComponentStory<typeof Button> = () => (
    <Stack spacing={2} maxWidth={300}>
        <Button variant="text" color="primary">
            Text button
        </Button>
        <Button variant="text" color="secondary">
            Text button
        </Button>
        <Button variant="contained" color="primary">
            Contained button
        </Button>
        <Button variant="contained" color="secondary">
            Contained button
        </Button>
        <Button variant="outlined" color="primary">
            Outlined button
        </Button>

        <Button variant="outlined" color="secondary">
            Outlined button
        </Button>
    </Stack>
);
