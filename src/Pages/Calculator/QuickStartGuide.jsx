import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { BodyType } from "../../data/calculatorPagesTypes";
import { trackClick } from "../../trackingUtils";
import { BackButton } from "../../ui-kit/BackButton";
import PrimaryButton from "../../ui-kit/PrimaryButton";
import SecondaryButton from "../../ui-kit/SecondaryButton";
import { QuickStartGuideStyles } from "./QuickStartGuideStyles";

const QuickStartGuide = props => {
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);
    const handleOpen = () => {
        setOpen(true);
        trackClick(props.text);
    };
    const classes = QuickStartGuideStyles();

    return (
        <Grid container className={classes.grid}>
            <Grid container className={classes.backButton}>
                <BackButton />
            </Grid>
            <Typography variant="h4" component="h1" className={classes.header}>
                {props.header}
            </Typography>
            <Grid item className={classes.bodyGrid}>
                {props.body.map((b, idx) => {
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
                                        <li className={classes.list} key={idx}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            );
                    }
                })}
            </Grid>
            <Grid container justifyContent="center" className={classes.buttonGrid}>
                <PrimaryButton className={classes.button} text={props.buttonText} href={props.buttonHref} />

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

export default QuickStartGuide;
