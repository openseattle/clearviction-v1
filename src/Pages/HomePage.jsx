import { useEffect } from "react";
import { trackPageview } from "../trackingUtils";
import city from "../Assets/city.svg";
import checklist from "../Assets/checklist.svg";
import education from "../Assets/education.svg";
import lawyer from "../Assets/lawyer.svg";
import teamwork from "../Assets/teamwork.svg";
import calculator from "../Assets/calculator.svg";
import "../CSS/HomePage.css";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import ContentSection from "../Components/ContentSection";
import { RedesignButtonPrimary } from "../ui-kit/RedesignButtonPrimary";
import { RedesignButtonSecondary } from "../ui-kit/RedesignButtonSecondary";
import HomeFAQAccordion from "../Subpages/Home/HomeFAQAccordion";
import { useHomeStyles } from "../Styles/useHomeStyles";

const HomePage = () => {
  useEffect(() => trackPageview("Home"), []);

  const classes = useHomeStyles();

  return (
    <>
      <Box className={classes.darkBlueBackground}>
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
                <RedesignButtonPrimary href="/calculator/landing-0">
                  Check Eligibility
                </RedesignButtonPrimary>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img
                src={calculator}
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
          <Button href="#why-vacate">Why Vacate</Button>
          <Button href="#faq">FAQ</Button>
        </ButtonGroup>
      </Container>

      <ContentSection
        sectionId="how-it-works"
        sectionSize="lg"
        sectionTitle={"How It Works"}
      >
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
              src={calculator}
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
              src={checklist}
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
      </ContentSection>

      <ContentSection
        sectionId={"why-vacate"}
        sectionSize={"lg"}
        sectionTitle={"Why Vacate?"}
      >
        <Typography
          className={classes.headingStyle}
          variant="subtitle1"
          align="center"
        >
          A conviction vacation seals the offense from your record, and will
          give you more chance to access:
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={6} lg={3}>
            <img className={classes.iconStyle} src={city} alt={"city Icon"} />
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
              src={checklist}
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
              Reduce barriers to finding and obtaining checklist.
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
        <Box className={classes.buttonBoxStyle}>
          <RedesignButtonSecondary href="/why-vacate">
            learn more
          </RedesignButtonSecondary>
        </Box>
      </ContentSection>

      <Container id="faq" maxWidth="lg" className={classes.regularContainer}>
        <Typography
          variant="h3"
          align="center"
          className={classes.headingStyle}
        >
          FAQ
        </Typography>
        <HomeFAQAccordion />
      </Container>
    </>
  );
};

export default HomePage;
