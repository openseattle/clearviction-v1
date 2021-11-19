import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from "@mui/material";

const ACCORDIAN_WIDTH = '852px'

export default function FAQAccordion() {
    return (
        <>
        <Accordion sx={{ width: ACCORDIAN_WIDTH }}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: '#ffffff' }}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: 'var(--light-blue)', color: '#ffffff' }}
          >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: ACCORDIAN_WIDTH }}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: '#ffffff' }}/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{ backgroundColor: 'var(--light-blue)', color: '#ffffff' }}
            >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: ACCORDIAN_WIDTH }}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: '#ffffff' }}/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{ backgroundColor: 'var(--light-blue)', color: '#ffffff' }}
            >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: ACCORDIAN_WIDTH }}> 
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: '#ffffff' }}/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{ backgroundColor: 'var(--light-blue)', color: '#ffffff' }}
            >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: ACCORDIAN_WIDTH }}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: '#ffffff' }}/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{ backgroundColor: 'var(--light-blue)', color: '#ffffff' }}
            >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </>
    )
}