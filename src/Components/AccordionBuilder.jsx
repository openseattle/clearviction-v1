import { Accordion, AccordionDetails, AccordionSummary, Typography, Box } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

function a11yProps(index) {
    return {
        id: `panel${index}a-header`,
        "aria-controls": `panel${index}a-content`,
    };
}

const AccordionBuilder = ({ faqs }) => {
    return (
        <div aria-label="info-accordion">
            {faqs.map((faq, idx) => (
                <Accordion key={idx} elevation={0}>
                    <AccordionSummary expandIcon={<ExpandMore />} aria-controls={faq.detailsID} {...a11yProps}>
                        <Typography variant="subtitle1" component="p">
                            {faq.summary}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails aria-labelledby={faq.summaryID}>
                        <Box display="block">{faq.details}</Box>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};
export default AccordionBuilder;
