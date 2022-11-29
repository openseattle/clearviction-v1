import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

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
        <Button
            variant="outlined"
            color={isComplete ? "success" : "primary"}
            startIcon={isComplete ? <CheckCircleOutlineIcon /> : null}
            onClick={handleComplete}
        >
            {isComplete ? "Completed" : "Mark as complete"}
        </Button>
    );
};

export default CompleteButton;
