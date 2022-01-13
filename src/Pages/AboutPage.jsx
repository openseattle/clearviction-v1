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
    padding: "2rem",
    [theme.breakpoints.up("sm")]: {
      padding: "4rem",
    }
  },
  rootsTitle: {
    padding: theme.spacing(1),
  },
  rootsImage: {
    width: 300,
    height: 180,
    [theme.breakpoints.down("sm")]: {
      width: 150,
      height: 90,
    },
  },
  rootsBodyText: {
    minWidth: 150,
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
    paddingBottom: "2rem",
  },
  problemLeftBody: {
    marginBottom: "3rem",
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
    color: "#FFD200",
    fontSize: "5rem",
    margin: "2rem",
  },
  ourMission: {
    backgroundColor: theme.palette.primary.light,
    color: "white",
    paddingTop: "5rem",
    paddingBottom: "5rem",
    display: "flex",
    justifyContent: "center",
  },
  ourMissionText: {
    margin: "6rem",
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

        <Box className={classes.roots}>
          <Typography className={classes.rootsTitle} variant="h2">
            The roots of our project
          </Typography>

          {/* First Solution */}
          <List>
            <ListItem>
              <ListItemIcon>
                <Box
                  component="img"
                  src={seattle}
                  className={classes.rootsImage}
                />
              </ListItemIcon>
              <Typography className={classes.rootsBodyText} variant="body1">
                One in four Washingtonians have been involved in the criminal
                justice system. Those with a criminal record face significant
                barriers to daily life after completing their prison terms.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.rootsBodyText} variant="body1">
                Washington State’s New Hope Act makes it easier for people with
                past criminal records to have their convictions vacated. Yet the
                system is slow and inefficient.
              </Typography>
              <ListItemIcon>
                <Box
                  component="img"
                  src={lawyer}
                  className={classes.rootsImage}
                />
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Box
                  component="img"
                  src={innovation}
                  className={classes.rootsImage}
                />
              </ListItemIcon>
              <Typography className={classes.rootsBodyText} variant="body1">
                We have identified opportunities to use technology to streamline
                this process and want to use our resources to appropriately met
                user needs, creating an easier way to vacate convictions.
              </Typography>
            </ListItem>
          </List>

          {/* Alternative Solution */}
          {/* <Grid container justifyContent="center">
            <Grid className={classes.alignItemContent} item xs={12} sm={6}>
              <Box
                component="img"
                src={lawyer}
                className={classes.rootsImage}
              />
            </Grid>
            <Grid  item xs={12} sm={6}>
              <Box display="flex" justifyContent="center">
              <Typography className={classes.rootsBodyText} variant="body1">
                One in four Washingtonians have been involved in the criminal
                justice system. Those with a criminal record face significant
                barriers to daily life after completing their prison terms.
              </Typography>
              </Box>

            </Grid>
            <Grid className={classes.alignItemContent} item xs={12} sm={6}>
              <Box
                component="img"
                src={lawyer}
                className={classes.rootsImage}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography className={classes.rootsBodyText} variant="body1">
                Washington State’s New Hope Act makes it easier for people with
                past criminal records to have their convictions vacated. Yet the
                system is slow and inefficient.
              </Typography>
            </Grid>
            <Grid className={classes.alignItemContent} item xs={12} sm={6}>
              <Box
                component="img"
                src={lawyer}
                className={classes.rootsImage}
              />
            </Grid>

            <Grid className={classes.alignItemContent} item xs={12} sm={6}>
              <Typography className={classes.rootsBodyText} variant="body1">
                We have identified opportunities to use technology to streamline
                this process and want to use our resources to appropriately met
                user needs, creating an easier way to vacate convictions.
              </Typography>
            </Grid>
          </Grid> */}
        </Box>
        <Box className={classes.problemRoot}>
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
              <Typography component="ol" variant="body1">
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
        </Box>
        <Box className={classes.ourMission}>
          <Box>
            <Typography className={classes.ourMissionText} variant="h4">
              Our mission is to benefit individuals with criminal convictions
              and decrease lifelong collateral consequences.
            </Typography>
            <Typography className={classes.ourMissionText} variant="h4">
              To support this mission, we first focused on creating a <br />
              <span style={{ color: "#FFD200" }}>
                Conviciton Eligibility Calculator
              </span>{" "}
              to help people determine if they are eligible to vacate their
              conviction.
            </Typography>
          </Box>
        </Box>

        <Box className={classes.ourTeam}>
          <Typography className={classes.ourTeamTitle} variant="h2">
            The Team
          </Typography>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            {team.map((id) => (
              <TeamCard key={id} teamNumber={id} />
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default AboutPage;
