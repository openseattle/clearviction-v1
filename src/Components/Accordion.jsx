import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  makeStyles,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Text from "../ui-kit/Text";
import data from "../data/FAQdata";

const useStyles = makeStyles({
  accordionSummary: {
    backgroundColor: "var(--light-blue)",
    color: "white",
    height: "5em",
  },
  iconStyle: {
    color: "white",
  },
});

export default function FAQAccordion() {
  const content = data.questions;
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md">
        {content.map(({ header, body1, body2, body3, body4, body5 }, idx) => (
          <Accordion key={idx}>
            <AccordionSummary
              className={classes.accordionSummary}
              expandIcon={<ExpandMoreIcon className={classes.iconStyle} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Text fontFamily={"Lora"} variant={"h5"} text={header}></Text>
            </AccordionSummary>
            <AccordionDetails>
              <Text
                fontFamily={"Lora"}
                variant={"h5"}
                textAlign={"left"}
                text={body1}
              ></Text>
              <Text
                fontFamily={"Lora"}
                variant={"h5"}
                textAlign={"left"}
                text={body2}
              ></Text>
              {body3 && (
                <Text
                  fontFamily={"Lora"}
                  variant={"h5"}
                  textAlign={"left"}
                  text={body3}
                ></Text>
              )}
              {body4 && (
                <Text
                  fontFamily={"Lora"}
                  variant={"h5"}
                  textAlign={"left"}
                  text={body4}
                ></Text>
              )}
              {body5 && (
                <Text
                  fontFamily={"Lora"}
                  variant={"h5"}
                  textAlign={"left"}
                  text={body5}
                ></Text>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </>
  );
}
