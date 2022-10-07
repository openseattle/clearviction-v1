import { useEffect } from "react";
import { trackPageview } from "../trackingUtils";
import city from "../Assets/city.svg";
import checklist from "../Assets/checklist.svg";
import checklistTwo from "../Assets/checklist1.svg";
import education from "../Assets/education.svg";
import lawyer from "../Assets/lawyer.svg";
import teamwork from "../Assets/teamwork.svg";
import calculator from "../Assets/calculator.svg";
import washington from "../Assets/washington.svg";
import { Box, Container, Grid, Typography } from "@mui/material";
import ContentSection from "../Components/ContentSection";
import HomeFAQAccordion from "../Subpages/Home/HomeFAQAccordion";
import { useHomeStyles } from "../Styles/useHomeStyles";
import { RedesignButtonPrimary } from "../ui-kit/RedesignButtonPrimary";
import { RedesignButtonSecondary } from "../ui-kit/RedesignButtonSecondary";
import ResponsiveJumpButtonGroup from "../Components/ResponsiveJumpButtonGroup";
import { useDocumentTitle } from "../Components/customHooks/useDocumentTitle";

const HomePage = () => {
    useEffect(() => trackPageview("Home"), []);

    const classes = useHomeStyles();
    const [documentTitle, setDocumentTitle] = useDocumentTitle("Home - ");

    return (
        <>
            <Box className={classes.darkBlueBackground}>
                <Container maxWidth="lg">
                    <Typography className={classes.headingStyle} variant="h1">
                        Washington's Vacation Eligibility Calculator
                    </Typography>
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <Typography className={classes.contentTextStyle} variant="subtitle1" component="h2">
                                If you have convictions in Washington, you can check your eligibility to vacate your
                                conviction for free in less than 10 minutes!
                            </Typography>
                            <Box paddingTop={12}>
                                <RedesignButtonPrimary 
                                    href="/calculator/landing-0"
                                    className={classes.calcHome}
                                >
                                    Access Calculator
                                </RedesignButtonPrimary>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <img src={washington} className={classes.iconStyle} alt=""></img>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Container className={classes.regularContainer} maxwidth="sm">
                <ResponsiveJumpButtonGroup
                    links={[
                        { url: "how-it-works", linkName: "How It Works" },
                        { url: "why-vacate", linkName: "why vacate" },
                        { url: "faq", linkName: "FAQ" },
                    ]}
                />
            </Container>

            <ContentSection sectionId="how-it-works" sectionSize="lg" sectionTitle={"How It Works"}>
                <Grid container>
                    <Grid item xs={12} sm={4}>
                        <img className={classes.iconStyle} src={teamwork} alt="" />
                        <Typography className={classes.contentTextStyle} variant="body2" align="center">
                            We break down the laws into understandable language.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <img className={classes.iconStyle} src={calculator} alt="" />
                        <Typography className={classes.contentTextStyle} variant="body2" align="center">
                            You answer a few simple yes/no questions.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <img className={classes.iconStyle} src={checklist} alt="" />
                        <Typography className={classes.contentTextStyle} variant="body2" align="center">
                            This helps determine your vacation eligibility in Washington.
                        </Typography>
                    </Grid>
                </Grid>
                <Box className={classes.buttonBoxStyle}>
                    <RedesignButtonPrimary href={"/get-started"}>Get Started</RedesignButtonPrimary>
                </Box>
            </ContentSection>

            <ContentSection sectionId={"why-vacate"} sectionSize={"lg"} sectionTitle={"Why Vacate?"}>
                <Typography className={classes.headingStyle} variant="subtitle1" align="center" component="h3">
                    A conviction vacation seals the offense from your record, and will give you more chance to access:
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <img className={classes.iconStyle} src={city} alt="" />
                        <Typography className={classes.headingStyle} variant="h5" align="center">
                            Housing
                        </Typography>
                        <Typography className={classes.contentTextStyle} variant="body1" align="center">
                            Make it easier to find and be approved for rent or purchasing a home.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <img className={classes.iconStyle} src={checklist} alt="" />
                        <Typography className={classes.headingStyle} variant="h5" align="center">
                            Employment
                        </Typography>
                        <Typography className={classes.contentTextStyle} variant="body1" align="center">
                            Reduce barriers to finding and obtaining employment.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <img className={classes.iconStyle} src={education} alt="" />
                        <Typography className={classes.headingStyle} variant="h5" align="center">
                            Education
                        </Typography>
                        <Typography variant="body1" align="center">
                            Apply for scholarships, programs, degrees or certificates.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <img className={classes.iconStyle} src={lawyer} alt="" />
                        <Typography className={classes.headingStyle} variant="h5" align="center">
                            Government Assistance
                        </Typography>
                        <Typography className={classes.contentTextStyle} variant="body1" align="center">
                            Receive government help and support.
                        </Typography>
                    </Grid>
                </Grid>
            </ContentSection>

            <Container id="faq" maxWidth="lg" className={classes.regularContainer}>
                <Typography variant="h3" align="center" className={classes.headingStyle}>
                    FAQ
                </Typography>
                <HomeFAQAccordion />
            </Container>
            <Box className={classes.lightBlueBackGround}>
                <Container maxWidth="lg">
                    <Grid container alignItems="center">
                        <Grid item xs={12} sm={6} md={8}>
                            <Typography variant="h3" className={classes.headingStyle}>
                                Help us improve the calculator by participating in research
                            </Typography>
                            <RedesignButtonSecondary href="https://docs.google.com/forms/d/1KXmPrwzHeE8_EEL88RFkjOFP4S1A52Ode1vV6SJijao/viewform?edit_requested=true">
                                Learn more
                            </RedesignButtonSecondary>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <img src={checklistTwo} className={classes.iconStyle} alt=""></img>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default HomePage;
