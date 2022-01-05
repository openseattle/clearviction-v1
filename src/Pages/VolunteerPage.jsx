import {
  Box,
  Grid,
  makeStyles,
  Typography,
  Container,
  List,
  ListItem,
  Card,
  CardContent,
  Paper,
} from "@material-ui/core";
import placeholder from "../Assets/placeholder_contact.png";
import Footer from "../Components/Footer";
import SecondaryButton from "../ui-kit/SecondaryButton";

const useStyles = makeStyles({
  textColor: {
    color: "white",
    marginBottom: 20,
  },
});

const roles = [
  "User Research",
  "Front-End Development",
  "UX Design",
  "Copywriting",
  "Back-End Development",
  "Marketing",
  "Subject Matter Expert",
  "Grant Writing",
];
const VolunteerPage = () => {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Typography variant="h1">Volunteer</Typography>
        <Typography variant="h5" className={classes.subtext}>
          subtext
        </Typography>
      </Box>
      <Box style={{ backgroundColor: "var(--dark-blue)" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={6} align="center">
            <Box style={{ width: "100%" }} component="img" src={placeholder} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box>
              <Typography className={classes.textColor} variant="h2">
                Why Volunteer?
              </Typography>
              <Typography className={classes.textColor} variant="body1">
                Conviction vacation improves the chances of successful reentry
                into society for formerly incarcerated individuals and reduces
                recidivism.
              </Typography>
              <Typography className={classes.textColor} variant="body1">
                By volunteering, you will help us reduce barriers and streamline
                the process of vacating eligible convictions in Washington state
                to make it easier for people to move forward.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={5}>
        <Grid item md={6}>
          <Box style={{ backgroundColor: "var(--light-blue)" }}>
            <Typography className={classes.textColor} variant="h2">
              Who can apply?
            </Typography>
            <ul style={{ listStyleType: "disc", color: "white" }}>
              <li>You can commit to 4 hours a week for at least 6 months</li>
              <li>
                You want to share your expertise in a field to help us make a
                better product
              </li>
              <li>
                You are self-motivated and are comfortable with remote work
              </li>
            </ul>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box elevation={0}>
            <Typography variant="h2">How can you apply?</Typography>
            <Typography variant="body1">
              We are currently using DemocracyLab to streamline the volunteering
              process, which you can find clicking the button below.
            </Typography>
            <Typography variant="body1">
              If you want further information and want to have a chat, don’t
              hesitate to contact us though our form.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box style={{ backgroundColor: "var(--dark-blue)" }}>
        <Typography variant="h2" style={{ color: "white" }}>
          Open Roles
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {roles.map((role) => (
            <Grid item key={role}>
              <Card style={{ width: 100, height: 100 }}>
                <CardContent>
                  <Typography variant="body1" align="center">
                    {role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box justifyContent="center" display="flex">
          <SecondaryButton text="Join Us" />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default VolunteerPage;
