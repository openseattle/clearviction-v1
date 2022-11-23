import { Container, Typography, Grid, Box, Divider } from "@mui/material";
import { SocialIcon } from "react-social-icons";

// Components
import useDonationStyles from "../Styles/useDonationStyles";
import { useDocumentTitle } from "../Components/customHooks/useDocumentTitle";
import RedesignHeroPanel from "../Components/RedesignHeroPanel";
import { RedesignButtonPrimary } from "../ui-kit/RedesignButtonPrimary";
import { DonationMeter, DonationForm } from "../Components/DonationForm";
import DonationVideo from "../Components/DonationVideo";
import DonatePage from "./DonatePage";
// import { AddBoxSharp } from "@mui/icons-material";

const GivingTuesdayPage = () => {
    const classes = useDonationStyles();
    useDocumentTitle("Giving Tuesday - ");

    return (
        <>
            <RedesignHeroPanel title="Giving Tuesday">
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography variant="subtitle1" component="p">
                            Clearviction is an open-sourced project whose goal is to help people easily navigate the
                            legal system in Washington State.
                        </Typography>
                    </Grid>
                </Grid>
            </RedesignHeroPanel>
            <Box className={classes.contentContainer}>
                <Container>
                    <DonationMeter />

                    <Box className={classes.regularContainer}>
                        <Typography className={classes.headingStyle} variant="h2">
                            Why donate?
                        </Typography>
                        <DonationVideo />
                        <Typography className={classes.bodyContent}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Typography>
                    </Box>

                    <Container className={classes.boxShadow}>
                        <Box className={classes.shareContent}>
                            <Typography className={classes.headingStyle} variant="h4">
                                Your voice is a powerful tool. Share our fundraiser.
                            </Typography>
                            <Typography className={classes.subheadingStyle} variant="body1">
                                Help Clearviction expand its reach by sharing your donation activity with friends,
                                family, and more.
                            </Typography>
                        </Box>
                        <Box className={classes.socialIcons}>
                            <SocialIcon bgColor="#FFD200" url="https://twitter.com/Clearviction" />
                            <SocialIcon url="https://instagram.com" bgColor="#FFD200" />
                            <SocialIcon url="https://www.linkedin.com/company/clearviction" bgColor="#FFD200" />
                        </Box>
                    </Container>

                    <Divider className={classes.divider} />

                    <Container>
                        <DonatePage title="How will your donations help Clearviction's goals?" />
                    </Container>

                    <Divider className={classes.divider} />

                    <Container>
                        <Typography className={classes.headingStyle} variant="h2">
                            Meet the people commited to making a difference.
                        </Typography>
                        <Typography className={classes.bodyContent}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Typography>

                        <img src="https://via.placeholder.com/500x300)" alt="" />
                    </Container>

                    <Container className={classes.bodyContent}>
                        <Typography className={classes.headingStyle} variant="h4">
                            Help us break down barriers by joining our team.
                        </Typography>
                        <Typography className={classes.subheadingStyle} variant="body1">
                            When you share your expertise with us, we get closer to reducing barriers and timelines for
                            individuals looking to vacate their convictions in Washington State.
                        </Typography>
                    </Container>

                    <RedesignButtonPrimary href="get-involved" aria-label="">
                        learn more
                    </RedesignButtonPrimary>
                </Container>
                <Container className={classes.donationBox}>
                    <DonationForm />
                </Container>
            </Box>
        </>
    );
};

export default GivingTuesdayPage;
