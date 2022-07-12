import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

const VideoTutorialAccordion = props => {
    const classes = useStyles();

    const [expanded, setExpanded] = useState("1");

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const sections = [
        {
            id: 1,
            title: "Complete your profile",
            video: "https://drive.google.com/file/d/1fcGzJpDKHs44ocX0AWqsBNAK5b6ivBlv/preview",
        },
        {
            id: 2,
            title: "Find your dashboard (kanban) and tasks",
            video: "https://drive.google.com/file/d/1eLpoMObiwtTIbf5C4tG-a0sul2s2bSCF/preview",
        },
        {
            id: 3,
            title: "Engaging with tasks",
            video: "https://drive.google.com/file/d/1JfIh5ytgqtCT2ixF22qp7Ar_XKWVKYZD/preview",
        },
        {
            id: 4,
            title: "Creating a task for yourself & add a task to someone else's kanban",
            video: "https://drive.google.com/file/d/1zXSu7ADYY66PL6ggWg-ks7Hq1mDxN4r0/preview",
        },
        {
            id: 5,
            title: "Track task requests & Add Tasks you created to your view",
            video: "https://drive.google.com/file/d/1ReQ7xLrlg_TxmrAE8cx-98dyjOOAZlGj/preview",
        },
        {
            id: 6,
            title: "Evaluting performance of a task someone completed for you",
            video: "https://drive.google.com/file/d/1W6QXg0U2EHgckjr8XmM9sA3a1X31N-pd/preview",
        },
    ];

    return (
        <div className={classes.root}>
            {sections.map(elem => (
                <Accordion expanded={expanded === elem.id} onChange={handleChange(elem.id)} key={elem.id}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>{elem.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails content={classes.root}>
                        <div style={{ width: "100%", height: "100%" }}>
                            <iframe
                                title={elem.title}
                                src={elem.video}
                                height="300"
                                width="100%"
                                allow="autoplay"
                            ></iframe>
                        </div>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default VideoTutorialAccordion;
