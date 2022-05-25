import { useEffect } from 'react';
import Header from '../../Components/Onboarding/Header';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import ModuleContent from '../../Components/Onboarding/ModuleContent';
import { useMod2Styles } from '../../Styles/Onboarding/useMod2Styles';
import Theme from '../../Components/Theme';
import Footer from '../../Components/Onboarding/Footer';

const headerText =  {
    title: "Module 2",
    description: "Let's get your tools in order",
};

const zoom = {
    icon: "",
    title: "Zoom",
    linkTitle: "Zoom Guidance",
    linkIcon: "doc",
    linkLocation: "",
}

const airtable = {
    icon: "",
    title: "Airtable",
    subheading: "What is it?",
    paragraph1: "Airtable is a database software with a user-friendly interface. We use it as a primary place to organize information, tasks, and keep track of each other’s work.",
    paragraph2: "Learn the basics with these how-to videos.",
    paragraph3: "Check out our Airtable Glossary and keep it open in another tab as you go through this guide in case you want to reference terms you aren’t familiar with.",
    linkTitle: "Watch our Airtable onboarding guide",
    linkIcon: "video",
    linkLocation: "",
    linkTitle2: "Airtable guide",
    linkIcon2: "doc",
    linkLocation2: "",
    linkTitle3: "Read our Glossary",
    linkIcon3: "link",
    linkLocation3: "",
}

const slack = {
    icon: "",
    title: "Airtable",
    subheading: "What is it?",
    paragraph1: "Slack is a collection of chat rooms equipped for threaded conversations, emoji reactions, and app integrations.",
    paragraph2: "Learn the basics with these how-to videos.",
    linkTitle: "Watch our Slack onboarding guide",
    linkIcon: "video",
    linkLocation: "",
    linkTitle2: "Slack guide",
    linkIcon2: "doc",
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

function OnboardingMod2() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const classes = useMod2Styles();

    return (
        <div>
            <Header text={headerText} />
            <Box >
                <ModuleContent content={zoom} />
                <ModuleContent content={airtable} />
                <ModuleContent content={slack} />
            </Box>
            
            <Footer button1={button1} button2={button2} />
        </div>
    );
}

export default OnboardingMod2;