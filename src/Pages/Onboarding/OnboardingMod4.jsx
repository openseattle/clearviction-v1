import { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Theme from '../Components/Theme';

// Components 
import Header from '../Components/Header';
import ModuleContent from '../Components/ModuleContent';
import ResponsiveJumpButtonGroup from '../Components/ResponsiveJumpButtonGroup';
import Footer from '../Components/Footer';


const headerText =  {
    title: "Module 4",
    description: "Clearviction's Progress To Date",
    information: "We have identified opportunities to use technology to streamline this process and want to explore which of these technological possibilities would make the most sense to prototype, given user needs and volunteer resources."
};

const about = {
    icon: "",
    title: "About CV",
    paragraph1: "One in four Washingtonians have been involved in the criminal justice system. Those with a criminal record face significant barriers to daily life after completing their prison terms, making it harder to find housing and employment, to gain professional credentials, and to be involved in the life of their community.",
    paragraph2: "In 2019, Washington State passed the New Hope Act making it easier for people with past criminal records to have their convictions vacated. Despite the act, the system is slow and inefficient.",
    paragraph3: "We are a civic-tech open-source project associated with the Democracy Lab organization and Open Seattle org.",
}

const problem = {
    icon: "",
    title: "The Problem",
    paragraph1: "The process of vacating...",
    paragraph2: "- Gathering documents",
    paragraph3: "Each step requires....",
}

const conviction = {
    icon: "",
    title: "Conviction Vacation Laws/Process",
    paragraph1: "States have different laws dictating how to vacate or expunge a conviction, complicating the issue.",
    paragraph2: "Legal aid can be dependent on income - Washington’s process is more of a burden compared to other states - Requiring a motion and court appearance - And being left at the judge’s discretion ",
}

const background = {
    icon: "",
    title: "Background Research",
    paragraph1: "We conducted a competitive...",
    paragraph2: "Analyzed the...",
    paragraph3: "- Legal Tune Up (Dane County, WI)"
}

const legal = {
    icon: "",
    title: "Legal Logic - To Date",
    paragraph1: "We reviewed WA's...",
    paragraph2: "Activities and Deliverables:",
    paragraph3: "- Legal tree logic"
}

const user = {
    icon: "",
    paragraph1: "User Research...",
    paragraph2: "States with..",
    paragraph3: "- Oregon"
}

const user2 = {
    icon: "",
    title: "User Research - People with Convictions",
    paragraph1: "We created a survey...",
    paragraph2: "Next Steps:",
    paragraph3: "- Broaden the reach",
    linkTitle: "Key Findings",
    linkIcon: "link",
    linkLocation: "",
    linkTitle2: "Affinity Maps",
    linkIcon2: "link",
    linkLocation2: "",
    linkTitle3: "Interview Highlights",
    linkIcon3: "link",
    linkLocation3: "",
}

const survey = {
    icon: "",
    title: "Survey",
    paragraph1: "The intent of...",
    paragraph2: "Research was conducted...",
    linkTitle: "Survey Plan",
    linkIcon: "link",
    linkLocation: "",
    linkTitle2: "Published Survey",
    linkIcon2: "link",
    linkLocation2: "",
}

const product = {
    icon: "",
    title: "Product",
    paragraph1: "Product has established...",
    paragraph2: "Summary",
    paragraph3: "- Product is prioritizing...",
    linkTitle: "Product Miro Board",
    linkIcon: "link",
    linkLocation: "",
    linkTitle2: "Google Drive",
    linkIcon2: "link",
    linkLocation2: "",
}

const ux = {
    icon: "",
    title: "UX Design",
    paragraph1: "Our UX design...",
    paragraph2: "Summary",
    paragraph3: "- Design is currently...",
    linkTitle: "Figma Files",
    linkIcon: "link",
    linkLocation: "",
    linkTitle2: "Google Drive",
    linkIcon2: "link",
    linkLocation2: "",
}

const development = {
    icon: "",
    title: "Development",
    paragraph1: "Our Dev Team is..",
    paragraph2: "Summary",
    paragraph3: "- Developemnt has...",
    linkTitle: "Jira Board",
    linkIcon: "link",
    linkLocation: "",
    linkTitle2: "Miro Board",
    linkIcon2: "link",
    linkLocation2: "",
    linkTitle3: "Github Repo",
    linkIcon3: "link",
    linkLocation3: "",
}

const team = {
    title: "Team Breakdown",
    paragraph1: "When you first join CVP, you'll automatically be part of the Nemo--a team working outside the CVP value stream.",
    paragraph2: "Make sure you join #team_nemo in slack, and you'll soon see the Nemo meeting on your calendar! Once you've joined an Action within the CVP product stream, it's up to you whether you'd like to continue helping out on Nemo",
}

const button1 = {
    link: "/onboarding/mod3",
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
            <ResponsiveJumpButtonGroup
                links={[
                    { url: "user-research", linkName: "Research" },
                    { url: "product", linkName: "Product" },
                    { url: "ux-design", linkName: "UX Design" },
                    { url: "development", linkName: "Development" },
                    { url: "team", linkName: "CV Teams" }
                ]}
            />

            <ModuleContent content={about} />
            <ModuleContent content={problem} />
            <ModuleContent content={conviction} />
            <ModuleContent content={background} />
            <ModuleContent content={legal} />
            <div id='user-research'>
                <ModuleContent content={user} />
                <ModuleContent content={user2} />
                <ModuleContent content={survey} />
            </div>
            <div id="product">
                <ModuleContent content={product} />
            </div>
            <div id="ux-design">
                <ModuleContent content={ux} />
            </div>
            <div id="development">
                <ModuleContent content={development} />
            </div>
            <div id="team" style={{ marginBottom: Theme.spacing(5) }}>
                <ModuleContent content={team} />

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
                        <img src={require('../Assets/group.svg').default} alt=""/>
                        <Typography variant="body2">
                            Scrum Team
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sm={6} md={4} lg={2}>
                        <img src={require('../Assets/heart.svg').default} alt=""/>
                        <Typography variant="body2">
                            Marketing
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sm={6} md={4} lg={2}>
                        <img src={require('../Assets/person.svg').default} alt=""/>
                        <Typography variant="body2">
                            Nemo
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sm={6} md={4} lg={2}>
                        <img src={require('../Assets/world.svg').default} alt=""/>
                        <Typography variant="body2">
                            Product
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sm={6} md={4} lg={2}>
                        <img src={require('../Assets/symbols.svg').default} alt=""/>
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