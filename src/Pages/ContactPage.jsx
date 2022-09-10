import { Container, Typography, Box, Grid } from "@material-ui/core";
import ContactForm from "../Components/ContactForm";
import { useContactStyles } from "../Styles/useContactStyles";
import new_message from "../Assets/new_message.svg";
import { useDocumentTitle } from "../Components/customHooks/useDocumentTitle";

const ContactPage = () => {
    const classes = useContactStyles();
    useDocumentTitle("Contact Us - ");

    return (
        <>
            <Box className={classes.regularContainer}>
                <Container maxWidth="lg">
                    <Typography className={classes.headingStyle} variant="h1">
                        Contact Us
                    </Typography>

                    <Box>
                        <Typography variant="h5" className={classes.contentTextStyle}>
                            Have questions? Send us a message and we’ll get back to you within 24 hours.
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <ContactForm />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <img src={new_message} className={classes.iconStyle} alt=""></img>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    );
};
export default ContactPage;
