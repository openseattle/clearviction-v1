import { useEffect } from "react";
import { trackPageview } from "../trackingUtils";
import FAQAccordion from "../Components/Accordion";
import housing from "../Assets/housing.svg";
import employment from "../Assets/employment.svg";
import education from "../Assets/education.svg";
import lawyer from "../Assets/lawyer.svg";
import teamwork from "../Assets/teamwork.svg";
import phone from "../Assets/phone.svg";
import "../CSS/HomePage.css";
import { useHomeStyles } from "../Styles/useHomeStyles";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

const HomePage = () => {
  useEffect(() => trackPageview("Home"), []);

  const classes = useHomeStyles();

  return (
    <>
      <Box className={classes.lightBlueBackGround}>
        <Container maxWidth="lg">
          <Typography className={classes.headingStyle} variant="h1">
            Vacation Eligibility Calculator
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography
                className={classes.contentTextStyle}
                variant="subtitle1"
              >
                Check your eligibility to vacate your conviction for free in
                less than 10 minutes!
              </Typography>
              <Box paddingTop={12}>
                <Button
                  href="/calculator/landing-0"
                  color="primary"
                  variant="contained"
                >
                  Check My Eligibility
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img
                src={phone}
                className={classes.iconStyle}
                alt="person using a calculator      "
              ></img>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container className={classes.regularContainer} maxwidth="sm">
        <ButtonGroup
          orientation={"horizontal"}
          color="primary"
          variant="text"
          fullWidth
        >
          <Button href="#how-it-works">How It Works</Button>
          <Button href="#faq">FAQs</Button>
          <Button href="#why-vacate">Why Vacate</Button>
        </ButtonGroup>
      </Container>

      <Container id="how-it-works" maxWidth="lg">
        <Paper className={classes.regularContainer}>
          <Typography
            className={classes.headingStyle}
            variant="h3"
            align="center"
          >
            How It Works
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <img
                className={classes.iconStyle}
                src={teamwork}
                alt={"Teamwork Icon"}
              />
              <Typography
                className={classes.contentTextStyle}
                variant="body2"
                align="center"
              >
                We break down the laws into understandable language.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <img
                className={classes.iconStyle}
                src={phone}
                alt={"Mobile Phone Icon"}
              />
              <Typography
                className={classes.contentTextStyle}
                variant="body2"
                align="center"
              >
                You answer a few simple yes/no questions.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <img
                className={classes.iconStyle}
                src={employment}
                alt={"Employment Icon"}
              />
              <Typography
                className={classes.contentTextStyle}
                variant="body2"
                align="center"
              >
                This helps determine your vacation eligibility.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      <Container className={classes.regularContainer} maxWidth="md" id="faq">
        <Paper>
          <Typography
            className={classes.headingStyle}
            variant="h3"
            align="center"
          >
            FAQs
          </Typography>
          <div id="accordion">
            <FAQAccordion />
          </div>
        </Paper>
      </Container>
      <Container maxWidth="lg" id="why-vacate" className={classes.regularContainer}>
        <Paper className={classes.regularContainer}>
        <Typography className={classes.headingStyle} variant="h3" align="center">
          Why Vacate?
        </Typography>
        <Typography className={classes.headingStyle} variant="subtitle1" align="center">
          A conviction vacation seals the offense from your record, and will
          give you more chance to access:
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={6} lg={3}>
            <img
              className={classes.iconStyle}
              src={housing}
              alt={"Housing Icon"}
            />
            <Typography
              className={classes.headingStyle}
              variant="h5"
              align="center"
            >
              Housing
            </Typography>
            <Typography
              className={classes.contentTextStyle}
              variant="body1"
              align="center"
            >
              Make it easier to find and be approved for rent or purchasing a
              home.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <img
              className={classes.iconStyle}
              src={employment}
              alt={"Employment Icon"}
            />
            <Typography
              className={classes.headingStyle}
              variant="h5"
              align="center"
            >
              Employment
            </Typography>
            <Typography
              className={classes.contentTextStyle}
              variant="body1"
              align="center"
            >
              Reduce barriers to finding and obtaining employment.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <img
              className={classes.iconStyle}
              src={education}
              alt={"Education Icon"}
            />
            <Typography
              className={classes.headingStyle}
              variant="h5"
              align="center"
            >
              Education
            </Typography>
            <Typography variant="body1" align="center">
              Apply for scholarships, programs, degrees or certificates.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <img
              className={classes.iconStyle}
              src={lawyer}
              alt={"Lawyer Icon"}
            />
            <Typography
              className={classes.headingStyle}
              variant="h5"
              align="center"
            >
              Government Assistance
            </Typography>
            <Typography
              className={classes.contentTextStyle}
              variant="body1"
              align="center"
            >
              Receive government help.
            </Typography>
          </Grid>
        </Grid>
        <Box display={"flex"} justifyContent={"center"}>
          <Button href="/why-vacate" color="primary" variant="contained">
            learn more
          </Button>
        </Box>
        </Paper>
      </Container>

      <Box className={classes.lightBlueBackGround}>
        <Container maxWidth="lg">
          <Typography
            className={classes.contentTextStyle}
            variant="h5"
            align="center"
          >
            Clearviction connects volunteers passionate about reducing barriers
            and making it easier for those with convictions in Washington State.
          </Typography>
          <br />
          <Typography
            className={classes.contentTextStyle}
            variant="h5"
            align="center"
          >
            We’re working together to create a tool to make navigating the
            conviction vacation process easier. Currently we are designing and
            building an eligibility calculator to help people determine if their
            conviction is eligible for vacation.
          </Typography>
          <Box display={"flex"} justifyContent={"center"}>
            <Button
              href="/get-involved/volunteer"
              color="primary"
              variant="contained"
            >
              join the team
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
