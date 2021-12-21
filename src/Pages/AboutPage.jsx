import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import TeamCard from "../Components/TeamCard";

const team = [1, 2, 3, 4, 5, 6];

const useStyles = makeStyles({
  actionItem: {
    backgroundColor: "#2D3047",
  },
  contactButton: {
    minWidth: 125,
    textTransform: "none",
    backgroundColor: "#C4C4C4",
  },
});

const AboutPage = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h1"> About CVP </Typography>
        <Typography variant="h2">The Problem</Typography>
        <Typography variant="h2">The Goal</Typography>
        <Typography variant="h3">Where Are We Now</Typography>
        <Typography variant="h2">Our Team</Typography>
        <Grid container justifyContent="center" maxWidth="xs" spacing={3}>
          {team.map((id) => (
            <Grid item key={id}>
              <TeamCard teamNumber={id} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box className={classes.actionItem} padding={5} marginTop="auto">
        <Grid container justifyContent="center" spacing={3}>
          <Grid item>
            {" "}
            <Typography variant="h3" style={{ color: "#EDEDED" }}>
              Get In Touch
            </Typography>
          </Grid>
          <Grid item>
            <Button className={classes.contactButton} variant="contained">
              <Typography variant="h5">Contact</Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default AboutPage;
