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
} from "@material-ui/core";
import TeamCard from "../Components/TeamCard";
import PrimaryButton from "../ui-kit/Button";
import HeroPanel from "../Components/HeroPanel";

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
  ourTeam: {
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
            <Grid item>
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
            <Grid item>
              <List>
                <ListItem>
                  <Typography>
                    Each step requires time and know-how, increasing the barrier
                    of entry for applicants
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Typography variant="h3">
            Our mission is to benefit individuals with criminal convictions and
            decrease lifelong collateral consequences. To support this mission,
            we first focused on creating a Conviciton Eligibility Calculator to
            help people determine if they are eligible to vacate their
            conviction.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2">the process</Typography>
        </Box>
        <Box className={classes.ourTeam}>
          <Typography style={{ marginBottom: "1rem" }} variant="h2">
            The Team
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {team.map((id) => (
              <Grid item key={id} sm={12} md={3} lg={3}>
                <TeamCard teamNumber={id} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default AboutPage;
