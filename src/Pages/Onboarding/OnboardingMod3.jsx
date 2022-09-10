import { Grid, Box, Typography } from "@material-ui/core";
import { useModuleContentStyles } from "../../Styles/Onboarding/useModuleContentStyles";

import Header from "../../Components/Onboarding/Header";
import ModuleContent from "../../Components/Onboarding/ModuleContent";
import Footer from "../../Components/Onboarding/Footer";

import file from "../../Assets/Onboarding/file.svg";
import symbols from "../../Assets/Onboarding/symbols.svg";
import remote from "../../Assets/Onboarding/remote.svg";

const headerText = {
    title: "Module 3",
    description: "Expectations of being a part of the team",
};

const remoteWork = {
    title: "Expectations for remote work",
    paragraph1:
        "In a remote context, individuals must be empowered to exercise their own discretion to make decisions that will impact the organization",
    paragraph2: "Progress over perfection",
    paragraph3: "Asynchronous when we can & synchronous when we need",
    paragraph4:
        "\"A team is not a group of people that work together, A team is a group of people that trust each other.\" - Simon Sinek",
};

const trust = {
    title: "Trust practices",
    linkIcon: "trustDoc",
    linkTitle: "Trust practices",
    linkLocation: "https://airtable.com/appfJZShN8K4tcWHU/tblwBmfy7sXtKZb8y/viwB9AEhG2TBetEA0?blocks=hide",
    bullets: [
        "Showing up and engaging/participating fully: Make sure people are active in the project and interacting with other team members.",
        "Expectation setting: Ensure there is an agreement between people with expectations and people expected to satisfy them.",
        "Safe space: Create a safe space for people to independently make decisions and challenge the ones they disagree with.",
        "Positivity: Navigate difficult conversations and improvement with positivity, honesty, and shared responsibility.",
        "Respect: Everyone should be empowered to ask questions and engage in conversations, but should do it respectfully.",
        "Transparency: Practice open and honest conversations with team members and create a culture where communication can flow freely between team members.",
        "In the event of conflicting information, the SOT is authoritative.",
        "Always include context into your communication.",
        "If you call a meeting, you must have an agenda published and attached to the calendar event before the meeting starts.",
        "Meetings start on time and end on time.",
        "Attend your scheduled meetings. If you will be absent, mark it on the agenda (linked in calendar event).",
        "Tell the team when you are on vacation or out for any reason (through this Airtable form and on the Slack channel #comings-and-goings).",
        "Iterative and incremental creation is a keystone in remote work. It's a prerequisite for asynchronous contributions, Agile production cycles, and designing/building products in our rapidly evolving world.",
        "Set clear expectations: We are here to work together in service of our mission, which requires relying on each other. Any time someone is relying on you for something, it's important to establish a shared understanding of what that something is.",
    ],
};

const truth = {
    title: "Source of Truth",
    paragraph1:
        "When we work asynchronously, divided by time zones and overloaded calendars, it's imperative that people be able to find answers to their own questions. This becomes a possibility only when information lives in a certain place, and conflicts are avoided.",
    linkIcon: "link",
    linkTitle: "CV Materials",
    linkLocation: "https://drive.google.com/drive/u/5/folders/14NbUv8CE6e1vnKifNbA3Kl2dsghTYPk2",
    linkIcon2: "link",
    linkTitle2: "Our SOT Reference",
    linkLocation2: "https://docs.google.com/document/d/1QaJJ5JD2AHsaB1A8zHTTjtvmFDk7wpYTbj4UBJIcFzI/edit",
};

const button1 = {
    link: "/onboarding-mod2",
    text: "previous",
};

const button2 = {
    link: "/onboarding/#mod",
    text: "next",
};

function OnboardingMod3 () {
    const classes = useModuleContentStyles();

    return (
        <>
            <Header text={headerText} />
            <Typography variant="h4" className={classes.mobileHeader}>
                Module 3
            </Typography>
            <Box>
                <Grid container className={classes.mainModuleContentCard}>
                    <Grid item xs={2} className={classes.cardIcon}>
                        <img className={classes.icon} src={remote} alt="" />
                    </Grid>
                    <Grid item xs={10}>
                        <ModuleContent content={remoteWork} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon}>
                        <img className={classes.icon} src={symbols} alt="" />
                    </Grid>
                    <Grid item xs={10}>
                        <ModuleContent content={trust} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon}>
                        <img className={classes.icon} src={file} alt="" />
                    </Grid>
                    <Grid item xs={10}>
                        <ModuleContent content={truth} />
                    </Grid>
                </Grid>
            </Box>

            <Footer button1={button1} button2={button2} />
        </>
    );
}

export default OnboardingMod3;
