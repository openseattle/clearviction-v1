import { useState, useEffect } from "react";
import { Step, Stepper, StepLabel, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SectionName } from "../data/calculatorPagesTypes.ts";

const useStyles = makeStyles(() => ({
    root: {
        "& .MuiPaper-root": {
            backgroundColor: "#fafafa",
        },
        "& .MuiStepIcon-root": {
            color: "#A7B5CC",
        },
        "& .MuiStepIcon-active": {
            color: "#4E6C99",
        },
        "& .MuiStepLabel-labelContainer": {
            textTransform: "uppercase",
        },
        "& .MuiStepLabel-label.MuiStepLabel-active ": {
            width: "min-content",
        },
    },
}));

const steps = ["Your Offense", "Surrounding Circumstances", "Terms Of Offense"];

const ProgressBar = ({ currentSectionName }) => {
    const [activeStep, setActiveStep] = useState(0);
    const classes = useStyles();

    useEffect(() => {
        let currentSection;
        switch (currentSectionName) {
            case SectionName.OFF:
                currentSection = 0;
                break;
            case SectionName.CIRC:
                currentSection = 1;
                break;
            case SectionName.TER:
                currentSection = 2;
                break;
            case "":
                break;
            case undefined: // this case will set the progress bar as "completed"
                currentSection = 3;
                break;
            default:
                break;
        }

        setActiveStep(currentSection);
    }, [currentSectionName]);

    return (
        <Box data-testid="progress-bar" className={classes.root} sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    // logic to display step label or not
                    const labelToDisplay = activeStep === index ? label : null;

                    return (
                        <Step data-testid="progress-bar-step" key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{labelToDisplay}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </Box>
    );
};

export default ProgressBar;
