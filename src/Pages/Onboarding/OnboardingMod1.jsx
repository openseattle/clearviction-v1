import { Box, Grid, Typography } from "@mui/material";
import Header from "../../Components/Onboarding/Header";
import ModuleContent from "../../Components/Onboarding/ModuleContent";
import Footer from "../../Components/Onboarding/Footer";

import { useModuleContentStyles } from "../../Styles/Onboarding/useModuleContentStyles";

import arrowRight from "../../Assets/Onboarding/arrowRight.svg";
import exclamation from "../../Assets/Onboarding/exclamation.svg";
import circleArrow from "../../Assets/Onboarding/circleArrow.svg";

const headerText = {
    title: "Module 1",
    description: "About Clearviction",
};

const mission = {
    title: "Our Mission",
    paragraph1:
        "Clearviction aims to reduce barriers faced by formerly incarcerated individuals by streamlining the process of vacating eligible convictions in Washington state.",
};

const story = {
    title: "Our Story",
    paragraph1:
        "Committed to helping people with convictions to improve their quality of life, a group of volunteers decided to create a tool that could simplify the conviction vacation process.",
    paragraph2:
        "While the project started in Seattle, we now have volunteers all across the country (and the world!) contributing to building, maintaining, and improving this product.",
};

const problem = {
    title: "The Problem",
    paragraph1:
        "37,000 people from Washington are behind bars and each year, at least 98,000 different people are booked into local jails in Washington ",
    paragraph2:
        "People with a criminal record face significant barriers to their day to day life after completing their prison terms. Some challenges include:",
    paragraphBullets: [
        "Finding housing and employment.",
        "Earning professional credentials.",
        "Getting involved in their community.",
    ],
    sourceSite: "https://www.prisonpolicy.org/profiles/WA.html",
    sourceText: "(Prison Policy Initiative).",
};

const button1 = {
    link: "/onboarding",
    text: "previous",
};

const button2 = {
    link: "/onboarding/#mod",
    text: "next",
};

const OnboardingMod1 = () => {
    const classes = useModuleContentStyles();
    return (
        <>
            <Header text={headerText} />
            <Typography variant="h4" className={classes.mobileHeader}>
                Module 1
            </Typography>
            <Box>
                <Grid container className={classes.mainModuleContentCard}>
                    <Grid item xs={2} className={classes.cardIcon}>
                        <img src={exclamation} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={10}>
                        <ModuleContent content={problem} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon}>
                        <img src={arrowRight} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={10}>
                        <ModuleContent content={story} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon}>
                        <img src={circleArrow} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={10}>
                        <ModuleContent content={mission} />
                    </Grid>
                </Grid>
            </Box>
            <Footer button1={button1} button2={button2} />
        </>
    );
};

export default OnboardingMod1;
