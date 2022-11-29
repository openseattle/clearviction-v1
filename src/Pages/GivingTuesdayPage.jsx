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
            <RedesignHeroPanel className={classes.customHero} title="Giving Tuesday">
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
                <Container height="5400px" position="relative">
                    <Container className={classes.donationBoxInline}>
                        <DonationForm />
                    </Container>
                    <DonationMeter />

                    <Container className={classes.mobileDonate}>
                        <RedesignButtonPrimary href="https://donorbox.org/clearviction-givingtuesday">
                            donate
                        </RedesignButtonPrimary>
                    </Container>

                    <Box className={classes.regularContainer}>
                        <Typography className={classes.headingStyle} variant="h2">
                            Why donate?
                        </Typography>
                        <DonationVideo />
                        <Typography className={classes.bodyContent}>
                            Hear directly from our founder Seamus Brugh on what donations mean for our project and
                            people it serves. When we reach $22,937, Seamus will get pied in the face!
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
                            <SocialIcon
                                className={classes.iconItem}
                                bgColor="#FFD200"
                                url="https://www.facebook.com/people/Clearviction/100083375737419"
                            />
                            <SocialIcon
                                className={classes.iconItem}
                                url="https://www.linkedin.com/company/clearviction"
                                bgColor="#FFD200"
                            />
                        </Box>
                    </Container>

                    <Divider className={classes.divider} />

                    <Container>
                        <DonatePage title="How will your donations help Clearviction's goals?" md={6} />
                    </Container>

                    <Divider className={classes.divider} />

                    <Container>
                        <Typography className={classes.headingStyle} variant="h2">
                            Meet the people commited to making a difference.
                        </Typography>
                        <Typography className={classes.bodyContent}>
                            Despite being a completely remote team, each Clearviction volunteer has committed their time
                            and expertise to the success of this project. No two of us have the same background, but we
                            are stronger when we pool our collective skills and knowledge.
                        </Typography>
                        <Typography className={classes.bodyContent}>
                            We are committed to improving the future for those wishing to vacate their convictions
                            because we know people are more than just the notations on their record.
                        </Typography>
                        <Box className={classes.centerImageBox}>
                            <Box
                                className={classes.centeredImage}
                                component="img"
                                alt=""
                                src="https://cvp-team-photos.s3.us-west-2.amazonaws.com/team-gif.gif"
                            />
                        </Box>
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
                    <Container className={classes.GTButtonContainerStyle}>
                        <RedesignButtonPrimary href="get-involved" aria-label="">
                            learn more
                        </RedesignButtonPrimary>
                    </Container>
                </Container>
                <Container className={classes.donationBoxSticky}>
                    <DonationForm />
                </Container>
            </Box>
        </>
    );
};

export default GivingTuesdayPage;
