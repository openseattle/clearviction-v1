import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: "100%",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    linkStyle: {
        color: '#237BCD',
    }
}));


const SlackVideoAccordion = (props) => {
    const classes = useStyles();

    const [expanded, setExpanded] = useState('1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const sections = [
        {
            id: 1,
            title: "Set up your profile",
            video: "https://drive.google.com/file/d/13ke5zaKAJbChEOB5Im1tC5pypQ3XiZM-/preview",
        },
        {
            id: 2,
            title: "Where to find channels and how to join a channel?",
            video: "https://drive.google.com/file/d/1N51-sShXuB3xcozLrTQAx9O6yebllgFx/preview",
        },
        {
            id: 3,
            title: "How to create a channel",
            video: "https://drive.google.com/file/d/1Hodm4l4JBhUe_h0RQCHVin73VFXAzohl/preview",
        },
        {
            id: 4,
            title: "How to start a conversation with a teammate",
            video: "https://drive.google.com/file/d/1vdAKKqWCSUiwjtWDwUfGk8s7BtoF3_rg/preview",
        },
        {
            id: 5,
            title: "How does donut work?",
            video: "https://drive.google.com/file/d/1Ne1eBJ76itiCTQjYzjhVxxR0n74SVnoO/preview",
        },
        {
            id: 6,
            title: "How to check threads/mentions?",
            video: "https://drive.google.com/file/d/1Y-GN_bW03z4uyU91n695h7aaQDizULDP/preview",
        },
        {
            id: 7,
            title: "Active/inactice status",
            video: "https://drive.google.com/file/d/1qNlcKF7Nik3PaifSJvKr_E6IvxewM5BX/preview",
        },
    ];

    return (
        <div className={classes.root}>
            {sections.map(elem =>
                <Accordion expanded={expanded === elem.id} onChange={handleChange(elem.id)} key={elem.id}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>{elem.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails content={classes.root}>
                        <div style={{ width: '100%', height: '100%' }}>
                            <iframe title={elem.title} src={elem.video} height="300" width="100%" allow="autoplay"></iframe>
                        </div>
                    </AccordionDetails>
                </Accordion>
            )}
        </div>
    );
}

export default SlackVideoAccordion