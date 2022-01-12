import {
  Container,
  Grid,
  Typography,
  Box,
  CardContent,
  Card,
  makeStyles,
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
  infoLight: {
    backgroundColor: theme.palette.primary.light,
    color: "white",
    borderRadius: 0,
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


        <Box>
        <Typography variant="h2">The roots of our project</Typography>

        </Box>
        <Box className={classes.ourTeam}>
          <Typography style={{ marginBottom: "1rem" }} variant="h2">
            The Team
          </Typography>
        <Grid container  spacing={2} justifyContent="center">
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
