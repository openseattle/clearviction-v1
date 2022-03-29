import teamBuilding from "../Assets/team_building.svg";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import { useGetStartedStyles } from "../Styles/useGetStartedStyles";
import { RedesignButtonPrimary } from "../ui-kit/RedesignButtonPrimary";
import ResponsiveJumpButtonGroup from "../Components/ResponsiveJumpButtonGroup";
import ContentSection from "../Components/ContentSection";

const GetStartedPage = () => {
  const classes = useGetStartedStyles();

  return (
    <>
      <Box className={classes.darkBlueBackground}>
        <Container maxWidth="lg">
          <Typography className={classes.headingStyle} variant="h1">
            Get Started
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography
                className={classes.contentTextStyle}
                variant="subtitle1"
              >
                If you have convictions in Washington you can check your
                eligibility to vacate your conviction for free in less than 10
                minutes!
              </Typography>
              <Box paddingTop={12} className={classes.buttonBoxStyle}>
                <RedesignButtonPrimary href={"#"}>
                  Get Started
                </RedesignButtonPrimary>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img
                src={teamBuilding}
                className={classes.iconStyle}
                alt="two people working together on a puzzle"
              ></img>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container className={classes.regularContainer} maxwidth="sm">
        <ResponsiveJumpButtonGroup
          links={[
            { url: "documents", linkName: "Documents" },
            { url: "Eligibility", linkName: "Eligibility" },
            { url: "Court-Filing", linkName: "Court Filing" },
            { url: "Hearing", linkName: "Hearing" },
          ]}
        />
      </Container>

      <Box className={classes.regularContainer}>
        <Container maxWidth="md" className={classes.regularContainer}>
          <Typography
            className={classes.colorfulHeadingStyle}
            variant="h2"
            align="left"
          >
            Step 1: Documents
          </Typography>

          <Typography
            className={classes.contentTextStyle}
            variant="body2"
            align="left"
          >
            Gathering documents is the first step in the process. This includes
            any forms or records that pertain to your conviction. Please gather
            all relevant court forms and get a copy of your Criminal History
            Record Information (CHRI).
          </Typography>
        </Container>
        <Container className={classes.regularContainer}>
          <Typography
            className={classes.headingStyle}
            variant="h3"
            align="left"
          >
            Court forms
          </Typography>
        </Container>
        <Container className={classes.regularContainer}>
          <Typography
            className={classes.headingStyle}
            variant="h3"
            align="left"
          >
            Criminal History Record Information (CHRI)
          </Typography>
        </Container>
      </Box>

      <Box className={classes.regularContainer}>
        <Container maxWidth="md" className={classes.regularContainer}>
          <Typography
            className={classes.colorfulHeadingStyle}
            variant="h2"
            align="left"
          >
            Step 2: Eligibility
          </Typography>

          <Typography
            className={classes.contentTextStyle}
            variant="body2"
            align="left"
          >
            Once you have your records and forms gathered, use our eligibilty
            calculator to determine whether you are eligible to vacate your
            misdemeanor conviction. It is expected to take 10-30 minutes.
          </Typography>
        </Container>
      </Box>

      <Box className={classes.regularContainer}>
        <Container maxWidth="md" className={classes.regularContainer}>
          <Typography
            className={classes.colorfulHeadingStyle}
            variant="h2"
            align="left"
          >
            Step 3: File with Court
          </Typography>

          <Typography
            className={classes.contentTextStyle}
            variant="body2"
            align="left"
          >
            Next, submit a request to have your conviction vacated (refer to
            court directory). Please note that the request to vacate is up to
            the discretion of the judge and may be denied for a variety of
            reasons.
          </Typography>
        </Container>
      </Box>

      <Box className={classes.regularContainer}>
        <Container maxWidth="md" className={classes.regularContainer}>
          <Typography
            className={classes.colorfulHeadingStyle}
            variant="h2"
            align="left"
          >
            Step 4: Court Hearing
          </Typography>

          <Typography
            className={classes.contentTextStyle}
            variant="body2"
            align="left"
          >
            Last but not least, schedule a hearing with a judge! Below are
            resources for financial & legal aid.
          </Typography>
        </Container>
        <Container className={classes.regularContainer}>
          <Typography
            className={classes.headingStyle}
            variant="h3"
            align="left"
          >
            Legal aid
          </Typography>
        </Container>
        <Container className={classes.regularContainer}>
          <Typography
            className={classes.headingStyle}
            variant="h3"
            align="left"
          >
            Financial aid
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default GetStartedPage;
