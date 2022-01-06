import {
  Container,
  Grid,
  Typography,
  Box,
  CardContent,
  Card,
  makeStyles,
  CardActionArea,
} from "@material-ui/core";
import TeamCard from "../Components/TeamCard";
import PrimaryButton from "../ui-kit/Button";
import HeroPanel from "../Components/HeroPanel";

const team = [1, 2, 3, 4, 5, 6];

const useStyles = makeStyles({
  actionItem: {
    backgroundColor: "var(--dark-blue)",
    color: "white",
  },
  infoDark: {
    backgroundColor: "var(--dark-blue)",
    color: "white",
    borderRadius: 0,
  },
  infoLight: {
    backgroundColor: "var(--blue)",
    color: "white",
    borderRadius: 0,
  },
  ourTeam: {
    marginTop: "2em",
    marginBottom: "2em",
  },
});

const AboutPage = () => {
  const classes = useStyles();
  const pageTitle = "About Us";
  const pageSubtitle = `We are the Washington Conviction Vacation Project. 
  Our mission is to identify opportunities to use technology to streamline 
  the conviction vacation process so that formerly sentenced individuals 
  from Washington state can make a fresh start.`;
  return (
    <>
      <Container maxWidth="lg">
        <HeroPanel title={pageTitle} subtitle={pageSubtitle} />
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={12}>
            <Card className={classes.infoDark} variant="outlined">
              <CardActionArea>
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
              </CardActionArea>
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

        <Box className={classes.ourTeam}>
          <Typography variant="h2">Our Team</Typography>
          <Typography variant="h5">
            We are a group of dedicated volunteers working together to create
            tools that help people navigate the conviction vacation process. We
            are a diverse crew, drawn together by a drive for social justice.
          </Typography>
        </Box>
        <Grid container justifyContent="center" spacing={3}>
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
    </>
  );
};
export default AboutPage;
