import teamBuilding from "../Assets/team_building.svg";
import human from "../Assets/human.svg";
import { AccountBalance, DateRange, History } from "@material-ui/icons";

import { Box, Container, Grid, Typography } from "@material-ui/core";
import { useGetStartedStyles } from "../Styles/useGetStartedStyles";
import { RedesignButtonPrimary } from "../ui-kit/RedesignButtonPrimary";
import ResponsiveJumpButtonGroup from "../Components/ResponsiveJumpButtonGroup";
import ContentSection from "../Components/ContentSection";
import DropdownCard from "../Components/DropdownCard";

const GetStartedPage = () => {
  const classes = useGetStartedStyles();
  const dropdownCardData = {
    courtForms1: {
      summary: "(Gross) Misdemeanor Convictions",
      details: (
        <Typography className={classes.contentTextStyle}>
          comming soon
        </Typography>
      ),
    },
    courtForms2: {
      summary: "Marijuana Misdemeanors",
      details: (
        <Typography className={classes.contentTextStyle}>
          comming soon
        </Typography>
      ),
    },
    courtForms3: {
      summary: "Prostitution Convictions",
      details: (
        <Typography className={classes.contentTextStyle}>
          comming soon
        </Typography>
      ),
    },
    courtForms4: {
      summary: "Non-Violent Class B or C Felony",
      details: (
        <Typography className={classes.contentTextStyle}>
          comming soon
        </Typography>
      ),
    },
    courtForms5: {
      summary: "Treaty to Indian Fishing Convictions",
      details: (
        <Typography className={classes.contentTextStyle}>
          comming soon
        </Typography>
      ),
    },
    courtForms6: {
      summary: "Juvenile Conviction Records",
      details: (
        <Typography className={classes.contentTextStyle}>
          comming soon
        </Typography>
      ),
    },
    legalAid1: {
      summary: "Assistance for Pro Se Patrons",
      details: (
        <Typography className={classes.contentTextStyle}>
          comming soon
        </Typography>
      ),
    },
    legalAid2: {
      summary: "Assistance for Adults",
      details: (
        <Typography className={classes.contentTextStyle}>
          comming soon
        </Typography>
      ),
    },
    legalAid3: {
      summary: "Assistance for Juveniles",
      details: (
        <Typography className={classes.contentTextStyle}>
          comming soon
        </Typography>
      ),
    },
    financialAid1: {
      summary: "Legal Financial Obligations (LFOs)",
      details: (
        <Typography className={classes.contentTextStyle}>
          comming soon
        </Typography>
      ),
    },
    financialAid2: {
      summary: "Court Fees",
      details: (
        <Typography className={classes.contentTextStyle}>
          comming soon
        </Typography>
      ),
    },
  };

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
              <DropdownCard
                cardData={dropdownCardData.courtForms1}
              ></DropdownCard>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <DropdownCard
                cardData={dropdownCardData.courtForms2}
              ></DropdownCard>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <DropdownCard
                cardData={dropdownCardData.courtForms3}
              ></DropdownCard>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <DropdownCard
                cardData={dropdownCardData.courtForms4}
              ></DropdownCard>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <DropdownCard
                cardData={dropdownCardData.courtForms5}
              ></DropdownCard>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <DropdownCard
                cardData={dropdownCardData.courtForms6}
              ></DropdownCard>
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
          <Typography
            className={classes.contentTextStyle}
            variant="body2"
            align="left"
          >
            You might need a copy of your Criminal History Record Information
            (CHRI) to vacate your record. There are two options:
          </Typography>
          <ContentSection>
            <Grid container>
              <Grid item xs={2} sm={4} md={4}>
                <img
                  src={human}
                  className={classes.iconStyle}
                  alt="two people working together on a puzzle"
                ></img>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Typography
                  className={classes.contentTextStyle}
                  variant="body2"
                  align="left"
                >
                  Get an “unofficial” copy through WATCH for a $11.00 fee. This
                  report is not always accurate so you should ask the
                  prosecutor.
                </Typography>
              </Grid>
            </Grid>
          </ContentSection>
          <ContentSection>
            <Grid container>
              <Grid item xs={2} sm={4} md={4}>
                <Typography>
                  If the WATCH printout is not good enough, go to your local
                  police or sheriff’s office for an official “record
                  review/challenge” fingerprint card.
                </Typography>
                <Typography>
                  Next, write WSP a letter asking them to send an official copy
                  of your complete CHRI. Include the fingerprint card and a $12
                  money order. A copy of your CHRI will be returned to the
                  address on the fingerprint card. Send everything to:
                </Typography>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Typography>
                  Washington State Patrol Identification and Background Section
                  PO Box 42633 Olympia WA 98504-2633
                </Typography>
              </Grid>
            </Grid>
          </ContentSection>
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
          <Typography>You’ll need to know to answer our questions:</Typography>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <DateRange className={classes.iconStyle} />
              <Typography
                className={classes.contentTextStyle}
                variant="body2"
                align="center"
              >
                We break down the laws into understandable language.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <History className={classes.iconStyle} />

              <Typography
                className={classes.contentTextStyle}
                variant="body2"
                align="center"
              >
                You answer a few simple yes/no questions.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <AccountBalance className={classes.iconStyle} />
              <Typography
                className={classes.contentTextStyle}
                variant="body2"
                align="center"
              >
                This helps determine your vacation eligibility.
              </Typography>
            </Grid>
          </Grid>
          <Box paddingTop={12} className={classes.buttonBoxStyle}>
            <RedesignButtonPrimary href={"#"}>
              Comming soon!
            </RedesignButtonPrimary>
          </Box>
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
          <Typography
            className={classes.contentTextStyle}
            variant="body2"
            align="left"
          >
            Your request to vacate may be denied if:
          </Typography>
          <Grid container>
            <Grid item xs={3}>
              <ContentSection>
                <Typography
                  className={classes.contentTextStyle}
                  variant="body2"
                  align="left"
                >
                  The court does not believe that vacating your conviction will
                  be in the interest of society
                </Typography>
              </ContentSection>
            </Grid>
            <Grid item xs={3}>
              <ContentSection>
                <Typography
                  className={classes.contentTextStyle}
                  variant="body2"
                  align="left"
                >
                  There are inaccuracies in your court records and/or the
                  application
                </Typography>
              </ContentSection>
            </Grid>
            <Grid item xs={3}>
              <ContentSection>
                <Typography
                  className={classes.contentTextStyle}
                  variant="body2"
                  align="left"
                >
                  You violated probation, have not paid off your fines or are
                  otherwise not eligible to vacate that conviction{" "}
                </Typography>
              </ContentSection>
            </Grid>
          </Grid>
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
          <Typography className={classes.donateBody2}>
            Many pro bono services are only available after being refered by
            CLEAR, a toll-free legal hotline:
            <li>
              Outside of King County: call 1-888-201-1014 (weekdays 9.15am -
              12.15pm)
            </li>
            <li>In King County: call 2-1-1 (weekdays 8am - 6pm)</li>
            <li>You can also apply online at CLEAR*Online</li>
          </Typography>
          <Grid container>
            <Grid item>
              <DropdownCard
                cardData={dropdownCardData.legalAid1}
              ></DropdownCard>
            </Grid>
            <Grid item>
              <DropdownCard
                cardData={dropdownCardData.legalAid2}
              ></DropdownCard>
            </Grid>
            <Grid item>
              <DropdownCard
                cardData={dropdownCardData.legalAid3}
              ></DropdownCard>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Typography
            className={classes.headingStyle}
            variant="h3"
            align="left"
          >
            Financial aid
          </Typography>
          <Grid container>
            <Grid item xs={2}>
              <DropdownCard
                cardData={dropdownCardData.financialAid1}
              ></DropdownCard>
            </Grid>
            <Grid item xs={2}>
              <DropdownCard
                cardData={dropdownCardData.financialAid2}
              ></DropdownCard>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default GetStartedPage;
