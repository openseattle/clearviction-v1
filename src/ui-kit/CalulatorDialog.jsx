import React from "react";
import { Typography, DialogTitle, DialogContent, DialogContentText } from "@mui/material";
import { ExternalLink } from "./ExternalLink";

const CalulatorDialog = props => {
    return (
        <>
            <DialogTitle>Not sure?</DialogTitle>
            <DialogContent>
                <DialogContentText style={{ color: "black" }}>
                    <Typography style={{ marginBottom: "1rem" }}>
                        If you don't know the answer, request your criminal record through{" "}
                    </Typography>
                    <ExternalLink target="_blank" href="https://www.wsp.wa.gov/crime/criminal-history" rel="noreferrer">
                        Washington State Patrol.
                    </ExternalLink>
                </DialogContentText>
            </DialogContent>
        </>
    );
};

export default CalulatorDialog;

// updated modal content can be found here: https://github.com/openseattle/clearviction/commit/eb1621134394170665fbfdb7837b750c31ba5bdc
