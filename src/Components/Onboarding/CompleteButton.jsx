import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { useButtonStyles } from "../../Styles/Onboarding/useButtonStyles";
// import openCircle from "../../Assets/Onboarding/openCircle.png";
import circleCheck from "../../Assets/Onboarding/circleCheck.png";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { RedesignButtonSecondary } from "../../ui-kit/RedesignButtonSecondary";

const styles = {
    img: {
        height: "20px",
        marginLeft: "15px",
        marginRight: "15px",
    },
    div: {
        display: "flex",
        alignItems: "center",
    },
    success: {
        display: "flex",
        alignItems: "center",
        color: "green",
    },
};

const CompleteButton = () => {
    const location = useLocation();
    const [isComplete, setIsComplete] = useState();

    useEffect(() => {
        const completedMod = localStorage.getItem(`${location.pathname}`);
        if (completedMod) {
            setIsComplete(true);
        }
    }, [location.pathname]);

    const handleComplete = () => {
        const completedMod = localStorage.getItem(`${location.pathname}`);
        if (completedMod) {
            localStorage.removeItem(`${location.pathname}`);
        } else {
            localStorage.setItem(`${location.pathname}`, !isComplete);
        }
        setIsComplete(!isComplete);
    };

    return (
        <>
            <Button
                variant="outlined"
                color={isComplete ? "success" : "primary"}
                startIcon={isComplete ? <CheckCircleOutlineIcon /> : null}
                onClick={handleComplete}
            >
                {isComplete ? "Completed" : "Mark as complete"}
            </Button>
        </>
    );
};

export default CompleteButton;
