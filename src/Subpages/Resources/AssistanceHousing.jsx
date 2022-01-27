import {
  Container,
  Typography,
  Box,
  Link,
  Grid,
  ListItem,
} from "@material-ui/core";
import TabPanelGroup from "../../Components/TabPanelGroup";
import { ResourcesStyles } from "../../Styles/ResourcesStyles";
import ShelterList from "../../Components/ShelterList";
import {
  forMen,
  forWomen,
  findHousing,
  additionalLinks,
} from "../../data/sheltersData";
import AlternativeAccord from "../../Components/AlternativeAccord";
import HousingFinderList from "../../Components/HousingFinderList";

const emergencySheltersTabs = [
  { index: 0, label: "For Men", content: <ShelterList shelters={forMen} /> },
  {
    index: 1,
    label: "For Women",
    content: <ShelterList shelters={forWomen} />,
  },
];

const housingAssistanceAccord = [
  {
    summary: "Organizations for help finding housing",
    details: <HousingFinderList resources={findHousing} />,
  },
  {
    summary: "Public Housing Associations",
    details: "",
  },
  {
    summary: "Additional links",
    details: (
      <Grid container>
        {additionalLinks.map((theLink, idx) => (
          <Grid item xs={6} key={idx}>
            <ListItem>
              <Link href={theLink.url} color="initial">
                {theLink.name}
              </Link>
            </ListItem>
          </Grid>
        ))}
      </Grid>
    ),
  },
];
const AssistanceHousing = () => {
  const classes = ResourcesStyles();
  return (
    <>
      <Box className={classes.darkBlueBackground}>
        <Container maxWidth={"sm"}>
          <Typography className={classes.headingStyle} variant="h2" align="center">
            Emergency Shelters
          </Typography>
          <TabPanelGroup tabs={emergencySheltersTabs} />
        </Container>
        <Container>
          <Typography className={classes.contentTextStyle} variant="subtitle1">
            We are not affiliated with any shelters, including the ones listed
            above. Under Washington state law,{" "}
            <Link
              href="http://transgenderlawcenter.org/wp-content/uploads/2016/02/03.09.2016-Model-Homeless-Shelter-TG-Policy-single-pages.pdf"
              color="initial"
            >
              it is illegal to deny shelter
            </Link>{" "}
            to transgender and gender non-conforming people on the basis of
            their gender identity or expression.
          </Typography>
          <Typography className={classes.contentTextStyle} variant="subtitle1">
            You can find a full list of shelters in Washington{" "}
            <Link
              href="https://www.shelterlist.com/state/washington"
              color="initial"
            >
              here
            </Link>
            . You can also contact a homeless service provider here to get help
            finding shelter.
          </Typography>
        </Container>
      </Box>
      <Container className={classes.regularContainer}>
        <AlternativeAccord
          faqs={housingAssistanceAccord}
          sectionHeading={"Other housing assistance"}
        />
      </Container>
    </>
  );
};

export default AssistanceHousing;
