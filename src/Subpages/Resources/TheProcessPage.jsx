import { Box, Container, Tab, Tabs, Typography } from "@material-ui/core";
import AlternativeAccord from "../../Components/AlternativeAccord";
import HeroPanel from "../../Components/HeroPanel";
import TabPanelGroup from "../../Components/TabPanelGroup";
import { ResourcesStyles } from "../../Styles/ResourcesStyles";
import ListItemMobileSnap from "../../ui-kit/ListItemMobileSnap";
import teamBuilding from "../../Assets/team_building.svg";
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
          <Typography variant={"h2"}>Step 1: Gather Documents</Typography>
          <Typography variant={"body1"}>
            Gathering documents is the first step in the process. This includes
            any forms or records that pertain to your conviction. Please refer
            to ‘Court Forms’ and ‘My Records’ below.
          </Typography>
          <TabPanelGroup tabs={gatherDocumentsTabGroup} />
          <Typography variant="h2">title</Typography>
          <ListItemMobileSnap
            image={<Box component="img" src={teamBuilding} />}
            textLeft={true}
            text={
              "text larrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrge"
            }
          />
        </Container>
      </Box>
    </>
  );
};
export default TheProcessPage;
