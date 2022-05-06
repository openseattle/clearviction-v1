import { Container, Grid, Typography, Box, Divider } from "@material-ui/core";
import TeamCard from "../Components/TeamCard";
import { HourglassEmpty, LocalAtmOutlined, PanToolOutlined } from "@material-ui/icons";

import map from "../Assets/map.svg";
import checklist1 from "../Assets/checklist1.svg";

import { useAboutStyles } from "../Styles/useAboutStyles";
import ResponsiveJumpButtonGroup from "../Components/ResponsiveJumpButtonGroup";

import team from "../data/teamData";
import { RedesignButtonPrimary } from "../ui-kit/RedesignButtonPrimary";

const AboutPage = () => {
    const classes = useAboutStyles();

    return (
        <>
            <Box className={classes.darkBlueBackground}>
                <Container maxWidth="lg">
                    <Grid container className={classes.gridStyle}>
                        <Grid item sm={12} md={6} className={classes.gridItemStyle}>
                            <Typography className={classes.headingStyle} variant="h1">
                                About Us
                            </Typography>
                            <Typography className={classes.contentTextStyle} variant="subtitle1" component="p">
                                We are a civic-tech open-source project working to make the conviction vacation process
                                easier and more staightforward, starting with an eligibility calculator.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <img
                                src={map}
                                className={classes.iconStyle + " " + classes.centerText}
                                alt="person using a calculator"
                            ></img>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Container className={classes.regularContainer} maxwidth="xs">
                <ResponsiveJumpButtonGroup
                    links={[
                        { url: "our-story", linkName: "Our Story" },
                        { url: "our-team", linkName: "Our Team" },
                    ]}
                />
            </Container>

            <Box>
                <Container maxWidth="md" className={classes.regularContainer} id="our-story">
                    <Typography variant="h2" className={classes.headingStyle}>
                        Our Story
                    </Typography>
                    <Typography variant="h3" className={classes.subheadingStyle}>
                        Those with a criminal record face significant barriers to daily life after completing their
                        prison terms
                    </Typography>

                    <Box className={classes.boxShadow}>
                        <Typography variant="subtitle1" className={classes.contentTextStyle}>
                            <a
                                href="https://app.leg.wa.gov/billsummary?BillNumber=2890&Year=2017"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="New Hope Act"
                                className={classes.linkTextStyle}
                            >
                                Washington State's New Hope Act
                            </a>
                            makes it easier for people with past criminal records to have their convictions vacated. Even
                            then, the process of vacating a conviction is very convoluted, making it difficult for most
                            people to navigate:
                        </Typography>

                        <Grid container className={classes.gridStyle + " " + classes.centerText}>
                            <Grid item md={4} className={classes.gridItemStyle}>
                                <HourglassEmpty className={classes.theProblemIcon} />
                                <Typography variant="subtitle1">
                                    It has a number of steps that require time and know-how, increasing the barrier of
                                    entry for applicants
                                </Typography>
                            </Grid>
                            <Grid item md={4} className={classes.gridItemStyle}>
                                <LocalAtmOutlined className={classes.theProblemIcon} />
                                <Typography variant="subtitle1">
                                    While hiring an attorney can help simplify the process, it's unaffordable for most
                                </Typography>
                            </Grid>
                            <Grid item md={4} className={classes.gridItemStyle}>
                                <PanToolOutlined className={classes.theProblemIcon} />
                                <Typography variant="subtitle1">
                                    Volunteer services are available, but they are often inaccessible and don't cover
                                    all steps
                                </Typography>
                            </Grid>
                        </Grid>
                        <Box className={classes.buttonBoxStyle}>
                            <RedesignButtonPrimary href="/get-started" aria-label="to Get Started">Learn More</RedesignButtonPrimary>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Container>
                <Box style={{ width: "90%", margin: "0 auto" }}>
                    <Grid container className={classes.gridStyle}>
                        <Grid item sm={12} md={6} className={classes.gridItemStyle}>
                            <img src={checklist1} className={classes.iconStyle} alt="person using a calculator"></img>
                        </Grid>
                        <Grid item sm={12} md={6} className={classes.gridItemStyle}>
                            <Typography variant="h4" className={classes.headingSpacing}>
                                Our mission is to benefit individuals with criminal convictions and decrease life-long
                                collateral consequences.
                            </Typography>
                            <Typography variant="subtitle1" className={classes.spaceAfter} component="p">
                                To support this mission, we first focused on creating a&nbsp;
                                <a
                                    href="https://www.clearviction.org/calculator/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Conviction Eligibility Calculator"
                                    className={classes.linkTextStyle}
                                >
                                    Conviction Eligibility Calculator
                                </a>
                                to help people determine if they are eligible to vacate their conviction.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Divider className={classes.divider} />

            <Box className={classes.regularContainer + " " + classes.teamContainer} id="our-team">
                <Container maxWidth="lg">
                    <Typography className={classes.headingStyle} variant="h2">
                        Our Team
                    </Typography>
                    <Grid container>
                        {team.map((member, idx) => (
                            <Grid className={classes.cardGridStyle} key={idx} item xs={12} sm={6} md={4} lg={3}>
                                <Box display="flex" justifyContent="center">
                                    <TeamCard member={member} />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};
export default AboutPage;
