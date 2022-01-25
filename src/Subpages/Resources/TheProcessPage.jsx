import { Box, Container, Tab, Tabs, Typography } from "@material-ui/core";
import HeroPanel from "../../Components/HeroPanel";
import TabPanelGroup from "../../Components/TabPanelGroup";
import { ResourcesStyles } from "../../Styles/ResourcesStyles";

const tabElementContent = [
  {index: 0, label: "one", content: "tab one content"},
  {index: 1, label: "two", content: "tab two content"}
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
        </Container>
      </Box>
    </>
  );
};
export default TheProcessPage;
