/* eslint-disable react/jsx-props-no-spreading */
import { Button, Snackbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowBackIos } from "@mui/icons-material";
import { Alert } from "@mui/lab";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    backButtonStyle: {
        fontWeight: "lighter",
        fontSize: "18px",
        [theme.breakpoints.down("lg")]: {
            fontSize: "14px",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "12px",
        },
    },
}));

// eslint-disable-next-line import/prefer-default-export
export const BackButton = props => {
    const classes = useStyles();
    const history = useHistory();
    const [open, setOpen] = useState(false);

    // eslint-disable-next-line no-promise-executor-return
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    const handleClick = () => {
        // added error to handle the failure condition as an alert where users are informed
        // about what is happening with a popup before they are redirected.
        try {
            if (document.referrer.includes("calculator")) {
                history.goBack();
            } else {
                throw Error(
                    "nonCalcReferrer: unable to verify referral by a calculator question. Restarting Calculator..."
                );
            }
        } catch (error) {
            console.log(error);
            setOpen(true);
            sleep(4000).then(() => history.push("/calculator/landing-0"));
        }
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <Button className={classes.backButtonStyle} onClick={handleClick} {...props}>
                <ArrowBackIos /> Previous{" "}
            </Button>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert onClose={handleClose} severity="error">
                    Unable to access previous questions. Restarting...
                </Alert>
            </Snackbar>
        </>
    );
};
