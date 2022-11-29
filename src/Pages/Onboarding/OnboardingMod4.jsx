import { Grid, Typography, Box } from "@mui/material";
import { useModuleContentStyles } from "../../Styles/Onboarding/useModuleContentStyles";

// Components
import Header from "../../Components/Onboarding/Header";
import ModuleContent from "../../Components/Onboarding/ModuleContent";
import Footer from "../../Components/Onboarding/Footer";

// icons
import boat from "../../Assets/Onboarding/boat.svg";
import question from "../../Assets/Onboarding/question.svg";
import venn from "../../Assets/Onboarding/venn.svg";
import group from "../../Assets/Onboarding/group.svg";

import scrum from "../../Assets/Onboarding/scrum.svg";
import userResearch from "../../Assets/Onboarding/userResearch.svg";
import product from "../../Assets/Onboarding/product.svg";
import nemo from "../../Assets/Onboarding/nemo.svg";
import marketing from "../../Assets/Onboarding/marketing.svg";

import bug from "../../Assets/Onboarding/bug.svg";
import checkmark from "../../Assets/Onboarding/checkmark.svg";

const headerText = {
    title: "Module 4",
    description: "Now what?",
};

const teamNemo = {
    title: "You are on team Nemo",
    paragraph1: "Click below to see a little more what that is, and what that means:",
    links: [
        {
            linkTitle: "Guidance",
            linkIcon: "doc",
            modalTitle: "You are on team Nemo",
            modalParagraph1:
                "You must always be a part of at least one group. If you join a different group you may leave Nemo. If your duties on the other team end, you must join Nemo again.",
            modalParagraph2:
                "Take the first week or two to get your bearings before you start contributing. You can join a project already in motion or you can start one of your own. If you notice something that can be improved upon, take the initiative and start that project.",
        },
    ],
};

const otherTeams = {
    title: "How to join other teams",
    paragraph1: "Better to reliably and consistently show to one than dabble in more than one:",
    links: [
        {
            linkTitle: "Guidance",
            linkIcon: "doc",
            modalTitle: "How to join other teams",
            modalParagraph1:
                "Message the correspondent slack channel of the team introducing yourself and stating that you want to join. ",
            modalParagraph2: "Attend their weekly meetings and perform the tasks assigned.",
            modalParagraph3: "Better to reliably and consistently show to one than dabble in more than one.",
        },
    ],
};

const findWork = {
    title: "Find Work to do",
    paragraph1:
        "Now that you know what CV is about, and what team you are on. Let’s see how you can find a task to complete. The first tasks you should complete are already on your Airtable kanban (refer back to Module 2 tools if you are confused). Once those are complete, check the following to find another task.",
    links: [
        { linkTitle: "Pick a task Guide", linkIcon: "videoFindWork" },
        {
            linkTitle: "Misc. Tasks",
            linkIcon: "link",
            linkLocation: "https://airtable.com/appfJZShN8K4tcWHU/tblXQZfKPAJIjV4cL/viw5qPVwWi7GiDT2J?blocks=hide",
        },
    ],
};

const bugs = {
    title: "Bug reports",
    paragraph1:
        "Our website and tool are living creations requiring constant iteration and improvement. The ideas for this improvement come from bug reports created by you and the rest of the team! Here is the link you’ll use to create bug reports–please bookmark it!",
    links: [{ linkTitle: "Report bugs", linkIcon: "link", linkLocation: "https://airtable.com/shrzTUdyiDQsnqR3K" }],
};

const ourTeams = {
    title: "Our teams",
    links: [
        { linkTitle: "Airtable teams list", linkIcon: "link", linkLocation: "https://airtable.com/shrK9XGUYAHu8gy6k" },
    ],
};

const teamDesc = {
    title: "Team descriptions",
    links: [
        {
            linkTitle: "Scrum",
            linkIcon: "teamIcon",
            linkImg: <img src={scrum} alt="" className="makeStyles-linkIcon-11" />,
            modalTitle: "Scrum",
            modalParagraph1:
                "The Scrum team works in 2 week sprints where we focus on a few specific tasks each sprint.",
            modalParagraph2:
                "Interested? Join the “calculator scrum team” on slack. There you will see posts asking for volunteers for the next scrum team, and what disciplines we are looking for. Sign up by commenting and adding your name to this team!",
            modalParagraph3: "Please note, only people who have finished their Agile learning task should join Scrum.",
        },
        {
            linkTitle: "Marketing",
            linkIcon: "teamIcon",
            linkImg: <img src={marketing} alt="" className="makeStyles-linkIcon-11" />,
            modalTitle: "Marketing",
            modalParagraph1:
                "We promote Clearviction’s mission, vision and causes to get the attention of potential volunteers, partners and donors. ",
        },
        {
            linkTitle: "User Research",
            linkIcon: "teamIcon",
            linkImg: <img src={userResearch} alt="" className="makeStyles-linkIcon-11" />,
            modalTitle: "User Research",
            modalParagraph1:
                "We provide relevant insights on how users interact with ClearViction, through UX methods including user interviews, usability testing, persona research, surveys and more.",
        },
        {
            linkTitle: "Product",
            linkIcon: "teamIcon",
            linkImg: <img src={product} alt="" className="makeStyles-linkIcon-11" />,
            modalTitle: "Product",
            modalParagraph1:
                "We decide what direction the product should go in, what the priority should be, and make sure it happens in a way that makes a positive impact for the user.",
        },
        {
            linkTitle: "Nemo",
            linkIcon: "teamIcon",
            linkImg: <img src={nemo} alt="" className="makeStyles-linkIcon-11" />,
            modalTitle: "Nemo",
            modalParagraph1:
                "We are a catch-all bucket for work that either doesn't fall under the umbrellas of other teams (like dealing with bugs) AND work that needs to be done that the other teams don't have time for. ",
            modalParagraph2:
                "This team also serves as a spring board for newly onboarded volunteers to get a taste of what we're working on and how we collaborate. Our work is generally broken down into several Task Groups with Nemo members leading up each of those efforts.",
        },
    ],
};

const questions = {
    title: "Any questions?",
    paragraph1: "Ask your onboarding buddy. Need a buddy? Ping Seamus in the Nemo Slack Channel to get one.",
};

const button1 = {
    link: "/onboarding-mod3",
    text: "previous",
};

const button2 = {
    link: "/onboarding/#mod",
    text: "homepage",
};

const OnboardingMod4 = () => {
    const classes = useModuleContentStyles();
    return (
        <div>
            <Header text={headerText} />
            <Typography variant="h4" className={classes.mobileHeader}>
                Module 4
            </Typography>
            <Box>
                <Grid container className={classes.mainModuleContentCard}>
                    <Grid item xs={2} className={classes.cardIcon}>
                        <img src={boat} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={10}>
                        <ModuleContent content={teamNemo} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon}>
                        <img src={venn} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={10}>
                        <ModuleContent content={otherTeams} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon}>
                        <img src={checkmark} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={10}>
                        <ModuleContent content={findWork} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon}>
                        <img src={bug} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={10}>
                        <ModuleContent content={bugs} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon}>
                        <img src={group} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={10}>
                        <ModuleContent content={ourTeams} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon}>
                        <img src={group} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={10}>
                        <ModuleContent content={teamDesc} />
                        {/* Seamus wanted to keep a live version thats 
                        always up to date with all teams using this embed */}
                        <details
                            style={{
                                fontSize: "calc(14px + 0.390625vw)",
                                fontFamily: "Inter",
                                fontWeight: "500",
                                color: "#4E6C99",
                            }}
                        >
                            <summary>View all teams</summary>
                            <iframe
                                title="teams-airtable"
                                className="airtable-embed"
                                src="https://airtable.com/embed/shrK9XGUYAHu8gy6k?backgroundColor=teal&viewControls=on"
                                frameBorder="0"
                                width="100%"
                                height="900"
                                style={{
                                    background: "transparent",
                                    border: "1px solid #4E6C99",
                                }}
                            />
                        </details>
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon}>
                        <img src={question} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={10}>
                        <ModuleContent content={questions} />
                    </Grid>
                </Grid>
            </Box>

            <Footer button1={button1} button2={button2} />
        </div>
    );
};

export default OnboardingMod4;
