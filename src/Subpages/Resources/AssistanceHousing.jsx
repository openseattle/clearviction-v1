import { Container, Typography, Box } from "@material-ui/core";
import TabPanelGroup from "../../Components/TabPanelGroup";
import { ResourcesStyles } from "../../Styles/ResourcesStyles";
import ShelterList from "../../Components/ShelterList";
import { forMen, forWomen } from "../../data/sheltersData";

const emergencySheltersTabs = [
  { index: 0, label: "For Men", content: <ShelterList shelters={forMen} /> },
  { index: 1, label: "For Women", content: <ShelterList shelters={forWomen} /> },
];
const AssistanceHousing = () => {
  const classes = ResourcesStyles();
  return (
    <Box className={classes.darkBlueBackground}>
      <Container maxWidth={"sm"}>
        <Typography variant="h2" align="center">
          Emergency Shelters
        </Typography>
        <TabPanelGroup tabs={emergencySheltersTabs} />
      </Container>
    </Box>
  );
};

export default AssistanceHousing;
