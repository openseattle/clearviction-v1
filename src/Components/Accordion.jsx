import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  makeStyles,
  Grid,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Text from "../ui-kit/Text";
import data from "../data/FAQdata";

const useStyles = makeStyles( (theme) => ({
  accordionSummary: {
    backgroundColor: theme.palette.primary.light,
    color: "white",
    height: "8rem",
  },
  iconStyle: {
    color: "white",
  },
}));

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
              <Grid>
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
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </>
  );
}
