import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  Typography,
} from "@material-ui/core";
import { AccountBalance, DateRange, History } from "@material-ui/icons";

import teamBuilding from "../Assets/team_building.svg";
import FactExpandMoreCard from "../Components/FactExpandMoreCard";
import FactIconGroup from "../Components/FactIconGroup";
import RedesignHeroPanel from "../Components/RedesignHeroPanel";
import ResponsiveJumpButtonGroup from "../Components/ResponsiveJumpButtonGroup";
import { useGetInvolvedStyles } from "../Styles/useGetInvolvedStyles";
import { ExternalLink } from "../ui-kit/ExternalLink";
import { RedesignButtonPrimary } from "../ui-kit/RedesignButtonPrimary";

const vacationPacket = (text) => (
  <ExternalLink href="https://www.washingtonlawhelp.org/files/C9D2EA3F-0350-D9AF-ACAE-BF37E9BC9FFA/attachments/21968678-A4F9-42E5-BA32-58826390C62D/8705en_get-misdemeanor-convictions-off-criminal-record.pdf">
    {text}
  </ExternalLink>
);

const factsProps = {
  style: { fontSize: 54 },
  color: "secondary",
};

const eligibilityFacts = [
  {
    id: "fact0",
    icon: <DateRange {...factsProps} />,
    text: "The date & violation of your misdemeanor conviction",
  },
  {
    id: "fact1",
    icon: <History {...factsProps} />,
    text: "If and when you completed the terms of your sentence",
  },
  {
    id: "fact2",
    icon: <AccountBalance {...factsProps} />,
    text: "Pending or new criminal charges & any court orders against you",
  },
]

// const courtFormsFacts = [{}];
const GetStartedPage = () => {
  const classes = useGetInvolvedStyles();
  return (
    <>
      <RedesignHeroPanel title="Get Started">
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              className={classes.volunteerTextStyle}
              variant="subtitle1"
            >
              Vacate your conviction in the state of Washington by following
              these 4 steps!
            </Typography>

            <RedesignButtonPrimary>read more</RedesignButtonPrimary>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              component="img"
              style={{ width: "100%", padding: 16 }}
              src={teamBuilding}
              alt="Teamwork solves a puzzle."
            />
          </Grid>
        </Grid>
      </RedesignHeroPanel>
      <Container className={classes.regularContainer} maxwidth="sm">
        <ResponsiveJumpButtonGroup
          links={[
            { url: "documents", linkName: "documents" },
            { url: "eilgibility", linkName: "eligibility" },
            { url: "fourt-filing", linkName: "court filing" },
            { url: "hearing", linkName: "hearing" },
          ]}
        />
      </Container>
      <Container id="documents" component="section" maxWidth="md">
        <Typography variant="h2">Step 1: Documents</Typography>
        <Typography variant="body1">
          Gathering documents is the first step in the process. This includes
          any forms or records that pertain to your conviction. Please gather
          all relevant court forms and get a copy of your Criminal History
          Record Information (CHRI).{" "}
        </Typography>
        <Typography variant="h3">Court Forms</Typography>
        <Grid container>
          <Grid item xs={4}>
            <FactExpandMoreCard
              summary="(Gross) Misdemeanor Convictions"
              content={
                <Typography variant="caption">
                  {vacationPacket(
                    "Vacation packet from Northwest Justice Project"
                  )}{" "}
                  with details about the eligibility to vacate (p. 2-4) and the
                  needed court forms (p. 5-13).
                </Typography>
              }
            />
          </Grid>
        </Grid>
        <Typography variant="h3">
          Criminal History Record Information (CHRI)
        </Typography>
        <Typography variant="body1">
          You might need a copy of your Criminal History Record Information
          (CHRI) to vacate your record. There are two options:
        </Typography>
        <Paper>
          <Grid container>
            <Grid item>
              <img src="#" alt="" height="100px" />
            </Grid>
            <Grid item>
              <Typography>
                Get an <Link href="#">“unofficial” copy through WATCH</Link> for
                a $11.00 fee. This report is not always accurate so you should
                ask the prosecutor.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper>
          <Typography>
            If the WATCH printout is not good enough, go to your local police or
            sheriff’s office for an official “record review/challenge”
            fingerprint card.
          </Typography>
          <Typography>
            Next, write WSP a letter asking them to send an official copy of
            your complete CHRI. Include the fingerprint card and a $12 money
            order. A copy of your CHRI will be returned to the address on the
            fingerprint card. Send everything to:
          </Typography>
          <Link>
            Washington State Patrol <br />
            Identification and Background Section <br />
            PO Box 42633 <br />
            Olympia WA 98504-2633 <br />
          </Link>
        </Paper>
      </Container>
      <Container maxWidth="md">
        <Divider className={classes.dividerStyle} />
      </Container>
      <Container
        id="eligibility"
        component="section"
        className={classes.regularContainerStyle}
        maxWidth="md"
      >
        <Typography variant="h2">Step 2: Eligibility</Typography>
        <Typography>
          Once you have your records and forms gathered, use our eligibilty
          calculator to determine whether you are eligible to vacate your
          misdemeanor conviction. It is expected to take 10-30 minutes.
        </Typography>
        <Typography>
        You’ll need to know to answer our questions:
        </Typography>
        <FactIconGroup facts={eligibilityFacts}/>
      </Container>
      <Container maxWidth="md">
        <Divider className={classes.dividerStyle} />
      </Container>
      <Container>
<Typography variant="h2">
  Step 3: 
</Typography>
      </Container>
    </>
  );
};

export default GetStartedPage;
