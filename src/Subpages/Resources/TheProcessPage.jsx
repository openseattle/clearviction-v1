import { Box, Container, Typography } from "@material-ui/core";
import teamBuilding from "../../Assets/team_building.svg";
import AlternativeAccord from "../../Components/AlternativeAccord";
import HeroPanel from "../../Components/HeroPanel";
import TabPanelGroup from "../../Components/TabPanelGroup";
import { ResourcesStyles } from "../../Styles/ResourcesStyles";
import PrimaryButton from "../../ui-kit/Button";
import ListItemMobileSnap from "../../ui-kit/ListItemMobileSnap";
import SecondaryButton from "../../ui-kit/SecondaryButton";
import BackgroundReportHelp from "./BackgroundReportHelp";

const courtFormsFaqs = [
  {
    summary: "(Gross) Misdemeanor Conviction",
    details: "placeholder",
  },
  {
    summary: "Marijuana Misdemeanor Conviction",
    details: "placeholder",
  },
  {
    summary: "Prostitution Conviction",
    details: "placeholder",
  },
  {
    summary: "Non-Violent Class B or C Felony Conviction",
    details: "placeholder",
  },
  {
    summary: "Conviction about Treaty to Indian Fishing",
    details: "placeholder",
  },
  {
    summary: "Juvenile Conviction Records",
    details: "placeholder",
  },
  {
    summary: "Other (View all State Court Forms)",
    details: "placeholder",
  },
];

const gatherDocumentsTabGroup = [
  {
    index: 0,
    label: "Court Forms",
    content: (
      <AlternativeAccord
        sectionHeading={"Resources to Vacate: "}
        faqs={courtFormsFaqs}
      />
    ),
  },
  { index: 1, label: "My Records", content: <BackgroundReportHelp /> },
];

const TheProcessPage = () => {
  const classes = ResourcesStyles();
  return (
    <>
      <Container>
        <HeroPanel
          title={"Resources"}
          subtitle={
            "The process of vacating a conviction is convoluted, making it difficult for most people to navigate. That’s why we have compiled a list of resources to help you get started."
          }
        />
      </Container>
      <Box className={classes.darkBlueBackground}>
        <Container>
          <Typography className={classes.headingStyle} variant={"h2"}>Step 1: Gather Documents</Typography>
          <Typography className={classes.contentTextStyle} variant={"body1"}>
            Gathering documents is the first step in the process. This includes
            any forms or records that pertain to your conviction. Please refer
            to ‘Court Forms’ and ‘My Records’ below.
          </Typography>
        </Container>
        <Container maxWidth="md">
        <TabPanelGroup tabs={gatherDocumentsTabGroup} />
        </Container>
        <Container>
          <Typography className={classes.headingStyle} variant="h2">Step 2: Determine Eligibility</Typography>
          <ListItemMobileSnap
            image={<Box height={175} component="img" src={teamBuilding} />}
            textLeft={true}
            text={
              <Typography>
                Once you have your records and forms gathered, use our
                eligibilty calculator to determine if your conviction can be
                vacated.
              </Typography>
            }
          />
          <SecondaryButton text={"Check Eligibility"} />

          <Typography className={classes.headingStyle} variant="h2">Step 3: File with Court</Typography>
          <ListItemMobileSnap
            image={<Box height={175} component="img" src={teamBuilding} />}
            text={
              <div>
                <Typography>
                  Next, submit a request to have your conviction vacated (refer
                  to court directory). Please note that the request to vacate is
                  up to the discretion of the judge and may be denied for a
                  variety of reasons, including if:
                </Typography>
                <Typography component="ol" variant="body2">
                  <li>
                    The court does not believe that vacating your conviction
                    will be in the interest of society
                  </li>
                  <li>
                    You violated probation or have not paid off your fines
                  </li>
                  <li>
                    You are otherwise not eligible to vacate that conviction
                  </li>
                  <li>
                    Inaccuracy in your court records and/or the application
                  </li>
                </Typography>
              </div>
            }
          />
          <PrimaryButton text={"Financial Aid"} />
          <PrimaryButton text={"Legal Aid"} />
        </Container>
      </Box>
    </>
  );
};
export default TheProcessPage;
