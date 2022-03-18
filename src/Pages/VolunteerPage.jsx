import { Box, Grid, Typography, Container } from "@material-ui/core";
import { Alarm, CloudDone, Sync } from "@material-ui/icons";

import team from "../Assets/team_building.svg";
import brainstorm from "../Assets/brainstorming_session.svg";
import laptop from "../Assets/laptop.svg";
import Fact from "../Components/Fact";
import VolunteerRolesCard from "../Components/VolunteerRolesCard";

import { useGetInvolvedStyles } from "../Styles/useGetInvolvedStyles";
import { RedesignButtonPrimary } from "../ui-kit/RedesignButtonPrimary";

const factsProps = {
  style: { fontSize: 54 },
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
const openVolunteerRoles = [
  {
    id: "role0",
    image: team,
    alt: "Two people who belong to the same team putting a puzzle together.",
    discipline: "User Experience",
    roles: ["Designers", "Researchers"],
  },
  {
    id: "role1",
    image: brainstorm,
    alt: "A lightbulb representing an idea surrounded by a network.",
    discipline: "Development",
    roles: ["Front-end Devs", "Back-end Devs"],
  },
  {
    id: "role2",
    image: laptop,
    alt: "Someone using a laptop to communicate.",
    discipline: "Content & Outreach",
    roles: ["Copywriters", "Marketing Directors"],
  },
];

const VolunteerPage = () => {
  const classes = useGetInvolvedStyles();
  return (
    <>
      <Container
        component="section"
        id="volunteer"
        className={classes.regularContainerStyle}
        maxWidth="md"
      >
        <Typography className={classes.headingStyle} variant="h2">
          Help us break down barriers by joining the team.
        </Typography>
        <Typography className={classes.volunteerTextStyle} variant="body1">
          Conviction vacation makes it easier for formerly incarcerated
          individuals to access housing and employment, two things that are
          crucial for reducing the odds of re-incarceration.
        </Typography>
        <Typography className={classes.volunteerTextStyle} variant="body1">
          By volunteering, you will help us reduce barriers and streamline the
          process of vacating eligible convictions in Washington state to make
          it easier for people to move forward.
        </Typography>
        <Typography>You'll be a perfect fit if you:</Typography>
        <Grid container>
          {facts.map((fact) => (
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
        <Grid container>
          {openVolunteerRoles.map((volunteerRole) => (
            <Grid key={volunteerRole.id} item xs={12} sm={12} md={4}>
              <Box display={"flex"} justifyContent={"center"}>
                <VolunteerRolesCard
                  image={volunteerRole.image}
                  discipline={volunteerRole.discipline}
                  roles={volunteerRole.roles}
                  alt={volunteerRole.alt}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container className={classes.CTAButtonContainerStyle}>
        <RedesignButtonPrimary href="">apply now</RedesignButtonPrimary>
      </Container>
    </>
  );
};

export default VolunteerPage;
