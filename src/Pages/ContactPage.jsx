import { Container, Typography, Box, makeStyles } from "@material-ui/core";
import ContactForm from "../Components/ContactForm";
import HeroPanel from "../Components/HeroPanel";

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: 0,
    padding: "2.5em",
  },
  contactImage: { width: "100%" },
  subtext: {
    marginTop: "2em",
    marginBottom: "2em",
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
            <a href="mailto:convictionvacation@gmail.com">convictionvacation@gmail.com</a> and we’ll get
            back to you within 24 hours.
          </Typography>
          <ContactForm />
        </Box>
      </Container>
    </>
  );
};
export default ContactPage;
