import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import PrimaryButton from "../ui-kit/Button";
import Footer from "../Components/Footer";

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
        <PrimaryButton text={"Email"} />

        <Box padding={5} margin={5}></Box>
        <Footer />
      </Container>
    </>
  );
};
export default ContactPage;
