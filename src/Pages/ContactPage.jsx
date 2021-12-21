import React from "react";

import {
  Container,
  Typography,
  Box,
  Paper,
  makeStyles,
} from "@material-ui/core";
import Footer from "../Components/Footer";

const useStyles = makeStyles({
  bg: {
    backgroundColor: "var(--light-gray)",
  },
});

const ContactPage = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h1" align="center">
          Contact Us
        </Typography>
        <Paper className={classes.bg}>
          <Box padding={5} margin={5}>
            <Typography variant="h5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <br />
            <Typography variant="h5">
              <a href="mailto:contact@cvp.org"> Email Us</a>
            </Typography>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};
export default ContactPage;
