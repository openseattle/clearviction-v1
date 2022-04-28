import { Container, Typography, Box, Grid, ListItem } from "@material-ui/core";
import TabPanelGroup from "../../Components/TabPanelGroup";
import { useResourcesStyles } from "../../Styles/useResourcesStyles";
import ShelterList from "../../Components/ShelterList";
import { forMen, forWomen, findHousing, additionalLinks } from "../../data/sheltersData";
import associations from "../../data/publicHousingData";
import AccordionBuilder from "../../Components/AccordionBuilder";
import HousingFinderList from "../../Components/HousingFinderList";
import PublicHousingList from "../../Components/PublicHousingList";
import { ExternalLink } from "../../ui-kit/ExternalLink";

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
        details: <PublicHousingList publicAssociations={associations} />,
    },
    {
        summary: "Additional links",
        details: (
            <Grid container>
                {additionalLinks.map((theLink, idx) => (
                    <Grid item xs={6} key={idx}>
                        <ListItem>
                            <ExternalLink href={theLink.url}>{theLink.name}</ExternalLink>
                        </ListItem>
                    </Grid>
                ))}
            </Grid>
        ),
    },
];
const AssistanceHousing = () => {
    const classes = useResourcesStyles();
    return (
        <>
            <Box className={classes.darkBlueBackground}>
                <Container maxWidth={"md"}>
                    <Typography className={classes.headingStyle} variant="h2" align="center">
                        Emergency Shelters
                    </Typography>
                    <TabPanelGroup tabs={emergencySheltersTabs} />
                </Container>
                <Container className={classes.regularContainer} maxWidth="md">
                    <Typography className={classes.contentTextStyle} variant="body1">
                        We are not affiliated with any shelters, including the ones listed above. Under Washington state
                        law,{" "}
                        <ExternalLink href="http://transgenderlawcenter.org/wp-content/uploads/2016/02/03.09.2016-Model-Homeless-Shelter-TG-Policy-single-pages.pdf">
                            it is illegal to deny shelter
                        </ExternalLink>{" "}
                        to transgender and gender non-conforming people on the basis of their gender identity or
                        expression.
                    </Typography>
                    <Typography className={classes.contentTextStyle} variant="body1">
                        You can find a full list of shelters in Washington{" "}
                        <ExternalLink href="https://www.shelterlist.com/state/washington" color="initial">
                            here
                        </ExternalLink>
                        . You can also contact a homeless service provider here to get help finding shelter.
                    </Typography>
                </Container>
            </Box>
            <Container className={classes.regularContainer} maxWidth="md">
                <AccordionBuilder faqs={housingAssistanceAccord} sectionHeading={"Other housing assistance"} />
            </Container>
        </>
    );
};

export default AssistanceHousing;
