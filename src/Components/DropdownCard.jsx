import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

function a11yProps(index) {
  return {
    id: `panel${index}a-header`,
    "aria-controls": `panel${index}a-content`,
  };
}

const DropdownCard = ({ cardData }) => {
  return (
    <div aria-label="info-accordion">
      <Accordion
        key={cardData.summary}
        elevation={0}
        className={cardData.class}
      >
        <AccordionSummary expandIcon={<ExpandMore />} {...a11yProps}>
          <Typography variant="subtitle2">{cardData.summary}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="block">{cardData.details}</Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default DropdownCard;
