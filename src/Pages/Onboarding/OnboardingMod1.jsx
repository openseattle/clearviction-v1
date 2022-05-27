import { useEffect } from 'react';
import Header from '../../Components/Onboarding/Header';
import ModuleContent from '../../Components/Onboarding/ModuleContent';
import Footer from '../../Components/Onboarding/Footer';

import { Box, Grid } from '@material-ui/core';
import { useModuleContentStyles } from '../../Styles/Onboarding/useModuleContentStyles';

import arrowRight from '../../Assets/Onboarding/arrowRight.svg';
import exclamation from '../../Assets/Onboarding/exclamation.svg';
import circleArrow from '../../Assets/Onboarding/circleArrow.svg';

const headerText =  {
    title: "Module 1",
    description: "About Clearviction",
};

const mission = {
    icon: "",
    title: "Our Mission",
    paragraph1: "ClearViction aims to reduce barriers faced by formerly incarcerated individuals by streamlining the process of vacating eligible convictions in Washington state.",
}

const story = {
    icon: "",
    title: "Our Story",
    linkIcon: "doc",
    linkTitle: "Clearviction Story",
    linkLocation: "",
}

const problem = {
    icon: "",
    title: "The Problem",
    linkIcon: "doc",
    linkTitle: "The Problem",
    linkLocation: "",
}

const button1 = {
    link: "/onboarding",
    text: "previous"
}

const button2 = {
    link: "/onboarding-mod2",
    text: "next module"
}



function OnboardingMod1() {
    const classes = useModuleContentStyles();
    return (
        <>
            <Header text={headerText} />
            <Box >
                <Grid container justifyContent="center" >
                    <Grid item xs={2} className={classes.cardIcon} >
                        <img src={circleArrow} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={9}>
                        <ModuleContent content={mission} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon} >
                        <img src={arrowRight} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={9} >
                        <ModuleContent content={story} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon} >
                        <img src={exclamation} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={9} >
                        <ModuleContent content={problem} />
                    </Grid>
                </Grid>
            </Box>
            <Footer button1={button1} button2={button2} />
        </>
    );
}

export default OnboardingMod1;