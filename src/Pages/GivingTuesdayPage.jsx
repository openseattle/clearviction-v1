import {
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    FacebookShareButton,
    FacebookIcon,
} from "react-share";

import { useEffect } from "react";

import { Container, Typography, Grid, Box, Divider } from "@mui/material";
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

    // useEffect(() => {
    //     // meta tags needed for linkedin share to display all info.
    //     document.head.innerHTML += `
    //     <meta id="og-title" property="og:title" content="Clearviction Test title" />
    //     <meta id="og-image" property="og:image" content="/home/glenn/projects/clearviction/public/apple-touch-icon.png" />
    //     <meta id="og-description" property="og:description" content="Description that will show in the preview" />
    //     `;
    //     return function cleanup() {
    //         document.getElementById("og-title").remove();
    //         document.getElementById("og-image").remove();
    //         document.getElementById("og-description").remove();
    //     };
    // }, []);

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
                <Container>
                    <Container className={classes.donationBoxInline}>
                        <DonationForm />
                    </Container>
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
                        <Box id="social" className={classes.socialIcons}>
                            <TwitterShareButton
                                title="Sample Title Giving Tuesday TITLE"
                                url="http://clearviction.org/givingtuesday"
                                hashtags={["givingtuesday", "clearviction"]}
                                related={["Giving Tuesday Twitter Account?"]}
                                source="http//clearviction.org"
                            >
                                <TwitterIcon size={50} round bgStyle={{ fill: "#FFD200" }} />
                            </TwitterShareButton>
                            <FacebookShareButton url="http://clearviction.org/givingtuesday" hashtag="#givingtuesday">
                                <FacebookIcon size={50} round bgStyle={{ fill: "#FFD200" }} />
                            </FacebookShareButton>
                            <LinkedinShareButton
                                url="http://clearviction.org"
                                title="Clearviction Test title"
                                summary="Clearviction test summary"
                                source="http://clearviction.org"
                            >
                                <LinkedinIcon size={50} round bgStyle={{ fill: "#FFD200" }} />
                            </LinkedinShareButton>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Typography>
                        <Box className={classes.centerImageBox}>
                            <Box
                                className={classes.centeredImage}
                                component="img"
                                alt=""
                                src="https://via.placeholder.com/500x300)"
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
