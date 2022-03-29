import teamBuilding from "../Assets/team_building.svg";
import {
  Box,
  Container,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { useGetStartedStyles } from "../Styles/useGetStartedStyles";
import { RedesignButtonPrimary } from "../ui-kit/RedesignButtonPrimary";
import ResponsiveJumpButtonGroup from "../Components/ResponsiveJumpButtonGroup";
import ContentSection from "../Components/ContentSection";
import Icon from "@material-ui/icons";

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
            { url: "eligibility", linkName: "Eligibility" },
            { url: "court-filing", linkName: "Court Filing" },
            { url: "hearing", linkName: "Hearing" },
          ]}
        />
      </Container>

      <Container
        maxWidth="lg"
        className={classes.regularContainer}
        id="documents"
      >
        <Box className={classes.regularContainer}>
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
        </Box>
        <Box>
          <Typography
            className={classes.headingStyle}
            variant="h3"
            align="left"
          >
            Court forms
          </Typography>
          <Grid container spacing={4} columns={{ xs: 4 }}>
            <Grid item xs={2} sm={4} md={4}>
              <Accordion>
                <AccordionSummary
                  expandIcon={"˅"}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>(Gross) Misdemeanor Convictions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Vacation packet from Northwest Justice Project with details
                    about the eligibility to vacate (p. 2-4) and the needed
                    court forms (p. 5-13).
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Accordion>
                <AccordionSummary
                  expandIcon={"˅"}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Marijuana Misdemeanors</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Vacation packet from Northwest Justice Project with the
                    steps to vacate (p. 2-6), all necessary court documents (p.
                    8-13) and a sample letter for WSP to seal your record (p.
                    7).
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Accordion>
                <AccordionSummary
                  expandIcon={"˅"}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Prostitution Convictions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    If you were a victim of trafficking, you can use this
                    vacation packet from Northwest Justice Project with info on
                    the eligibility to vacate (p. 1-3), steps to take (p. 4-8),
                    court forms (p. 10-18) and a sample letter for WSP (p. 9).
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Accordion>
                <AccordionSummary
                  expandIcon={"˅"}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Non-Violent Class B or C Felony</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Vacation packet from Northwest Justice Project including an
                    overview of the eligibility to vacate (p. 3-5), steps to
                    vacate (p. 7-12), all necessary court documents (p. 13-23)
                    and a sample letter to WSP (p.24). To vacate a felony
                    conviction, you will also need a Certificate of Discharge.
                    If the court has not issued the Certificate of Discharge
                    yet, you must file for a certificate before you can vacate
                    the felony. This packet will assist you to obtain a
                    Certificate of Discharge in Washington State
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Accordion>
                <AccordionSummary
                  expandIcon={"˅"}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Treaty to Indian Fishing Convictions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Vacation packet from Northwest Justice Project including an
                    overview of the eligibility to vacate (p.1-2), steps to take
                    (p. 3-7), all court forms (p. 8-16), and a sample letter for
                    WSP (p. 17).
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Accordion>
                <AccordionSummary
                  expandIcon={"˅"}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Juvenile Conviction Records</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Detailed packet from TeamChild containing all court
                    documents (p. 30-40), sample letters to WSP and JRA (p.
                    41-42), and the specific practices per county (p. 19-27).
                    The packet from King County Superior Court briefly describes
                    the procedure to vacate and contains all necessary court
                    documents (p. 11-17) and a sample of how to fill in the
                    court documents (p. 4-9).
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Typography
            className={classes.headingStyle}
            variant="h3"
            align="left"
          >
            Criminal History Record Information (CHRI)
          </Typography>
        </Box>
      </Container>

      <Container
        maxWidth="lg"
        className={classes.regularContainer}
        id="eligibility"
      >
        <Box className={classes.regularContainer}>
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
        </Box>
      </Container>

      <Container
        maxWidth="lg"
        className={classes.regularContainer}
        id="court-filing"
      >
        <Box className={classes.regularContainer}>
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
        </Box>
      </Container>

      <Container
        maxWidth="lg"
        className={classes.regularContainer}
        id="hearing"
      >
        <Box className={classes.regularContainer}>
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
        </Box>
        <Box className={classes.regularContainer}>
          <Typography
            className={classes.headingStyle}
            variant="h3"
            align="left"
          >
            Legal aid
          </Typography>
        </Box>
        <Box>
          <Typography
            className={classes.headingStyle}
            variant="h3"
            align="left"
          >
            Financial aid
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default GetStartedPage;
