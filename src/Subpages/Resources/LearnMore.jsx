import { Container, Box, Typography, List, ListItem } from "@material-ui/core";
import ListItemMobileSnap from "../../ui-kit/ListItemMobileSnap";
import brainstorm from "../../Assets/brainstorming_session.svg";
import { useResourcesStyles } from "../../Styles/useResourcesStyles";

const links = [
    {
        name: "Washington Court on eligibility requirements to vacate convictions/sealing records",
        to: "https://www.courts.wa.gov/content/publicUpload/Publications/SealingandDestroyingCourtRecords.pdf",
    },
    {
        name: "General guide on criminal records and how to clear records",
        to: "https://wareentryguide.org/criminal-records-and-background-checks/",
    },
    {
        name: "General info on record clearing and criminal record policies",
        to: "https://cleanslateclearinghouse.org/states/washington/juvenile-record-overview/",
    },
    {
        name: "Comprehensive info on criminal records, vacating convictions and sealing records per conviction",
        to: "https://www.washingtonlawhelp.org/issues/criminal/record-expungement-sealing-records?location=Yakima%20County",
    },
    {
        name: "Comprehensive guide on sealing juvenile records",
        to: "https://teamchild.org/wp-content/uploads/2019/03/Sealing-Juvenile-Court-Records-in-Washington-State-2018.pdf",
    },
];

export const LearnMore = () => {
    const classes = useResourcesStyles();
    return (
        <Container className={classes.regularContainer}>
            <ListItemMobileSnap
                image={<Box component="img" src={brainstorm} />}
                text={
                    <div>
                        <Typography variant="h3">Learn more about vacating convictions</Typography>
                        <List>
                            {links.map((link, idx) => (
                                <ListItem key={idx}>
                                    <a href={link.to}>{link.name}</a>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                }
            />
        </Container>
    );
};
