import React, { useState, useEffect } from 'react';
// components
import ModuleCard from "./ModuleCard";
import { Grid } from "@material-ui/core";

// icons
import circleCheck from "../../Assets/Onboarding/circleCheck.png";
import openCircle from "../../Assets/Onboarding/openCircle.png";

// styles
import { useHomeStyles } from "../../Styles/Onboarding/useHomeStyles";

const modules = [
    {
        link: "/onboarding-mod1",
        number: "module 1",
        subheading: "About Clearviction",
        text: "What is Clearviction and why does this project matter?",
    },
    {
        link: "/onboarding-mod2",
        number: "module 2",
        subheading: "Lets get your tools in order",
        text: "See what tools we use and how we use them to make the team run smooth and efficiently.",
    },
    {
        link: "/onboarding-mod3",
        number: "module 3",
        subheading: "Our team expectations",
        text: "We all want to be good teammembers. Learn how we can make that happen.",
    },
    {
        link: "/onboarding-mod4",
        number: "module 4",
        subheading: "Now what?",
        text: "Now that you know our practices and expectations, lets see what is happening within our teams.",
    },
];

const styles = {
    img: {
        height: "30px",
        alignSelf: "center",
    },
};

export default function VerticalLinearStepper() {
    const classes = useHomeStyles();
    const [isLargeScreen, setIsLargeScreen] = useState(true);

    useEffect(() => {
        const mediaSize = window.innerWidth;
        mediaSize >= 768 ? setIsLargeScreen(true) : setIsLargeScreen(false);
    }, []);

    return (
        <>
            {modules.map((module, index) => (
                <Grid container key={index} justifyContent="center" direction="row" alignItems="center" className='gridContainer'>
                    {isLargeScreen ?
                        <Grid>
                            {index > 0 ? (
                                <div className={classes.connectorLine}></div>
                            ) : (
                                <div className={classes.spacerLine}></div>
                            )}
                            {localStorage.getItem(module.link) ? (
                                <img src={circleCheck} style={styles.img} alt="" />
                            ) : (
                                <div className={classes.openCircle}></div>
                            )}
                            {index < modules.length - 1 ? (
                                <div className={classes.connectorLine}></div>
                            ) : (
                                <div className={classes.spacerLine}></div>
                            )}
                        </Grid>
                        : ""}
                    <Grid item={true} xs={10} md={8} sm={8} lg={8}>
                        <ModuleCard module={module} />
                    </Grid>
                </Grid>
            ))}
        </>
    );
}
