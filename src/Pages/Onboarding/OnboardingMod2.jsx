import { useEffect } from 'react';
import Header from '../../Components/Onboarding/Header';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import  ResponsiveJumpButtonGroup from '../../Components/ResponsiveJumpButtonGroup';
import ModuleContent from '../../Components/Onboarding/ModuleContent';
import { useMod2Styles } from '../../Styles/Onboarding/useMod2Styles';
import Theme from '../../Components/Theme';
import Footer from '../../Components/Onboarding/Footer';

const headerText =  {
    title: "Module 2",
    description: "The practices we use to work remotely",
    information: "The number one challenge for remote team is keeping everyone informed. This is overcome with a system of practices, tools, and mindsets. Doing this well is a combination of: information organization (Knowledge Management) availability (Transparency) choice of medium (asynchronous vs. synchronous) the endogenous drive to remain informed and empowered."
};

const values = {
    icon: "",
    title: "Values",
    paragraph1: "In a distributed context, individuals must be empowered to exercise their own discretion to make decisions that will impact the organization. If people share the same high-level goals and core principles, then those volunteers with the most localized understanding of a given decision's context (Genchi Genbutsu) should be empowered to make it.",
    
}

const progress = {
    icon: "",
    title: "Progress over perfection",
    paragraph1: "We're operating in a rapidly-changing environment, where individual contributors perform asynchronously, individual features need in situ validation, and we don't have an air-gapped sandbox to build perfection.",
   
}

const trust = {
    icon: "",
    title: "Trust creation",
    paragraph1: '"A team is not a group of people that work together, A team is a group of people that trust each other." - Simon Sinek',
    paragraph2: 'We organically create trust when we interact in person. When teams are remote, the need is even more profound, but the cultivation and maintenance must be  intentional.',
    paragraph3: "Following dozens of internal conversations about the value of a high-trust environment, and how we might create it for ourselves, we created a number of trust-building practices.",
}

const candor = {
    icon: "",
    title: "Candor",
    paragraph1: "When folks are colocated, spending a lot of time conversing, we become aware of the nuanced messages under the surface.",
    paragraph2: "When colocated, candor is a timesaving nice-to-have. In our remote situation, where context is removed, miscommunications are common, and transparency has to be intentionally created, candor is imperative.",
    paragraph3: "Candor + more than one person = disagreement. As much as we would like to always have consensus follow a reasonable exchange of ideas, it doesn't always happen. In these moments, we follow a named decision-making practice, followed with the expectation that we will disagree and commit.",
}

const mission = {
    icon: "",
    title2: "We're united toward our Mission",
    centerParagraph1: "We endeavor to make it easier for people to clear convictions from their public record.",
    
}

const glossary = {
    icon: "",
    paragraph1: "Our Glossary has developed into a central place for our shared definitions and links. Any time a question about CVP surfaces, we try to record the answer in the glossary in such a way that people with the same question in the future can find the answer there! It's short. Please give it a read. Questions about terminology? Our glossary may help.",
    linkTitle: "Our Glossary",
    linkIcon: "link",
    linkLocation: "",
}

const truth = {
    icon: "",
    paragraph1: "When we work asynchronously, divided by time zones and overloaded calendars, it's imperative that people be able to find answers to their own questions. This becomes a possibility only when information lives in a certain place, and conflicts are avoided.",
    linkTitle: "CV Materials",
    linkIcon: "link",
    linkLocation: "",
    linkTitle2: "Our SOT Reference",
    linkIcon2: "link",
    linkLocation2: "",
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
            <Container maxwidth="xs">
                <ResponsiveJumpButtonGroup
                    links={[
                        { url: "remote-philosophy", linkName: "Remote Philosophy" },
                        { url: "our-values", linkName: "Our Values" },
                        { url: "glossary", linkName: "Glossary" },
                        { url: "truth", linkName: "Single Source of Truth" },
                    ]}
                />
            </Container>
            <Box >
                <Typography variant="h1" className={classes.subHeading}>
                    So what needs to be different?
                </Typography>
                <ModuleContent content={values} />
                <ModuleContent content={progress} />
                <ModuleContent content={trust} />
                <ModuleContent content={candor} />
            </Box>
            <Box>
                <Typography variant="h1" id="our-values" className={classes.subHeading}>
                    Guided by shared values
                </Typography>
                <ModuleContent content={mission} />
                <Grid container spacing={2} style={{
                    display: "flex", 
                    flexDirection: "row", 
                    margin: "auto", 
                    justifyContent: "space-around", 
                    textAlign: "center", 
                    padding: "0 50px",
                    maxWidth: "77vw",
                    [Theme.breakpoints.down("sm")]: {
                       padding: "0 40px",
                    }
                }}>
                    <Grid item xs={8} sm={6} md={3} lg={2}>
                        <img src={require('../../Assets/Onboarding/group.svg').default} alt=""/>
                        <Typography variant="body2">
                            We  believe we can increase <span style={{ fontWeight: "bold" }}>equity </span> 
                            and <span style={{ fontWeight: "bold" }}>justice</span> by using our 
                            skills and working together.
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sm={6} md={4} lg={2}>
                        <img src={require('../../Assets/Onboarding/heart.svg').default} alt=""/>
                        <Typography variant="body2">
                            <span style={{ fontWeight: "bold" }}>Integrity </span> 
                            - We are honest, ethical, and trustworth.
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sm={6} md={4} lg={2}>
                        <img src={require('../../Assets/Onboarding/person.svg').default} alt=""/>
                        <Typography variant="body2">
                            Being present, connecting with <span style={{ fontWeight: "bold" }}>transparency </span>
                            and <span style={{ fontWeight: "bold" }}>dignity.</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sm={6} md={4} lg={2}>
                        <img src={require('../../Assets/Onboarding/world.svg').default} alt=""/>
                        <Typography variant="body2">
                            <span style={{ fontWeight: "bold" }}>Respect</span> - 
                            We recognize that the thoughts, feelings, and backgrounds of others are as important as our own.
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sm={6} md={4} lg={2}>
                        <img src={require('../../Assets/Onboarding/symbols.svg').default} alt=""/>
                        <Typography variant="body2">
                            Act with <span style={{ fontWeight: "bold" }}>Humility</span>/ 
                            <span style={{ fontWeight: "bold" }}> Empathy.</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sm={6} md={4} lg={2}>
                        <img src={require('../../Assets/Onboarding/head.svg').default} alt=""/>
                        <Typography variant="body2">
                            <span style={{ fontWeight: "bold" }}>Focus on the user</span> and all else will follow.
                        </Typography>
                    </Grid>
                    
                </Grid>
            </Box>
            <Box id="glossary">
                <Typography variant="h1" className={classes.subHeading}>
                    Our Glossary
                </Typography>
                <ModuleContent content={glossary} />
            </Box>
            <Box id="truth">
                <Typography variant="h1" className={classes.subHeading}>
                    Single Source of Truth
                </Typography>
                <ModuleContent content={truth} />
            </Box>
            
            <Footer button1={button1} button2={button2} />
        </div>
    );
}

export default OnboardingMod2;