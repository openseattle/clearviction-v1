import { useState } from "react";
import { Grid, Typography, Dialog, DialogActions, Button } from "@mui/material";
import { BackButton } from "../../ui-kit/BackButton";
import PrimaryButton from "../../ui-kit/PrimaryButton";
import { QuestionScreenStyles } from "./QuestionScreenStyles";
import SecondaryButton from "../../ui-kit/SecondaryButton";
import { trackClick } from "../../trackingUtils";
import { BodyType } from "../../data/calculatorPagesTypes.ts";
import ProgressBar from "../../Components/ProgressBar";
import { ExternalLink } from "../../ui-kit/ExternalLink";
import CalulatorDialog from "../../ui-kit/CalulatorDialog";

const QuestionScreen = ({ text, progressBar, header, body, buttons, tooltip }) => {
    const classes = QuestionScreenStyles();
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);
    const handleOpen = () => {
        setOpen(true);
        trackClick(text);
    };

    return (
        <Grid container className={classes.grid}>
            {progressBar && <ProgressBar currentSectionName={progressBar.currentSectionName} />}
            <Grid container className={classes.backButton}>
                <BackButton />
            </Grid>
            <Typography variant="h6" component="h1" className={classes.header}>
                {header}
            </Typography>
            <Grid item className={classes.bodyGrid}>
                {body &&
                    body.map((b, idx) => {
                        switch (b.type) {
                            case BodyType.LIST:
                                return (
                                    <ul>
                                        {b.items.map((item, itemIdx) => (
                                            <li className={classes.list} key={itemIdx}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                );
                            case BodyType.LINK:
                                return (
                                    <ul>
                                        <li className={classes.list} key={idx}>
                                            <ExternalLink
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                role="button"
                                                href={b.href}
                                            >
                                                {b.linkText}
                                            </ExternalLink>
                                        </li>
                                    </ul>
                                );
                            default:
                                return (
                                    <Typography key={idx} variant="body2" className={classes.body}>
                                        {b.text}
                                    </Typography>
                                );
                        }
                    })}
            </Grid>
            <Grid container justifyContent="center" className={classes.buttonGrid}>
                {buttons.map((b, idx) => (
                    <PrimaryButton href={b.href} key={idx} text={b.text} className={classes.button} />
                ))}
                {tooltip && <SecondaryButton className={classes.button} text={"I'm not sure"} onClick={handleOpen} />}
                <Dialog onClose={handleClose} open={open} maxWidth="lg">
                    <CalulatorDialog />
                    <DialogActions>
                        <Button onClick={handleClose} style={{ color: "#4E6C99" }}>
                            OKAY
                        </Button>
                    </DialogActions>
                </Dialog>
            </Grid>
        </Grid>
    );
};

export default QuestionScreen;
