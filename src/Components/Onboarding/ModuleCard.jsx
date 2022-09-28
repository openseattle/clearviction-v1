import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Grid } from "@mui/material";

// icons
import screens from "../../Assets/Onboarding/screens.svg";
import tool from "../../Assets/Onboarding/tool.svg";
import remote from "../../Assets/Onboarding/remote.svg";
import simpleQuestion from "../../Assets/Onboarding/simpleQuestion.svg";
import circleCheck from "../../Assets/Onboarding/circleCheck.png";

import { useModuleCardStyles } from "../../Styles/Onboarding/useModuleCardStyles";

function ModuleCard(props) {
    const classes = useModuleCardStyles();
    const { number, link, text, subheading } = props.module;
    const [isLargeScreen, setIsLargeScreen] = useState(true);

    useEffect(() => {
        const mediaSize = window.innerWidth;
        mediaSize >= 768 ? setIsLargeScreen(true) : setIsLargeScreen(false);
    }, []);

    return (
        <div className={classes.moduleCard}>
            <Link style={{ textDecoration: "none" }} to={link}>
                <div>
                    <div className={classes.cardHeading}>
                        <Typography variant="body1">{number}</Typography>
                    </div>
                    <div className={classes.cardBody}>
                        {number === "module 1" && <img className={classes.iconStyle} src={screens} alt="" />}
                        {number === "module 2" && <img className={classes.iconStyle} src={tool} alt="" />}
                        {number === "module 3" && <img className={classes.iconStyle} src={remote} alt="" />}
                        {number === "module 4" && <img className={classes.iconStyle} src={simpleQuestion} alt="" />}
                        <div>
                            <Typography variant="h5" className={classes.cardSubheading}>
                                {subheading}
                            </Typography>
                            <Typography variant="body2" className={classes.cardText}>
                                {text}
                            </Typography>
                        </div>
                        {localStorage.getItem(link) ? (
                            <div className={classes.mobileSuccessButton}>
                                <img className={classes.checkMark} src={circleCheck} alt="" />
                                <Typography style={{ fontSize: "17px", marginLeft: "1rem", fontWeight: "bold" }}>
                                    completed
                                </Typography>
                            </div>
                        ) : (
                            <div className={classes.mobileButton}>
                                <Typography variant="h6" style={{ fontSize: "17px" }}>
                                    {number}
                                </Typography>
                            </div>
                        )}
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ModuleCard;
