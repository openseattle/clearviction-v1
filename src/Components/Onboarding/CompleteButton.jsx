import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { useButtonStyles } from '../../Styles/Onboarding/useButtonStyles';
import openCircle from '../../Assets/Onboarding/openCircle.png';
import circleCheck from '../../Assets/Onboarding/circleCheck.png';

function CompleteButton(props) {
    const classes = useButtonStyles();
    const location = useLocation();

    const [isComplete, setIsComplete] = useState();

    useEffect(() => {
        const completedMod = sessionStorage.getItem(`${location.pathname}`);
        if (completedMod) {
            setIsComplete(true);
        }
    }, [location.pathname])

    const handleComplete = () => {
        const completedMod = sessionStorage.getItem(`${location.pathname}`);
        if (completedMod) {
            sessionStorage.removeItem(`${location.pathname}`)
        }
        else {
            sessionStorage.setItem(`${location.pathname}`, !isComplete);
        }
        setIsComplete(!isComplete);
    }

    return (
        <Link style={{ textDecoration: "none", color: "white" }}
            onClick={handleComplete} to={location.pathname}>
            <div className={classes.buttonSecondary} style={isComplete ? styles.success : styles.div}>
                <img src={isComplete ? circleCheck : openCircle} alt="" style={styles.img} />
                <Typography variant="button">{isComplete ? "completed" : "mark as done"}</Typography>
            </div>
        </Link>
    );
};

const styles = {
    img: {
        height: '20px',
        marginLeft: "15px",
        marginRight: "15px"
    },
    div: {
        display: "flex",
        alignItems: "center",
    },
    success: {
        display: "flex",
        alignItems: "center",
        color: "green"
    }
}

export default CompleteButton;