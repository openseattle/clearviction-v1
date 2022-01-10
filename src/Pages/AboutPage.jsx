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
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    borderRadius: 0,
  },
  infoLight: {
    backgroundColor: theme.palette.secondary.light,
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
              <CardContent>
                <Typography variant="h5">Content</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <Card className={classes.infoLight} variant="outlined">
              <CardContent>
                <Typography variant="h5">Content</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box className={classes.ourTeam}>
          <Typography style={{ marginBottom: "1rem" }} variant="h2">
            Our Team
          </Typography>
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
