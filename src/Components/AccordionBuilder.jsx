import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({}));
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
            <Typography variant="subtitle1">{faq.summary}</Typography>
          </AccordionSummary>
          <AccordionDetails>{faq.details}</AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
export default AccordionBuilder;
