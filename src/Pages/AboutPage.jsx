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
import Footer from "../Components/Footer";

const team = [1, 2, 3, 4, 5, 6];

const useStyles = makeStyles({
  root: {
    backgroundColor: "var(--gray)",
  },
  actionItem: {
    backgroundColor: "var(--dark-blue)",
    color: "white",
  },
  infoDark: {
    backgroundColor: "var(--dark-blue)",
    color: "white",
    minHeight: "10em",
    borderRadius: 0,
  },
  infoLight: {
    backgroundColor: "var(--light-blue)",
    color: "white",
    minHeight: "10em",
    borderRadius: 0,
  },
  textSpace: {
    paddingTop: "2em",
    paddingBottom: "2em",
  },
});

const AboutPage = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Box className={classes.textSpace}>
          <Typography variant="h1">About Us</Typography>

          <Typography variant="h3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={12}>
            <Card className={classes.infoDark} variant="outlined">
              <CardContent>
                <Typography variant="h5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <Card className={classes.infoLight} variant="outlined">
              <CardContent>
                <Typography variant="h5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box className={classes.textSpace}>
          <Typography variant="h2">Our Team</Typography>
          <Typography variant="h4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Box>
        <Grid container justifyContent="center" maxWidth="xs" spacing={3}>
          {team.map((id) => (
            <Grid item key={id}>
              <TeamCard teamNumber={id} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box className={classes.actionItem} padding={5} marginTop={3}>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item>
            <Typography variant="h3" align="center">
              Get In Touch
            </Typography>
            <PrimaryButton text="Contact" href="/contact" />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};
export default AboutPage;
