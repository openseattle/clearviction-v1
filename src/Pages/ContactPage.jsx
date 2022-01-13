import { Container, Typography, Box, makeStyles } from "@material-ui/core";
import contactUs from "../Assets/contact-us.svg";
import HeroPanel from "../Components/HeroPanel";

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: 0,
    padding: "2.5em",
  },
  contactImage: { width: "100%" },
  subtext: {
    marginTop: "5em",
    marginBottom: "5em",
  },
}));

const ContactPage = () => {
  const pageTitle = "Contact";
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md">
        <HeroPanel title={pageTitle} />
        <Box>
          <Typography variant="h5" className={classes.subtext}>
            Have questions? Send us an email at{" "}
            <a href="mailto:contact@cvp.com">contact@cvp.com</a> and we’ll get
            back to you within 24 hours.
          </Typography>
        </Box>
        <Box
          className={classes.contactImage}
          component="img"
          src={contactUs}
          alt="Contact Us"
        />
      </Container>
    </>
  );
};
export default ContactPage;
