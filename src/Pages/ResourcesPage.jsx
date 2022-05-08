import { Box, Container, Divider, Grid, Typography } from "@material-ui/core";
import RedesignHeroPanel from "../Components/RedesignHeroPanel";

import ResponsiveJumpButtonGroup from "../Components/ResponsiveJumpButtonGroup";
import FactImageCard from "../Components/FactImageCard";

import { useResourcesStyles } from "../Styles/useResourcesStyles";

import teamBuilding from "./../Assets/team_building.svg";
import cityBuildings from "./../Assets/city.svg";
import time from "./../Assets/time.svg";
import emails from "./../Assets/sending_emails.svg";
import question from "./../Assets/question.svg";
import dream from "./../Assets/dream.svg";
import diversity from "./../Assets/diversity.svg";
import processBuilding from "./../Assets/process.svg";
import career from "./../Assets/career.svg";
import graduation from "./../Assets/graduation.svg";
import FactSubList from "../Components/FactSubList";
import {
    jobPortals,
    professionalTraining,
    housingAdvisory,
    shelterListings,
    studentAid,
    postIncarEduPrograms,
    otherEduAssistance,
} from "../data/resourcesData";
import FactGroup from "../Components/FactGroup";
import FactTextPlaceholder from "../Components/FactTextPlaceholder";

const employmentFacts = [
    {
        id: "emp-fact-1",
        src: time,
        title: "Long periods of unemployment",
        text: "Getting back into society may take longer with a conviction on record. ",
    },
    {
        id: "emp-fact-2",
        src: emails,
        title: "Rejected applicaitons",
        text: "These are a common circumstance for people who have previously been convicted.",
    },
    {
        id: "emp-fact-3",
        src: question,
        title: "Lack of experience",
        text: "Getting a job in a new field is complicated due lack of access to education opportunities.",
    },
];

const housingFacts = [
    {
        id: "hou-fact-1",
        src: cityBuildings,
        title: "Public Housing Authorities",
        textList: [
            "Income capped",
            "Can’t be a registered offender",
            "PHAs have discretion on who they decide to house",
        ],
    },
    {
        id: "hou-fact-2",
        src: dream,
        title: "Private Housing",
        textList: [
            "Landlords have full disccretion, and often deny people with criminal records",
            "Management companies usually have extensive background checks",
        ],
    },
    {
        id: "hou-fact-3",
        src: diversity,
        title: "Supportive Housing",
        textList: [
            "Funded by HUD homeless programs",
            "Must have been residing in emergency shelter/housing in the previous 90 days",
        ],
    },
    {
        id: "hou-fact-4",
        src: processBuilding,
        title: "Transitional Housing",
        textList: [
            " Might require you have substance abuse, mental health or physical issues",
            "Some require you attend special meetings or work",
        ],
    },
];

const educationFacts = [
    {
        id: "edu-fact-1",
        src: career,
        title: "Ocupational Licenses",
        text: "Some states’ laws contain an automatic disqualification prohibiting a person with a felony conviction from obtaining an occupational license, regardless of the offense.",
    },
    {
        id: "edu-fact-2",
        src: graduation,
        title: "College Acceptance",
        text: "Colleges run background checks on applicants. Whether you will be accepted depends on the kind of check they do and the type and time of crime. ",
    },
];

const ResourcesPage = () => {
    const classes = useResourcesStyles();
    return (
        <>
            <RedesignHeroPanel title="Resources">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography className={classes.contentTextStyle} variant="subtitle1" component="p">
                            The process of vacating a conviction is convoluted, but it’s needed to avoid barriers in
                            employment, housing and education.
                        </Typography>
                        <Typography className={classes.contentTextStyle} variant="subtitle1" component="p">
                            Find out why it’s important to vacate your conviction and get resources to help you while
                            you work your way to it.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box component="img" width="100%" src={teamBuilding} alt="Teamwork solves a puzzle." />
                    </Grid>
                </Grid>
            </RedesignHeroPanel>

            <Container
                id="read-more"
                className={classes.regularContainerStyle + " " + classes.centerText}
                maxwidth="sm"
            >
                <ResponsiveJumpButtonGroup
                    links={[
                        { url: "employment", linkName: "employment" },
                        { url: "housing", linkName: "housing" },
                        { url: "education", linkName: "education" },
                        { url: "other", linkName: "other" },
                    ]}
                />
            </Container>

            <Container id="employment" component="section" className={classes.regularContainerStyle} maxWidth="md">
                <Typography className={classes.headingStyle} variant="h2">
                    Employment
                </Typography>
                <Typography className={classes.volunteerTextStyle} variant="h3">
                    Why Vacate?
                </Typography>
                <Typography className={classes.headingStyle} variant="body1">
                    Simply having a conviction does not prevent you from having a job, however, it can be more difficult
                    depending on the type of job and the employer. It is important to not lose hope while facing
                    challenges such as:
                </Typography>
                <Grid container spacing={3}>
                    {employmentFacts.map(fact => (
                        <Grid key={fact.id} item xs={12} sm={6} md={4}>
                            <FactImageCard fact={fact} key={fact.id} id={fact.id} />
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Container className={classes.regularContainerStyle} maxWidth="md">
                <Typography variant="h3" className={classes.headingStyle}>
                    Resources
                </Typography>
                <FactGroup
                    facts={[
                        {
                            id: "erf0",
                            summary: "Job Portals",
                            summaryID: "job-portals-button",
                            ariaLabel: "Read More Job Portals",
                            content: <FactSubList resources={jobPortals} />,
                            contentID: "job-portals-paragraph",
                        },
                        {
                            id: "erf1",
                            summary: "Professional Training",
                            summaryID: "training-button",
                            ariaLabel: "Read More Professional Training",
                            content: <FactSubList resources={professionalTraining} />,
                            contentID: "training-paragraph",
                        },
                    ]}
                />
            </Container>
            <Container maxWidth="md">
                <Divider className={classes.dividerStyle} />
            </Container>

            <Container id="housing" component="section" className={classes.regularContainerStyle} maxWidth="md">
                <Typography className={classes.headingStyle} variant="h2">
                    Housing
                </Typography>
                <Typography className={classes.headingStyle} variant="h3">
                    Why Vacate?
                </Typography>
                <Typography className={classes.headingStyle} variant="body1">
                    There are many different barriers that can prevent people with convictions from fair access to
                    housing. Each different type of housing comes with its own set of obstacles that you should take
                    into consideration when looking for housing:
                </Typography>
                <Grid container spacing={3}>
                    {housingFacts.map(fact => (
                        <Grid key={fact.id} item xs={12} sm={6} md={6}>
                            <FactImageCard fact={fact} key={fact.id} id={fact.id} height={"52em"} />
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Container className={classes.regularContainerStyle} maxWidth="md">
                <Typography variant="h3" className={classes.headingStyle}>
                    Resources
                </Typography>
                <FactGroup
                    facts={[
                        {
                            id: "hrf0",
                            summary: "Shelter Listings",
                            summaryID: "shelter-button",
                            ariaLabel: "Read More Shelter Listings",
                            content: <FactSubList resources={shelterListings} />,
                            contentID: "shelter-paragraph",
                        },
                        {
                            id: "hrf1",
                            summary: "Housing Advisory",
                            summaryID: "housing-button",
                            ariaLabel: "Read More Housing Advisory",
                            content: <FactSubList resources={housingAdvisory} />,
                            contentID: "housing-paragraph",
                        },
                    ]}
                />
            </Container>
            <Container maxWidth="md">
                <Divider className={classes.dividerStyle} />
            </Container>

            <Container id="education" component="section" className={classes.regularContainerStyle} maxWidth="md">
                <Typography className={classes.headingStyle} variant="h2">
                    Education
                </Typography>
                <Typography className={classes.headingStyle} variant="h3">
                    Why Vacate?
                </Typography>
                <Typography className={classes.headingStyle} variant="body1">
                    With a conviction in your record, you might face some barriers when it comes to getting
                    opportunities where a background check is performed. Here are the main educational challenges faced
                    by those with convicitons:
                </Typography>
                <Grid container spacing={4}>
                    {educationFacts.map(fact => (
                        <Grid key={fact.id} item xs={12} sm={6} md={6}>
                            <FactImageCard fact={fact} key={fact.id} id={fact.id} />
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Container className={classes.regularContainerStyle} maxWidth="md">
                <Typography variant="h3" className={classes.headingStyle}>
                    Resources
                </Typography>
                <FactGroup
                    facts={[
                        {
                            id: "edurf0",
                            summary: "Federal Financial Student Aid",
                            summaryID: "student-aid-button",
                            ariaLabel: "Read More Federal Financial Student Aid",
                            content: <FactSubList resources={studentAid} />,
                            contentID: "student-aid-paragraph",
                        },
                        {
                            id: "edurf1",
                            summary: "Post-incarceration educational programs",
                            summaryID: "educational-programs-button",
                            ariaLabel: "Read More Post-incarceration educational programs",
                            content: <FactSubList resources={postIncarEduPrograms} />,
                            contentID: "educational-programs-paragraph",
                        },
                        {
                            id: "edurf2",
                            summary: "Other Educational Assistance",
                            summaryID: "other-educational-button",
                            ariaLabel: "Read More Other Educational Assistance",
                            content: <FactSubList resources={otherEduAssistance} />,
                            contentID: "other-educational-paragraph",
                        },
                    ]}
                />
            </Container>
        </>
    );
};

export default ResourcesPage;
