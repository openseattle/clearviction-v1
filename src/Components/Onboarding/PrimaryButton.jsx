import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { useButtonStyles } from "../../Styles/Onboarding/useButtonStyles";

function PrimaryButton(props) {
    const classes = useButtonStyles();
    const { text, link } = props.button;
    return (
        <Link style={{ textDecoration: "none", color: "white" }} to={link}>
            <div className={classes.button}>
                <Typography variant="button">{text}</Typography>
            </div>
        </Link>
    );
}

export default PrimaryButton;
