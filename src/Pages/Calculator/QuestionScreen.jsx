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
import SecondaryButton from "../../ui-kit/SecondaryButton";
import { trackClick } from "../../trackingUtils";
import { BodyType } from "../../data/calculatorPagesTypes";
import ProgressBar from "../../Components/ProgressBar";

const QuestionScreen = props => {
    const classes = QuestionScreenStyles();
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);
    const handleOpen = () => {
        setOpen(true);
        trackClick(props.text);
    };

    return (
        <Grid container className={classes.grid}>
            {props.progressBar && <ProgressBar currentSectionName={props.progressBar.currentSectionName} />}
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
                                    <Typography key={idx} variant="body2" className={classes.body}>
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
                                            <a role="button" href={b.href}>{b.text}</a>
                                        </li>
                                    </ul>
                                );
                        }
                    })}
            </Grid>
            <Grid container justifyContent="center" className={classes.buttonGrid}>
                {props.buttons.map((b, idx) => {
                    return <PrimaryButton href={b.href} key={idx} text={b.text} className={classes.button} />;
                })}
                {props.tooltip && (
                    <SecondaryButton className={classes.button} text={"I'm not sure"} onClick={handleOpen} />
                )}
                <Dialog onClose={handleClose} open={open}>
                    <DialogTitle>Not sure?</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            If you don't know the answer, request your criminal record through{" "}
                            <a target="_blank" href="https://www.wsp.wa.gov/crime/criminal-history" rel="noreferrer">
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
