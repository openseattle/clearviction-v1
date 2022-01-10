import {
  Box,
  Grid,
  makeStyles,
  Typography,
  Container,
} from "@material-ui/core";
import placeholder from "../Assets/placeholder_contact.png";
import HeroPanel from "../Components/HeroPanel";
import RolesDisplay from "../Components/RolesDisplay";
import SecondaryButton from "../ui-kit/SecondaryButton";
import BulletedListMui from "../ui-kit/BulletedListMui";

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
      <Container maxWidth="lg">
        <HeroPanel title="Volunteer" />
        <Box style={{ backgroundColor: "var(--dark-blue)" }}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item md={6}>
              <Box justifyContent="center" display="flex" >
                <Box
                  component="img"
                  src={placeholder}
                  style={{
                    maxHeight: "250px",
                    maxWidth: "100%",
                    padding: "2rem"
                  }}
                />
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box justifyContent="center" display="flex">
                <Box style={{ maxWidth: "500px", margin: "2rem" }}>
                  <Typography className={classes.textColor} variant="h2">
                    Why Volunteer?
                  </Typography>
                  <Typography className={classes.textColor} variant="body1">
                    Conviction vacation improves the chances of successful
                    reentry into society for formerly incarcerated individuals
                    and reduces recidivism.
                  </Typography>
                  <Typography className={classes.textColor} variant="body1">
                    By volunteering, you will help us reduce barriers and
                    streamline the process of vacating eligible convictions in
                    Washington state to make it easier for people to move
                    forward.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: "0rem" }}
        >
          <Grid
            item
            md={6}
            style={{
              backgroundColor: "var(--light-blue)",
              height: "250px",
              justifyContent: "center",
              display: "flex",
              width: "100%"
            }}
          >
            <Box style={{ maxWidth: "500px", margin: "2rem" }}>
              <Typography variant="h2" className={classes.textColor}>
                Who can apply?
              </Typography>
              <BulletedListMui>
                <li>You can commit to 4 hours a week for at least 6 months</li>
                <li>
                  You want to share your expertise in a field to help us make a
                  better product
                </li>
                <li>
                  You are self-motivated and are comfortable with remote work
                </li>
              </BulletedListMui>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            style={{
              backgroundColor: "white",
              justifyContent: "center",
              height: "250px",
              display: "flex",
              width: "100%"
            }}
          >
            <Box style={{ maxWidth: "500px", margin: "2rem" }}>
              <Typography className={classes.textAltColor} variant="h2">
                How can you apply?
              </Typography>
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
          </Grid>
        </Grid>
        <Box style={{ backgroundColor: "var(--dark-blue)" }}>
          <Typography
            className={classes.textColor}
            style={{ paddingTop: "4rem", marginBottom: "4rem" }}
            variant="h2"
          >
            Open Roles
          </Typography>
          <RolesDisplay />
          <Box justifyContent="center" display="flex" style={{padding: "4rem"}}>
            <SecondaryButton text="Join Us" />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default VolunteerPage;
