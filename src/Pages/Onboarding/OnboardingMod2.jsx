import Header from "../../Components/Onboarding/Header";
import { Box, Grid, Typography } from "@mui/material";
import ModuleContent from "../../Components/Onboarding/ModuleContent";
import { useModuleContentStyles } from "../../Styles/Onboarding/useModuleContentStyles";
import Footer from "../../Components/Onboarding/Footer";

// icons
import remote from "../../Assets/Onboarding/remote.svg";
import checklist from "../../Assets/Onboarding/checklist.svg";
import chat from "../../Assets/Onboarding/chat.svg";
import paper from "../../Assets/Onboarding/paper.svg";

const headerText = {
    title: "Module 2",
    description: "Let's get your tools in order",
};

const zoom = {
    title: "Zoom",
    subheading: "What is it?",
    paragraph1:
        "Zoom is a cloud-based video communications app that allows you to set up virtual video and audio conferencing, webinars, live chats, screen-sharing, and other collaborative capabilities.",
    toolSite: "https://zoom.us",
    toolText: "Click here for the Zoom website to learn more.",
    linkTitle: "Zoom Guidance",
    linkIcon: "doc",
    linkLocation: "",
    modalTitle: "Zoom guidance",
    modalParagraph1: "Mute unless you are speaking; give unmuted people space.",
    modalParagraph2: "Turn your video on when possible.",
    modalParagraph3: "If you have an unstable internet connection, call in from your phone.",
    modalParagraph4:
        "Enable dual monitors option if you have two monitors. This will allow you to view the gallery/speaker on one monitor and the screen share on the other. In the top-right corner of Zoom, click on your profile picture then click on 'Settings.' Click on the 'General' tab. Select the 'Use dual monitors' check box.",
};

const airtable = {
    title: "Airtable",
    subheading: "What is it?",
    paragraph1:
        "Airtable is a database software with a user-friendly interface. We use it as a primary place to organize information, tasks, and keep track of each other’s work.",
    paragraph2:
        "Check out our Airtable Glossary and keep it open in another tab as you go through this guide in case you want to reference terms you aren’t familiar with.",
    toolSite: "https://www.airtable.com",
    toolText: "Click here for the Airtable website to learn more.",
    linkTitle: "Watch our Airtable onboarding guide",
    linkIcon: "videoAirtable",
    linkLocation: "",
    linkTitle2: "Airtable guide",
    linkIcon2: "docAirtable",
    linkLocation2: "",
    linkTitle3: "Read our Glossary",
    linkIcon3: "link",
    linkLocation3: "https://airtable.com/appfJZShN8K4tcWHU/tblYLt2L646QsTESQ/viwbST7tdt1d2hOiR?blocks=hide",
};

const slack = {
    title: "Slack",
    subheading: "What is it?",
    paragraph1:
        "Slack is a collection of chat rooms equipped for threaded conversations, emoji reactions, and app integrations.",
    toolSite: "https://www.slack.com",
    toolText: "Click here for the Slack website to learn more.",
    linkTitle: "Watch our Slack onboarding guide",
    linkIcon: "videoSlack",
    linkTitle2: "Slack guide",
    linkIcon2: "docSlack",
    linkTitle3: "In-house expert",
    linkIcon3: "link",
    linkLocation3:
        "https://airtable.com/appfJZShN8K4tcWHU/tblFzjMFrsRIhEWGf/viwL5XUOaN5Siybl4/recQeDCMgkRt9RLlZ?blocks=hide",
};

const miro = {
    title: "Miro",
    subheading: "What is it?",
    paragraph1:
        "Miro is the online collaborative whiteboard platform that enables distributed teams to work effectively together, from brainstorming with digital sticky notes to planning and managing agile workflows.",
    paragraph2:
        "Our account is limited to three boards. Please don’t create another board or we’ll be locked out of one of our existing boards!",
    toolSite: "https://www.miro.com",
    toolText: "Click here for the Miro website to learn more.",
    linkTitle: "Watch our Miro guide",
    linkIcon: "videoMiro",
    linkTitle2: "Miro team profile",
    linkIcon2: "link",
    linkLocation2: "https://miro.com/app/settings/team/3074457348441321142/profile",
};

const button1 = {
    link: "/onboarding-mod1",
    text: "previous",
};

const button2 = {
    link: "/onboarding/#mod",
    text: "next",
};

function OnboardingMod2() {
    const classes = useModuleContentStyles();

    return (
        <>
            <Header text={headerText} />
            <Typography variant="h4" className={classes.mobileHeader}>
                Module 2
            </Typography>
            <Box className={classes.pageStyle}>
                <Grid container className={classes.mainModuleContentCard}>
                    <Grid item xs={2} className={classes.cardIcon}>
                        <img src={remote} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={10}>
                        <ModuleContent content={zoom} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon}>
                        <img src={checklist} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={10}>
                        <ModuleContent content={airtable} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon}>
                        <img src={chat} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={10}>
                        <ModuleContent content={slack} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon}>
                        <img src={paper} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={10}>
                        <ModuleContent content={miro} />
                    </Grid>
                </Grid>
            </Box>
            <Footer button1={button1} button2={button2} />
        </>
    );
}

export default OnboardingMod2;
