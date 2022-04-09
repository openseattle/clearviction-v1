import { useState } from "react";
import {
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import { BackButton } from "../../ui-kit/BackButton";
import PrimaryButton from "../../ui-kit/PrimaryButton";
import { QuestionScreenStyles } from "./QuestionScreenStyles";
import ProgressBar from "../../Components/ProgressBar";
import SecondaryButton from "../../ui-kit/SecondaryButton";
import { trackClick } from "../../trackingUtils";
import { BodyType } from "../../data/calculatorPagesTypes";

const QuestionScreen = (props) => {
  const classes = QuestionScreenStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true);
    trackClick(props.text);
  };
  // const [activeStep, setActiveStep] = useState(0);
  // const [progress, setProgress] = useState(0);
  // const steps = ["Label 1", "Label 2", "Label 3"];

  // const handleNext = () => {
  //   progress < 90 ? setProgress((prev) => prev + 10) : nextStep();
  // };

  // const nextStep = () => {
  //   setProgress(0);
  //   setActiveStep((prev) => prev + 1);
  // };

  console.log(props);
  return (
    <Grid container className={classes.grid}>
      {/* {props.progressBar && (
        <Grid container className={classes.progressBar}>
          <ProgressBar />
          <ProgressBar steps={steps} current={activeStep} progress={progress} />
          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
           <ProgressBar
            currentSectionName={props.currentSectionName}
            currentSection={props.currentSection}
            totalSections={props.totalSections}
          />
        </Grid>
      )} */}

      <Grid container className={classes.backButton}>
        <BackButton />
      </Grid>
      <Typography variant="h6" className={classes.header}>
        {props.header}
      </Typography>
      <Grid item className={classes.bodyGrid}>
        {props.body &&
          props.body.map((b, idx) => {
            switch (b.type) {
              default:
                return (
                  <Typography
                    key={idx}
                    variant="body2"
                    className={classes.body}
                  >
                    {b.text}
                  </Typography>
                );
              case BodyType.LIST:
                return (
                  <ul>
                    {b.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                );
              case BodyType.LINK:
                return (
                  <ul>
                    <li key={idx}>
                      <a href={b.href}>{b.text}</a>
                    </li>
                  </ul>
                );
            }
          })}
      </Grid>
      <Grid container justify="center" className={classes.buttonGrid}>
        {props.buttons.map((b, idx) => {
          return (
            <PrimaryButton
              href={b.href}
              key={idx}
              text={b.text}
              className={classes.button}
            />
          );
        })}
        {props.tooltip && (
          <SecondaryButton
            className={classes.button}
            text={"I'm not sure"}
            onClick={handleOpen}
          />
        )}
        <Dialog onClose={handleClose} open={open}>
          <DialogTitle>Not sure?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              If you don't know the answer, request your criminal record through{" "}
              <a
                target="_blank"
                href="https://www.wsp.wa.gov/crime/criminal-history"
                rel="noreferrer"
              >
                Washington State Patrol.
              </a>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>OKAY</Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  );
};

export default QuestionScreen;
