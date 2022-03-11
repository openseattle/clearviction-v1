import {
  Container,
  Grid,
  Typography,
  Box,
  makeStyles,
  List,
} from "@material-ui/core";
import HeroPanel from "../Components/HeroPanel";
import TeamCard from "../Components/TeamCard";
import {
  HourglassEmpty,
  LocalAtmOutlined,
  PanToolOutlined,
} from "@material-ui/icons";
import { ExternalLink } from "../ui-kit/ExternalLink";

import lawyer from "../Assets/lawyer.svg";
import seattle from "../Assets/seattle.svg";
import innovation from "../Assets/innovation.svg";
import ListItemMobileSnap from "../ui-kit/ListItemMobileSnap";

import team from "../data/teamData";

const useStyles = makeStyles((theme) => ({
  alignItemContent: {
    display: "flex",
    justifyContent: "center",
  },
  roots: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: 0,
  },
  rootsContainer: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
    },
  },
  rootsImage: {
    maxWidth: "100%",
  },
  problemRoot: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    padding: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
  theProblemRootleft: {
    backgroundColor: "white",
    color: "black",
    paddingBottom: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
  problemLeftTitle: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  problemLeftBody: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  problemRootRight: {
    backgroundColor: theme.palette.primary.dark,
    color: "white",
    padding: theme.spacing(4),
    paddingBottom: theme.spacing(5),
  },
  problemRightListText: {
    padding: theme.spacing(2),
  },
  theProblemIcon: {
    color: theme.palette.secondary.main,
    fontSize: "40px",
    margin: theme.spacing(4),
  },
  ourMission: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  ourMissionText: {
    textAlign: "center",
    marginBottom: theme.spacing(8),
  },
  ourJourneyTitle: {
    margin: theme.spacing(4),
  },
  ourTeam: {
    backgroundColor: theme.palette.primary.dark,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  ourTeamTitle: {
    marginLeft: theme.spacing(6),
    marginBottom: theme.spacing(9),
    color: "white",
  },
  highlightText: {
    color: theme.palette.secondary.main,
  },
  cardGrid: {
    padding: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
  },
}));

const AboutPage = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <HeroPanel
          title={"About Us"}
          subtitle={`We are a civic-tech open-source project working to make the conviction vacation 
            process easier and more straightforward, starting with an eligibility calculator.`}
        />
      </Container>

      <Box className={classes.roots}>
        <Container maxWidth="md" className={classes.rootsContainer}>
          <Typography variant="h2">The roots of our project</Typography>

          <List>
            <ListItemMobileSnap
              image={
                <Box
                  component="img"
                  src={seattle}
                  className={classes.rootsImage}
                />
              }
              text={
                <Typography variant="body1">
                  One in four Washingtonians have been involved in the criminal
                  justice system. Those with a criminal record face significant
                  barriers to daily life after completing their prison terms.
                </Typography>
              }
            />
            <ListItemMobileSnap
              image={
                <Box
                  component="img"
                  src={lawyer}
                  className={classes.rootsImage}
                />
              }
              text={
                <Typography variant="body1">
                  Washington State’s New Hope Act makes it easier for people
                  with past criminal records to have their convictions vacated.
                  Yet the system is slow and inefficient.
                </Typography>
              }
              textLeft
            />

            <ListItemMobileSnap
              image={
                <Box
                  component="img"
                  src={innovation}
                  className={classes.rootsImage}
                />
              }
              text={
                <Typography variant="body1">
                  We have identified opportunities to use technology to
                  streamline this process and want to use our resources to
                  appropriately meet user needs, creating an easier way to
                  vacate convictions.
                </Typography>
              }
            />
          </List>
        </Container>
      </Box>
      <Box className={classes.problemRoot}>
        <Container maxWidth="md">
          <Grid container>
            <Grid className={classes.theProblemRootleft} item sm={12} md={6}>
              <Typography className={classes.problemLeftTitle} variant="h2">
                The problem
              </Typography>
              <Typography className={classes.problemLeftBody} variant="body1">
                The process of vacating a conviction is convoluted, making it
                difficult for most people to navigate.
              </Typography>
              <Typography className={classes.problemLeftBody} variant="body1">
                It requires a number of steps that can be difficult to
                accomplish:
              </Typography>
              <Typography
                className={classes.problemLeftBody}
                component="ol"
                variant="body1"
              >
                <li>Gathering documents</li>
                <li>Determining eligibility</li>
                <li>Filing motions with the court</li>
                <li>Scheduling hearings with a judge</li>
              </Typography>
            </Grid>
            <Grid
              className={classes.problemRootRight}
              item
              xs={12}
              sm={12}
              md={6}
            >
              <Grid container justifyContent="center">
                <Grid item sm={3} md={3}>
                  <HourglassEmpty className={classes.theProblemIcon} />
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                  <Typography className={classes.problemRightListText}>
                    Each step requires time and know-how, increasing the barrier
                    to entry for applicants
                  </Typography>
                </Grid>
                <Grid item sm={3} md={3}>
                  <LocalAtmOutlined className={classes.theProblemIcon} />
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                  <Typography className={classes.problemRightListText}>
                    While hiring an attorney can help simplify the process, it’s
                    unaffordable for most
                  </Typography>
                </Grid>
                <Grid item sm={3} md={3}>
                  <PanToolOutlined className={classes.theProblemIcon} />
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                  <Typography className={classes.problemRightListText}>
                    Free volunteer services are available but they are often
                    inaccessible and don’t cover all steps of the process
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className={classes.ourMission}>
        <Container
          style={{
            paddingTop: "5rem",
            paddingBottom: "5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography className={classes.ourMissionText} variant="h3">
              Our mission is to benefit individuals with criminal convictions
              and decrease lifelong collateral consequences.
            </Typography>
            <Typography className={classes.ourMissionText} variant="h3">
              To support this mission, we first focused on creating a{" "}
              <ExternalLink
                href="https://www.clearviction.org/calculator/landing-0"
                className={classes.highlightText}
              >
                Conviction Eligibility Calculator
              </ExternalLink>{" "}
              to help people determine if they are eligible to vacate their
              conviction.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box className={classes.ourTeam}>
        <Container maxWidth="lg">
          <Typography className={classes.ourTeamTitle} variant="h2">
            The Team
          </Typography>
          <Grid container>
            {team.map((member, idx) => (
              <Grid
                className={classes.cardGrid}
                key={idx}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
              >
                <Box display="flex" justifyContent="center">
                  <TeamCard member={member} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default AboutPage;
