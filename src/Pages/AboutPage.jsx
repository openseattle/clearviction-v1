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
    padding: 5,
  },
  infoLight: {
    backgroundColor: "var(--light-blue)",
    color: "white",
    minHeight: "15em",
    borderRadius: 0,
    padding: 5,
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
            We are the Washington Conviction Vacation Project. Our mission is to
            identify opportunities to use technology to streamline the
            conviction vacation process so that formerly sentenced individuals
            from Washington state can make a fresh start.
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={12}>
            <Card className={classes.infoDark} variant="outlined">
              <CardContent>
                <Typography variant="h5">
                  Washingtonians will face significant barriers to daily life
                  after completing their sentence, making it harder to access
                  housing, employment, and community. The first step in
                  overcoming these barriers is to vacate the conviction (a
                  process which hides the conviction record from background
                  checks and makes it legal to answer, “No, I have never been
                  convicted of a crime,” in a job interview or housing
                  application).
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <Card className={classes.infoLight} variant="outlined">
              <CardContent>
                <Typography variant="h5">
                  We are a civic-tech open-source project, run by volunteers
                  with different backgrounds from all over the world. CVP is
                  associated with Democracy Lab and Open Seattle org.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box className={classes.textSpace}>
          <Typography variant="h2">Our Team</Typography>
          <Typography variant="h4">
            We are a group of dedicated volunteers working together to create
            tools that help people navigate the conviction vacation process. We
            are a diverse crew, drawn together by a drive for social justice.
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
