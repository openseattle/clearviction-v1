import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ArrowDropDownOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  faq: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
  },
  faqAccordionStyle: {
    borderRadius: 4,
    marginBottom: theme.spacing(2),
  },
  faqSummary: {
    backgroundColor: theme.palette.primary.light,
    color: "white",
    borderRadius: 4,
  },
  faqSumText: {
    fontFamily: ["roboto", "sans-serif"],
    fontSize: 18,
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
    },
  },
  expand: {
    color: "white",
    fontSize: 24,
  },
}));
const AlternativeAccord = (props) => {
  const { faqs, sectionHeading } = props;
  const classes = useStyles();
  return (
    <Box className={classes.faq}>
      <Typography className={classes.title} variant="h3">
        {sectionHeading}
      </Typography>

      {faqs.map((faq) => (
        <Accordion key={faq.summary} className={classes.faqAccordionStyle}>
          <AccordionSummary
            className={classes.faqSummary}
            expandIcon={<ArrowDropDownOutlined className={classes.expand} />}
          >
            <Typography className={classes.faqSumText}>
              {faq.summary}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>{faq.details}</AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
export default AlternativeAccord;
