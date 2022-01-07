import {
  Box,
  Grid,
  makeStyles,
  Typography,
  Card,
  CardContent,
  Container,
  CardMedia,
} from "@material-ui/core";
import placeholder from "../Assets/placeholder_contact.png";
import HeroPanel from "../Components/HeroPanel";
import InfoCard from "../Components/InfoCard";
import RolesDisplay from "../Components/RolesDisplay";
import SecondaryButton from "../ui-kit/SecondaryButton";

const useStyles = makeStyles({
  textColor: {
    color: "white",
    marginBottom: 20,
  },
  textAltColor: {
    color: "black",
    marginBottom: 20,
  },
});

const VolunteerPage = () => {
  const classes = useStyles();
  return (
    <>
      <HeroPanel title="Volunteer" />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: "var(--dark-blue)" }}
      >
        <Grid item md={6}>
          <Box justifyContent="center" display="flex">
            <Box
              component="img"
              src={placeholder}
              style={{ maxHeight: "250px", maxWidth: "500px", margin: "2em" }}
            />
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box justifyContent="center" display="flex">
            <Box style={{ maxWidth: "500px", margin: "2em" }}>
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
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "0em" }}
      >
        <Grid item md={6}>
          <Box
            justifyContent="center"
            display="flex"
            style={{ backgroundColor: "var(--light-blue)" }}
          >
            <Box style={{ maxWidth: "500px", margin: "2em" }}>
              <Typography variant="h2" className={classes.textColor}>
                Who can apply?
              </Typography>
              <Typography className={classes.textColor}>
                <ul
                  style={{
                    listStyleType: "disc",
                  }}
                >
                  <li>
                    You can commit to 4 hours a week for at least 6 months
                  </li>
                  <li>
                    You want to share your expertise in a field to help us make
                    a better product
                  </li>
                  <li>
                    You are self-motivated and are comfortable with remote work
                  </li>
                </ul>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box
            justifyContent="center"
            display="flex"
            style={{ backgroundColor: "white" }}
          >
            <Box style={{ maxWidth: "500px", margin: "2em" }}>
              <Typography variant="h2">How can you apply?</Typography>
              <Typography variant="body1">
                We are currently using DemocracyLab to streamline the
                volunteering process, which you can find clicking the button
                below.
              </Typography>
              <Typography variant="body1">
                If you want further information and want to have a chat, don’t
                hesitate to contact us though our form.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box style={{ backgroundColor: "var(--dark-blue)" }}>
        <Typography className={classes.textColor} variant="h2">
          Open Roles
        </Typography>
        <RolesDisplay />
        <Box justifyContent="center" display="flex">
          <SecondaryButton text="Join Us" />
        </Box>
      </Box>
    </>
  );
};

export default VolunteerPage;
