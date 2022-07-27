import React from "react";
import { Link } from "react-router-dom";
import { Typography, Grid } from "@material-ui/core";

// icons
import screens from "../../Assets/Onboarding/screens.svg";
import tool from "../../Assets/Onboarding/tool.svg";
import remote from "../../Assets/Onboarding/remote.svg";
import simpleQuestion from "../../Assets/Onboarding/simpleQuestion.svg";

import { useModuleCardStyles } from "../../Styles/Onboarding/useModuleCardStyles";

function ModuleCard(props) {
    const classes = useModuleCardStyles();
    const { number, link, text, subheading } = props.module;

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
                        <div className={classes.mobileButton}>
                            <Typography variant="h6" style={{ fontSize: "17px" }}>
                                {number}
                            </Typography>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ModuleCard;
