import { useState } from "react";
import { makeStyles } from "@mui/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        height: "100%",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    linkStyle: {
        color: "#237BCD",
    },
}));

function TrustDocAccordion() {
    const classes = useStyles();

    const [expanded, setExpanded] = useState("1");

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const trustDoc = [
        {
            id: 1,
            title: "Showing up and engaging/participating fully",
            body: "Make sure people are active in the project and interacting with other team members. \n Attend your scheduled meetings. If you will be absent, mark it on the agenda (linked in calendar event). \n Tell the team when you are on vacation or out for any reason (through this Airtable form and on the Slack channel #comings-and-goings).",
        },
        {
            id: 2,
            title: "Expectation setting",
            body: "Ensure there is an agreement between people with expectations and people expected to satisfy them. \n If you call a meeting, you must have an agenda published and attached to the calendar event before the meeting starts. \n Meetings start on time and end on time. \n Iterative and incremental creation is a keystone in remote work. It's a prerequisite for asynchronous contributions, Agile production cycles, and designing/building products in our rapidly evolving world. \n We are here to work together in service of our mission, which requires relying on each other. Any time someone is relying on you for something, it's important to establish a shared understanding of what that something is.",
        },
        {
            id: 3,
            title: "Safe spaces",
            body: "Create a safe space for people to independently make decisions and challenge the ones they disagree with. \n In the event of conflicting information, the SOT is authoritative.",
        },
        {
            id: 4,
            title: "Positivity",
            body: "Navigate difficult conversations and improvement with positivity, honesty, and shared responsibility.",
        },
        {
            id: 5,
            title: "Respect",
            body: "Everyone should be empowered to ask questions and engage in conversations, but should do it respectfully.",
        },
        {
            id: 6,
            title: "Transparency",
            body: "Practice open and honest conversations with team members and create a culture where communication can flow freely between team members. \n Always include context into your communication.",
        },
    ];

    return (
        <div className={classes.root}>
            {trustDoc.map(elem => (
                <Accordion
                    expanded={expanded === elem.id}
                    onChange={handleChange(elem.id)}
                    key={elem.id}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>{elem.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails content={classes.root}>
                        <div>
                            <p>{elem.body}</p>
                        </div>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}

export default TrustDocAccordion;
