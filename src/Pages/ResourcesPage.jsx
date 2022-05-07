import { Box, Container, Grid, Typography } from "@material-ui/core";
import RedesignHeroPanel from "../Components/RedesignHeroPanel";

import ResponsiveJumpButtonGroup from "../Components/ResponsiveJumpButtonGroup";
import FactImageCard from "../Components/FactImageCard";
import EmploymentResources from "../Subpages/Resources/EmploymentResources";

import { useResourcesStyles } from "../Styles/useResourcesStyles";

import teamBuilding from "./../Assets/team_building.svg";
import cityBuildings from "./../Assets/city.svg";
import time from "./../Assets/time.svg";
import emails from "./../Assets/sending_emails.svg";
import question from "./../Assets/question.svg";

const employmentFacts = [
    {
        id: "emp-fact-1",
        src: time,
        title: "Long periods of unemployment",
        text: "Getting back into society may take longer with a conviction on record.",
    },
    {
        id: "emp-fact-2",
        src: emails,
        title: "Public Housing Authorities",
        text: "These are a common circumstance for people who have previously been convicted.",
    },
    {
        id: "emp-fact-3",
        src: question,
        title: "Public Housing Authorities",
        text: "Getting a job in a new field is complicated due lack of access to education opportunities.",
    },
];

const ResourcesPage = () => {
    const classes = useResourcesStyles();
    return (
        <>
            <RedesignHeroPanel title="Resources">
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography className={classes.contentTextStyle} variant="subtitle1" component="p">
                            The process of vacating a conviction is convoluted, but it’s needed to avoid barriers in
                            employment, housing and education.
                        </Typography>
                        <Typography className={classes.contentTextStyle} variant="subtitle1" component="p">
                            Find out why it’s important to vacate your conviction and get resources to help you while
                            you work your way to it.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box
                            component="img"
                            style={{ width: "100%", padding: 16 }}
                            src={teamBuilding}
                            alt="Teamwork solves a puzzle."
                        />
                    </Grid>
                </Grid>
            </RedesignHeroPanel>
            <Container id="read-more" className={classes.regularContainer + " " + classes.centerText} maxwidth="sm">
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
                <Grid container spacing={1}>
                    {employmentFacts.map(fact => (
                        <FactImageCard fact={fact} key={fact.id} id={fact.id} />
                    ))}
                </Grid>
            </Container>
            <Container className={classes.regularContainerStyle} maxWidth="md">
                <Typography variant="h3" className={classes.headingStyle}>
                    Resources
                </Typography>
                <EmploymentResources />
            </Container>
            <Container className={classes.regularContainerStyle} maxWidth="md"></Container>
        </>
    );
};

export default ResourcesPage;
