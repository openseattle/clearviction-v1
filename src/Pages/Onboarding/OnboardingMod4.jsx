import { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Theme from '../../Components/Theme';

// Components 
import Header from '../../Components/Onboarding/Header';
import ModuleContent from '../../Components/Onboarding/ModuleContent';
import ResponsiveJumpButtonGroup from '../../Components/ResponsiveJumpButtonGroup';
import Footer from '../../Components/Onboarding/Footer';


const headerText =  {
    title: "Module 4",
    description: "Now what?",
};

const nemo = {
    icon: "",
    title: "You are on team Nemo",
    paragraph1: "Click below to see a little more what that is, and what that means:",
    linkTitle: "Guidance",
    linkIcon: "doc",
    linkLocation: "",
}

const team = {
    icon: "",
    title: "How to join other teams",
    paragraph1: "Better to reliably and consistently show to one than dabble in more than one",
    linkTitle: "Guidance",
    linkIcon: "doc",
    linkLocation: "",
}

const questions = {
    icon: "",
    title: "Any questions?",
    paragraph1: "Ask your onboarding buddy. Need a buddy? Ping Seamus to get one.",
}

const doing = {
    icon: "",
    title: "See what the teams are doing",
    linkTitle: "Airtable teams list",
    linkIcon: "doc",
    linkLocation: "",
}

const button1 = {
    link: "/onboarding-mod3",
    text: "previous"
}

const button2 = {
    link: "/onboarding",
    text: "back to homepage"
}

function OnboardingMod4() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>{console.log('mod4')}
            <Header text={headerText} />

            <ModuleContent content={nemo} />
            <ModuleContent content={team} />
            <ModuleContent content={questions} />
            <ModuleContent content={doing} />
            

            {/* Change to team pics */}
            <div id="team" style={{ marginBottom: Theme.spacing(5) }}>
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
                            Scrum Team
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sm={6} md={4} lg={2}>
                        <img src={require('../../Assets/Onboarding/heart.svg').default} alt=""/>
                        <Typography variant="body2">
                            Marketing
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sm={6} md={4} lg={2}>
                        <img src={require('../../Assets/Onboarding/person.svg').default} alt=""/>
                        <Typography variant="body2">
                            Nemo
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sm={6} md={4} lg={2}>
                        <img src={require('../../Assets/Onboarding/world.svg').default} alt=""/>
                        <Typography variant="body2">
                            Product
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sm={6} md={4} lg={2}>
                        <img src={require('../../Assets/Onboarding/symbols.svg').default} alt=""/>
                        <Typography variant="body2">
                            User Research
                        </Typography>
                    </Grid>
                </Grid>
            </div>

            <Footer button1={button1} button2={button2} />

        </div>
    );
}

export default OnboardingMod4;