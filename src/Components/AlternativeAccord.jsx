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
    textAlign: "center",
    margin: theme.spacing(2),
  },
  faq: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    marginRight: theme.spacing(6),
    marginLeft: theme.spacing(6),
    [theme.breakpoints.down("xs")]:{
      marginRight: 0,
      marginLeft: 0,
    }
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
    fontSize: 20,
    [theme.breakpoints.down("sm")]: {
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
      <Typography className={classes.title} variant="h2">
        {sectionHeading}
      </Typography>

      {faqs.map((faq) => (
        <Accordion className={classes.faqAccordionStyle}>
          <AccordionSummary
            className={classes.faqSummary}
            expandIcon={<ArrowDropDownOutlined className={classes.expand} />}
          >
            <Typography className={classes.faqSumText}>
              {faq.summary}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                {faq.details}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
export default AlternativeAccord;
