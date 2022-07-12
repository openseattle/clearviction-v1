import React from 'react';
import { Container, Typography, Box, Grid } from "@material-ui/core";
import { useContactStyles } from "../Styles/useContactStyles";
import sending_emails from "../Assets/sending_emails.svg";
import { useDocumentTitle } from '../Components/customHooks/useDocumentTitle';
import { RedesignButtonPrimary } from '../ui-kit/RedesignButtonPrimary';

const ContactSuccessPage = () => {
    const classes = useContactStyles();
    const [documentTitle, setDocumentTitle] = useDocumentTitle("Contact Success - ");

    return (
        <Box className={classes.regularContainer}>
            <Container maxWidth="lg">
                <Typography className={classes.successHeadingStyle} component="h1" variant="h2">
                    Thank You!
                </Typography>
                <Box>
                    <Grid container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={10}>
                        <Grid item >
                            <img src={sending_emails} className={classes.iconStyle} alt=""></img>
                        </Grid>
                        <Grid item >
                            <Typography variant="h5" className={classes.successContentTextStyle} >
                                Email sent successfully.
                            </Typography>
                            <Typography variant="h5" className={classes.successContentTextStyle} >
                                We'll be in touch soon.
                            </Typography>
                        </Grid>
                        <Grid item >
                            <RedesignButtonPrimary href="/">return to home</RedesignButtonPrimary>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default ContactSuccessPage