import { useEffect } from 'react';
import { Grid, Box } from '@material-ui/core';
import { useModuleContentStyles } from '../../Styles/Onboarding/useModuleContentStyles';

import Header from '../../Components/Onboarding/Header';
import ModuleContent from '../../Components/Onboarding/ModuleContent';
import Footer from '../../Components/Onboarding/Footer';

import file from '../../Assets/Onboarding/file.svg';
import symbols from '../../Assets/Onboarding/symbols.svg';
import remote from '../../Assets/Onboarding/remote.svg';

const headerText = {
    title: "Module 3",
    description: "Expectations of being a part of the team",
};

const remoteWork = {
    title: "Expectations for remote work",
    paragraph1: "In a remote context, individuals must be empowered to exercise their own discretion to make decisions that will impact the organization",
    paragraph2: "Progress over perfection",
    paragraph3: "Asynchronous when we can & synchronous when we need",
    paragraph4: '"A team is not a group of people that work together, A team is a group of people that trust each other." - Simon Sinek',
}

const trust = {
    title: "Trust practices",
    linkIcon: "doc",
    linkTitle: "Trust practices",
    linkLocation: "https://airtable.com/appfJZShN8K4tcWHU/tblwBmfy7sXtKZb8y/viwB9AEhG2TBetEA0?blocks=hide"
}

const truth = {
    title: "Source of Truth",
    paragraph1: "When we work asynchronously, divided by time zones and overloaded calendars, it's imperative that people be able to find answers to their own questions. This becomes a possibility only when information lives in a certain place, and conflicts are avoided.",
    linkIcon: "link",
    linkTitle: "CV Materials",
    linkLocation: "https://drive.google.com/drive/u/5/folders/14NbUv8CE6e1vnKifNbA3Kl2dsghTYPk2",
    linkIcon2: "link",
    linkTitle2: "Our SOT Reference",
    linkLocation2: "https://docs.google.com/document/d/1QaJJ5JD2AHsaB1A8zHTTjtvmFDk7wpYTbj4UBJIcFzI/edit"
}

const button1 = {
    link: "/onboarding-mod2",
    text: "previous"
}

const button2 = {
    link: "/onboarding-mod4",
    text: "next module"
}

const buttonComplete = {
    link: "/onboarding-mod3",
    text: "mark as done"
}

function OnboardingMod3() {
    const classes = useModuleContentStyles();
    return (
        <>
            <Header text={headerText} />
            <Box >
                <Grid container justifyContent="center" className={classes.moduleContentCard}>
                    <Grid item sm={2} className={classes.cardIcon} >
                        <img className={classes.icon} src={remote} alt="" />
                    </Grid>
                    <Grid item xs={9}>
                        <ModuleContent content={remoteWork} />
                    </Grid>
                    <Grid item sm={2} className={classes.cardIcon}>
                        <img className={classes.icon} src={symbols} alt="" />
                    </Grid>
                    <Grid item xs={9}>
                        <ModuleContent content={trust} />
                    </Grid>
                    <Grid item sm={2} className={classes.cardIcon}>
                        <img className={classes.icon} src={file} alt="" />
                    </Grid>
                    <Grid item xs={9}>
                        <ModuleContent content={truth} />
                    </Grid>
                </Grid>
            </Box>

            <Footer button1={button1} button2={button2} />
        </>
    );
}

export default OnboardingMod3;