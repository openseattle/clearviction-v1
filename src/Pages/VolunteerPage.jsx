import { Grid, Typography, Container } from "@material-ui/core";
import { Alarm, CloudDone, Sync } from "@material-ui/icons";

import Fact from "../Components/Fact";

import { useGetInvolvedStyles } from "../Styles/useGetInvolvedStyles";

const factsProps = {
    style: { fontSize: "3em", },
    color: "secondary",
};

const facts = [
    {
        id: "fact0",
        icon: <Alarm {...factsProps} />,
        text: "Can commit to 4 hours a week for at least 6 months",
    },
    {
        id: "fact1",
        icon: <Sync {...factsProps} />,
        text: "Want to share your expertise to help us make a better product",
    },
    {
        id: "fact2",
        icon: <CloudDone {...factsProps} />,
        text: "Are a self-motivated individual comfortable with remote work",
    },
];

const VolunteerPage = () => {
    const classes = useGetInvolvedStyles();
    return (
        <>
            <Container component="section" id="volunteer" className={classes.regularContainerStyle} maxWidth="md">
                <Typography className={classes.headingStyle} variant="h2">
                    Help us break down barriers by joining the team.
                </Typography>
                <Typography className={classes.volunteerTextStyle} variant="body1">
                    Conviction vacation makes it easier for formerly incarcerated individuals to access housing and
                    employment, two things that are crucial for reducing the odds of re-incarceration.
                </Typography>
                <Typography className={classes.volunteerTextStyle} variant="body1">
                    By volunteering, you will help us reduce barriers and streamline the process of vacating eligible
                    convictions in Washington state to make it easier for people to move forward.
                </Typography>
                <Typography>You'll be a perfect fit if you:</Typography>
                <Grid container>
                    {facts.map(fact => (
                        <Grid item key={fact.id} xs={12} sm={4} md={4} lg={4}>
                            <Fact icon={fact.icon} text={fact.text} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Container className={classes.regularContainerStyle} maxWidth="md">
                <Typography className={classes.headingStyle} variant="h2">
                    Open roles
                </Typography>
                <iframe
                    id="roles-airtable-embed"
                    title="open-roles"
                    className="airtable-embed"
                    src="https://airtable.com/embed/shrw329SZsANpPuom"
                    frameBorder="0"
                    width="100%"
                    height="548"
                    style={{
                        background: "transparent",
                        border: "1px solid #ccc",
                        borderRadius: "6px",
                    }}
                ></iframe>
            </Container>
        </>
    );
};

export default VolunteerPage;
