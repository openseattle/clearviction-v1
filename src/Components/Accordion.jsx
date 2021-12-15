import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Text from "../ui-kit/Text";
import data from "../data/FAQdata";
import { Container } from "@mui/material";

export default function FAQAccordion() {
  const content = data.questions;

  return (
    <>
      <Container maxWidth="md">
        {content.map(({ header, body1, body2, body3, body4, body5 }, idx) => (
          <Accordion key={idx}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#ffffff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ backgroundColor: "var(--light-blue)", color: "#ffffff" }}
            >
              <Text fontFamily={"Lora"} variant={"h5"} text={header}></Text>
            </AccordionSummary>
            <AccordionDetails>
              <Text fontFamily={"Lora"} variant={"h5"} text={body1}></Text>
              <Text fontFamily={"Lora"} variant={"h5"} text={body2}></Text>
              {body3 && (
                <Text fontFamily={"Lora"} variant={"h5"} text={body3}></Text>
              )}
              {body4 && (
                <Text fontFamily={"Lora"} variant={"h5"} text={body4}></Text>
              )}
              {body5 && (
                <Text fontFamily={"Lora"} variant={"h5"} text={body5}></Text>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </>
  );
}
