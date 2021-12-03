import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Text from '../ui-kit/Text';

export default function FAQAccordion() {
    return (
        <>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: '#ffffff' }}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: 'var(--light-blue)', color: '#ffffff' }}
          >
          <Text fontFamily={"Lora"} variant={"h5"} text={"Accordion 1"}></Text>
          </AccordionSummary>
            <AccordionDetails>
              <Text fontFamily={"Lora"} variant={"h5"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."}></Text>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: '#ffffff' }}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: 'var(--light-blue)', color: '#ffffff' }}
          >
          <Text fontFamily={"Lora"} variant={"h5"} text={"Accordion 2"}></Text>
          </AccordionSummary>
            <AccordionDetails>
              <Text fontFamily={"Lora"} variant={"h5"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."}></Text>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: '#ffffff' }}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: 'var(--light-blue)', color: '#ffffff' }}
          >
          <Text fontFamily={"Lora"} variant={"h5"} text={"Accordion 3"}></Text>
          </AccordionSummary>
            <AccordionDetails>
              <Text fontFamily={"Lora"} variant={"h5"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."}></Text>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: '#ffffff' }}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: 'var(--light-blue)', color: '#ffffff' }}
          >
          <Text fontFamily={"Lora"} variant={"h5"} text={"Accordion 4"}></Text>
          </AccordionSummary>
            <AccordionDetails>
              <Text fontFamily={"Lora"} variant={"h5"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."}></Text>
            </AccordionDetails>
        </Accordion>
      </>
    )
}