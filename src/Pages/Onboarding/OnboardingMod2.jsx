import { useEffect } from 'react';
import Header from '../../Components/Onboarding/Header';
import { Box, Grid } from '@material-ui/core';
import ModuleContent from '../../Components/Onboarding/ModuleContent';
import { useModuleContentStyles } from '../../Styles/Onboarding/useModuleContentStyles';
// import Theme from '../../Components/Theme';
import Footer from '../../Components/Onboarding/Footer';

import remote from '../../Assets/Onboarding/remote.svg';
import checklist from '../../Assets/Onboarding/checklist.svg';
import chat from '../../Assets/Onboarding/chat.svg';

const headerText = {
    title: "Module 2",
    description: "Let's get your tools in order",
};

const zoom = {
    title: "Zoom",
    subheading: "What is it?",
    paragraph1: "Zoom is a cloud-based video communications app that allows you to set up virtual video and audio conferencing, webinars, live chats, screen-sharing, and other collaborative capabilities.",
    linkTitle: "Zoom Guidance",
    linkIcon: "doc",
    linkLocation: "",
    modalTitle: "Zoom guidance",
    modalParagraph1: "Mute unless you are speaking; give unmuted people space.",
    modalParagraph2: "Turn your video on when possible.",
    modalParagraph3: "If you have an unstable internet connection, call in from your phone.",
    modalParagraph4: "Enable dual monitors option if you have two monitors. This will allow you to view the gallery/speaker on one monitor and the screen share on the other. In the top-right corner of Zoom, click on your profile picture then click on 'Settings.' Click on the 'General' tab. Select the 'Use dual monitors' check box.",
}

const airtable = {
    title: "Airtable",
    subheading: "What is it?",
    paragraph1: "Airtable is a database software with a user-friendly interface. We use it as a primary place to organize information, tasks, and keep track of each other’s work.",
    paragraph2: "Learn the basics with these how-to videos.",
    paragraph3: "Check out our Airtable Glossary and keep it open in another tab as you go through this guide in case you want to reference terms you aren’t familiar with.",
    linkTitle: "Watch our Airtable onboarding guide",
    linkIcon: "video",
    linkLocation: "",
    linkTitle2: "Airtable guide",
    linkIcon2: "docAirtable",
    linkLocation2: "",
    linkTitle3: "Read our Glossary",
    linkIcon3: "link",
    linkLocation3: "",
}

const slack = {
    title: "Slack",
    subheading: "What is it?",
    paragraph1: "Slack is a collection of chat rooms equipped for threaded conversations, emoji reactions, and app integrations.",
    paragraph2: "Learn the basics with these how-to videos.",
    linkTitle: "Watch our Slack onboarding guide",
    linkIcon: "video",
    linkLocation: "",
    linkTitle2: "Slack guide",
    linkIcon2: "docSlack",
    linkLocation2: "",
    linkTitle3: "In-house expert",
    linkIcon3: "link",
    linkLocation3: "",
}

const button1 = {
    link: "/onboarding-mod1",
    text: "previous"
}

const button2 = {
    link: "/onboarding-mod3",
    text: "next module"
}

const buttonComplete = {
    link: "/onboarding-mod2",
    text: "mark as done"
}

function OnboardingMod2() {

    const classes = useModuleContentStyles();

    return (
        <div>
            <Header text={headerText} />
            <Box >
                <Grid container justifyContent="center" className={classes.moduleContentCard} >
                    <Grid item xs={2} className={classes.cardIcon} >
                        <img src={remote} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={9}>
                        <ModuleContent content={zoom} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon} >
                        <img src={checklist} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={9} >
                        <ModuleContent content={airtable} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon} >
                        <img src={chat} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={9} >
                        <ModuleContent content={slack} />
                    </Grid>
                </Grid>
            </Box>
            <Footer button1={button1} button2={button2} buttonComplete={buttonComplete} />
        </div>
    );
}

export default OnboardingMod2;