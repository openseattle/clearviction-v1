import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({}));

function a11yProps(index) {
  return {
    id: `panel${index}a-header`,
    "aria-controls": `panel${index}a-content`,
  };
}

const AccordionBuilder = ({ faqs }) => {
  const classes = useStyles();
  return (
    <>
      {faqs.map((faq, idx) => (
        <Accordion
          key={idx}
          className={classes.faqAccordionStyle}
          variant="outlined"
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="subtitle1" {...a11yProps(idx)}>
              {faq.summary}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box display="block">{faq.details}</Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
export default AccordionBuilder;
