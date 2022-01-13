import {
  Container,
  Grid,
  Typography,
  Box,
  CardContent,
  Card,
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

const team = [1, 2, 3, 4, 5, 6];

const useStyles = makeStyles((theme) => ({
  actionItem: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  infoDark: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: 0,
  },
  roots: {
    backgroundColor: theme.palette.primary.light,
    color: "white",
    borderRadius: 0,
    padding: "3rem",
  },
  rootsBodyText: {
    maxWidth: 750,
  },
  theProblemRoot: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  theProblemIcon: {
    color: "#FFD200",
    fontSize: "4rem",
  },
  ourMission: {
    backgroundColor: theme.palette.primary.light,
    color: "white",
    padding: "3rem",
  },
  ourTeam: {
    backgroundColor: theme.palette.primary.main,
    marginTop: "2rem",
    marginBottom: "2rem",
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
          <Typography variant="h2">The roots of our project</Typography>
          <Grid container justifyContent="center">
            <Grid item md={6}>
              <Box
                component="img"
                src="#"
                style={{ height: 180, width: 300 }}
              />
            </Grid>
            <Grid item md={6}>
              <Typography className={classes.rootsBodyText} variant="body1">
                One in four Washingtonians have been involved in the criminal
                justice system. Those with a criminal record face significant
                barriers to daily life after completing their prison terms.
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Box
                component="img"
                src="#"
                style={{ height: 180, width: 300 }}
              />
            </Grid>
            <Grid item md={6}>
              <Typography variant="body1">
                Washington State’s New Hope Act makes it easier for people with
                past criminal records to have their convictions vacated. Yet the
                system is slow and inefficient.
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Box
                component="img"
                src="#"
                style={{ height: 180, width: 300 }}
              />
            </Grid>

            <Grid item md={6}>
              <Typography variant="body1">
                We have identified opportunities to use technology to streamline
                this process and want to use our resources to appropriately met
                user needs, creating an easier way to vacate convictions.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography variant="h2">the problem</Typography>
              <Typography variant="body1">
                The process of vacating a conviction is convoluted, making it
                difficult for most people to navigate.
              </Typography>
              <Typography variant="body1">
                It requires a number of steps that can be difficult to
                accomplish:
                <ol>
                  <li>Gathering documents</li>
                  <li>Determining eligibility</li>
                  <li>
                    Filing motions with the court Scheduling hearings with a
                    judge
                  </li>
                </ol>
              </Typography>
            </Grid>
            <Grid className={classes.theProblemRoot} item xs={12} sm={6}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <HourglassEmpty className={classes.theProblemIcon} />
                  </ListItemIcon>
                  <Typography>
                    Each step requires time and know-how, increasing the barrier
                    of entry for applicants
                  </Typography>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <LocalAtmOutlined className={classes.theProblemIcon} />
                  </ListItemIcon>
                  <Typography>
                    While hiring an attorney can help simplify the process, it’s
                    unaffordable for most
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PanToolOutlined className={classes.theProblemIcon} />
                  </ListItemIcon>
                  <Typography>
                    Free volunteer services are available but they are often
                    inaccessible and don’t cover all steps of the process
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.ourMission}>
          <Typography variant="h4" align="center">
            Our mission is to benefit individuals with criminal convictions and
            decrease lifelong collateral consequences.
          </Typography>
          <Typography variant="h4" align="center">
            To support this mission, we first focused on creating a <span style={{color: "#FFD200"}}>Conviciton
            Eligibility Calculator</span> to help people determine if they are eligible
            to vacate their conviction.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2">the process</Typography>
        </Box>
        <Box className={classes.ourTeam}>
          <Typography style={{ margin: "3rem", color: "white" }} variant="h2">
            The Team
          </Typography>
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            {team.map((id) => (
                <TeamCard teamNumber={id}/>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default AboutPage;
