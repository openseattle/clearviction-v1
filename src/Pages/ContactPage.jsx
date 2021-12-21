import React from "react";

import {
  Container,
  Typography,
  Box,
  Paper,
  makeStyles,
} from "@material-ui/core";
import PrimaryButton from "../ui-kit/Button";
import Footer from "../Components/Footer";
import SecondaryButton from "../ui-kit/SecondaryButton";

const useStyles = makeStyles({
  bg: {
    backgroundColor: "#2D3047",
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
        <Paper style={{ backgroundColor: "lightgrey" }}>
          <Box padding={5}>
            <Typography variant="h4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Typography variant="h3">
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
