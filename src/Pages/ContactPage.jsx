import { Container, Typography, Box, makeStyles } from "@material-ui/core";
import Footer from "../Components/Footer";
import placeholder from "../Assets/placeholder_contact.png";

const useStyles = makeStyles({
  bg: {
    backgroundColor: "var(--light-gray)",
    borderRadius: 0,
    padding: "2.5em",
  },
  bigImage: { width: "100%" },
  subtext: {
    marginTop: "5em",
    marginBottom: "5em",
  },
});

const ContactPage = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md">
        <Box>
          <Typography variant="h1">Contact Us</Typography>
          <Typography variant="h5" className={classes.subtext}>
            Have questions? Send us an email at{" "}
            <a href="mailto:contact@cvp.com">contact@cvp.com</a> and we’ll get
            back to you within 24 hours.
          </Typography>
        </Box>

        <Box
          className={classes.bigImage}
          component="img"
          src={placeholder}
          alt="big interesting image"
        />
      </Container>

      <Footer />
    </>
  );
};
export default ContactPage;
