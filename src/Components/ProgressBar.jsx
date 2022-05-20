import { useState, useEffect } from "react";
import { Step, Stepper, StepLabel, Box } from "@material-ui/core";
import { SectionName } from "../data/calculatorPagesTypes";
import { makeStyles } from "@material-ui/core";

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
    },
}));

const steps = ["Your Offense", "Surrounding Circumstances", "Terms Of Offense"];

export default function ProgressBar({ currentSectionName }) {
    const [activeStep, setActiveStep] = useState(0);
    const classes = useStyles();

    useEffect(() => {
        handleNext(currentSectionName);
    }, [currentSectionName]);

    const handleNext = () => {
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
            default:
                break;
        }

        setActiveStep(currentSection);
    };

    return (
        <Box className={classes.root} sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    let labelToDisplay;
                    // logic to display step label or not
                    activeStep === index ? (labelToDisplay = label) : (labelToDisplay = null);

                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{labelToDisplay}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </Box>
    );
}
