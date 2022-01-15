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

const team = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

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
    marginTop: "4rem",
    padding: "4rem",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem",
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
    marginTop: "6rem",
    marginBottom: "6rem",
    padding: "4rem",
  },
  theProblemRootleft: {
    backgroundColor: "white",
    color: "black",
    padding: "3rem",
  },
  problemLeftTitle: {
    marginBottom: "4rem",
  },
  problemLeftBody: {
    marginTop: "3rem",
  },
  problemRootRight: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    padding: "1rem",
    [theme.breakpoints.up("sm")]: {
      padding: "1rem",
    },
  },
  problemRightListItem: {
    padding: "2rem",
  },
  theProblemIcon: {
    color: theme.palette.highlight.main,
    fontSize: "5rem",
    margin: "2rem",
  },
  ourMission: {
    backgroundColor: theme.palette.primary.light,
    color: "white",
  },
  ourMissionText: {
    margin: "5rem",
    maxWidth: 775,
    textAlign: "center",
  },
  ourJourneyTitle: {
    margin: "3rem",
  },
  ourTeam: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: "8rem",
    paddingBottom: "8rem",
  },
  ourTeamTitle: {
    marginLeft: "5rem",
    marginBottom: "8rem",
    color: "white",
  },

  highlightText: {
    color: theme.palette.highlight.main
  }
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
          <Typography  variant="h2">
            The roots of our project
          </Typography>

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
                  appropriately met user needs, creating an easier way to vacate
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
            <Grid className={classes.theProblemRootleft} item xs={12} sm={6}>
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
              <Typography className={classes.problemLeftBody} component="ol" variant="body1" >
                <li>Gathering documents</li>
                <li>Determining eligibility</li>
                <li>
                  Filing motions with the court Scheduling hearings with a judge
                </li>
              </Typography>
            </Grid>
            <Grid className={classes.problemRootRight} item xs={12} sm={6}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <HourglassEmpty className={classes.theProblemIcon} />
                  </ListItemIcon>
                  <Typography variant="subtitle1">
                    Each step requires time and know-how, increasing the barrier
                    of entry for applicants
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
            {team.map((id) => (
              <Grid
              key={id}
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
                <TeamCard key={id} teamNumber={id} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default AboutPage;
