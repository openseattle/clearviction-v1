// import {
//     TwitterShareButton,
//     TwitterIcon,
//     LinkedinShareButton,
//     LinkedinIcon,
//     FacebookShareButton,
//     FacebookIcon,
// } from "react-share";

import { Container, Typography, Grid, Box } from "@mui/material";
// Components
import useDonationStyles from "../Styles/useDonationStyles";
import { useDocumentTitle } from "../Components/customHooks/useDocumentTitle";
import RedesignHeroPanel from "../Components/RedesignHeroPanel";
import { RedesignButtonPrimary } from "../ui-kit/RedesignButtonPrimary";
import { DonationForm } from "../Components/DonationForm";
// import DonationVideo from "../Components/DonationVideo";
import DonatePage from "./DonatePage";

const DonationLandingPage = () => {
    const classes = useDonationStyles();
    useDocumentTitle("Giving Tuesday - ");

    return (
        <>
            <RedesignHeroPanel className={classes.customHero} title="Donate">
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography variant="subtitle1" component="p">
                            Conviction vacation makes it easier for formerly incarcerated individuals to access housing
                            and employment, two things that are crucial for reducing the odds of re-incarceration.
                        </Typography>
                        <br />
                        <Typography>
                            With your donations, you will directly help break down barriers for people with convictions
                            in the state of Washington.
                        </Typography>
                        <br />
                        <RedesignButtonPrimary href="http://clearviction.org">
                            Learn More About Us
                        </RedesignButtonPrimary>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Container
                            sx={{
                                display: "flex",
                                position: "relative",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "400px",
                            }}
                        >
                            <DonationForm />
                        </Container>
                    </Grid>
                </Grid>
            </RedesignHeroPanel>
            <Box className={classes.contentContainer}>
                <Container>
                    {/* <Container className={classes.donationBoxInline}>
                        <DonationForm />
                    </Container>
                    <DonationMeter />

                    <Container className={classes.mobileDonate}>
                        <RedesignButtonPrimary href="https://donorbox.org/clearviction-givingtuesday">
                            donate
                        </RedesignButtonPrimary>
                    </Container> */}

                    {/* <Box className={classes.regularContainer}>
                        <Typography className={classes.headingStyle} variant="h2">
                            Why donate?
                        </Typography>
                        <DonationVideo />
                        <Typography className={classes.bodyContent}>
                            Hear directly from our founder Seamus Brugh on what donations mean for our project and
                            people it serves. When we reach $22,937, Seamus will get pied in the face!
                        </Typography>
                    </Box> */}

                    {/* <Container className={classes.boxShadow}>
                        <Box className={classes.shareContent}>
                            <Typography className={classes.headingStyle} variant="h4">
                                Your voice is a powerful tool. Share our fundraiser.
                            </Typography>
                            <Typography className={classes.subheadingStyle} variant="body1">
                                Help Clearviction expand its reach by sharing your donation activity with friends,
                                family, and more.
                            </Typography>
                        </Box>
                        <Box id="social" className={classes.socialIcons}>
                            <TwitterShareButton
                                title="This #GivingTuesday, join the global movement and please support Clearviction today."
                                url="http://www.clearviction.org/givingtuesday"
                                hashtags={[
                                    "Clearviction",
                                    "socialjustice",
                                    "CivicTech",
                                    "givingseason",
                                    "socialimpact",
                                    "givingtuesday2022",
                                ]}
                                source="http://www.clearviction.org/givingtuesday"
                            >
                                <TwitterIcon size={50} round bgStyle={{ fill: "#FFD200" }} />
                            </TwitterShareButton>
                            <FacebookShareButton
                                url="http://www.clearviction.org/givingtuesday"
                                hashtag="#clearviction"
                            >
                                <FacebookIcon size={50} round bgStyle={{ fill: "#FFD200" }} />
                            </FacebookShareButton>
                            <LinkedinShareButton url="http://www.clearviction.org/givingtuesday">
                                <LinkedinIcon size={50} round bgStyle={{ fill: "#FFD200" }} />
                            </LinkedinShareButton>
                        </Box>
                    </Container> */}

                    {/* <Divider className={classes.divider} /> */}

                    <Container>
                        <DonatePage title="How will your donations help Clearviction's goals?" md={6} />
                    </Container>

                    {/* <Divider className={classes.divider} /> */}

                    {/* <Container>
                        <Typography className={classes.headingStyle} variant="h2">
                            Meet the people committed to making a difference.
                        </Typography>
                        <Typography className={classes.bodyContent}>
                            Despite being a completely remote team, each Clearviction volunteer has committed their time
                            and expertise to the success of this project. No two of us have the same background, but we
                            are stronger when we pool our collective skills and knowledge.
                        </Typography>
                        <Box className={classes.centerImageBox}>
                            <Box
                                className={classes.centeredImage}
                                component="img"
                                alt=""
                                src="https://cvp-team-photos.s3.us-west-2.amazonaws.com/team-gif.gif"
                            />
                        </Box>
                    </Container> */}

                    {/* <Container className={classes.bodyContent}>
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
                    </Container> */}
                </Container>
                {/* <Container className={classes.donationBoxSticky}>
                    <DonationForm />
                </Container> */}
            </Box>
        </>
    );
};

export default DonationLandingPage;
