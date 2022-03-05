import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  makeStyles,
  Grid,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import data from "../data/FAQdata";

const useStyles = makeStyles((theme) => ({
  accordionSummary: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
  iconStyle: {
    color: theme.palette.primary.contrastText,
  }
}));

export default function FAQAccordion() {
  const content = data.questions;
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md">
        {content.map(({ header, body1, body2, body3, body4, body5 }, idx) => (
          <Accordion key={idx} >
            <AccordionSummary
              className={classes.accordionSummary}
              expandIcon={<ExpandMoreIcon className={classes.iconStyle} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">{header}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid>
                <Typography variant="body1" align="left">
                  {body1}
                </Typography>
                <Typography variant="body1" align="left">
                  {body2}
                </Typography>

                {body3 && (
                  <Typography variant="body1" align="left">
                    {body3}
                  </Typography>
                )}
                {body4 && (
                  <Typography variant="body1" align="left">
                    {body4}
                  </Typography>
                )}
                {body5 && (
                  <Typography variant="body1" align="left">
                    {body5}
                  </Typography>
                )}
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </>
  );
}
