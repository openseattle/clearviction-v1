import {
  Container,
  Grid,
  Typography,
  Box,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";
import TeamCard from "../Components/TeamCard";
import HeroPanel from "../Components/HeroPanel";
import {
  HourglassEmpty,
  LocalAtmOutlined,
  PanToolOutlined,
} from "@material-ui/icons";

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
    backgroundColor: theme.palette.primary.light,
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
    width: 300,
    height: 180,
  },
  rootsBodyText: {
    minWidth: 150,
    fontFamily: ["Roboto", "sans-serif"],
    fontSize: 18,
  },
  problemRoot: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    padding: theme.spacing(5),
  },
  theProblemRootleft: {
    backgroundColor: "white",
    color: "black",
    paddingBottom: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
  problemLeftTitle: {
    marginBottom: theme.spacing(4),
  },
  problemLeftBody: {
    marginTop: theme.spacing(4),
  },
  problemRootRight: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(4),
      padding: theme.spacing(3),
    },
  },
  problemRightListItem: {
    padding: theme.spacing(3),
  },
  theProblemIcon: {
    color: theme.palette.highlight.main,
    fontSize: "5rem",
    margin: theme.spacing(3),
  },
  ourMission: {
    backgroundColor: theme.palette.primary.light,
    color: "white",
  },
  ourMissionText: {
    margin: theme.spacing(6),
    maxWidth: 775,
    textAlign: "center",
  },
  ourJourneyTitle: {
    margin: theme.spacing(4),
  },
  ourTeam: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  ourTeamTitle: {
    marginLeft: theme.spacing(6),
    marginBottom: theme.spacing(9),
    color: "white",
  },

  highlightText: {
    color: theme.palette.highlight.main,
  },
}));

const AboutPage = () => {
  const classes = useStyles();
  const pageTitle = "About Us";
  const pageSubtitle = `We are a civic-tech open-source project working to make the 
  conviction vacation process easier and more straightforward, starting with an 
  eligibility calculator.`;
  return (
    <>
      <Container maxWidth="lg">
        <HeroPanel title={pageTitle} subtitle={pageSubtitle} />
      </Container>

      <Box className={classes.roots}>
        <Container maxWidth="lg" className={classes.rootsContainer}>
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
                <Typography className={classes.rootsBodyText} variant="body1">
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
                <Typography className={classes.rootsBodyText} variant="body1">
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
                <Typography className={classes.rootsBodyText} variant="body1">
                  We have identified opportunities to use technology to
                  streamline this process and want to use our resources to
                  appropriately meet user needs, creating an easier way to vacate
                  convictions.
                </Typography>
              }
            />
          </List>
        </Container>
      </Box>
      <Box className={classes.problemRoot}>
        <Container maxWidth="lg">
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
            <Grid className={classes.problemRootRight} item sm={12} md={6}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <HourglassEmpty className={classes.theProblemIcon} />
                  </ListItemIcon>
                  <Typography variant="subtitle1">
                    Each step requires time and know-how, increasing the barrier
                    to entry for applicants
                  </Typography>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <LocalAtmOutlined className={classes.theProblemIcon} />
                  </ListItemIcon>
                  <Typography variant="subtitle1">
                    While hiring an attorney can help simplify the process, it’s
                    unaffordable for most
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PanToolOutlined className={classes.theProblemIcon} />
                  </ListItemIcon>
                  <Typography variant="subtitle1">
                    Free volunteer services are available but they are often
                    inaccessible and don’t cover all steps of the process
                  </Typography>
                </ListItem>
              </List>
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
              To support this mission, we first focused on creating a <br />
              <span className={classes.highlightText}>
                Conviction Eligibility Calculator
              </span>{" "}
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
            {team.map((member) => (
              <Grid
                key={member.firstName}
                item
                xs={6}
                sm={4}
                md={3}
                lg={3}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "1rem",
                }}
              >
                <TeamCard key={member.firstName} member={member} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default AboutPage;
