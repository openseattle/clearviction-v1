import { Box, Container, Tab, Tabs, Typography } from "@material-ui/core";
import AlternativeAccord from "../../Components/AlternativeAccord";
import HeroPanel from "../../Components/HeroPanel";
import TabPanelGroup from "../../Components/TabPanelGroup";
import { ResourcesStyles } from "../../Styles/ResourcesStyles";
import ListItemMobileSnap from "../../ui-kit/ListItemMobileSnap";
import teamBuilding from "../../Assets/team_building.svg";
import BackgroundReportHelp from "./BackgroundReportHelp";

const tabElementContent = [
  {index: 0, label: "Tab One", content: "tab one content"},
  {index: 1, label: "Tab Two", content: <BackgroundReportHelp />}
]

const TheProcessPage = () => {
  const classes = ResourcesStyles();
  return (
    <>
      <Container>
        <HeroPanel title={"title"} subtitle={"subtitle"} />
      </Container>
      <Box className={classes.darkBlueBackground}>
        <Container>
        <Typography variant={"h2"}>test</Typography>
        <Typography variant={"body1"}>test</Typography>
        <TabPanelGroup tabs={tabElementContent}/>
        <Typography variant="h2">title</Typography>
        <ListItemMobileSnap image={<Box component="img" src={teamBuilding} />} textLeft={true} text={"text larrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrge"}/>
        </Container>
      </Box>
    </>
  );
};
export default TheProcessPage;
