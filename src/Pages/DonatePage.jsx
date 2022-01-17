import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ExpandMoreOutlined } from "@material-ui/icons";
import laptop from "../Assets/laptop.svg";
import progress from "../Assets/progress.svg";
import note from "../Assets/note_taking.svg";
import discovery from "../Assets/science_discovery.svg";

const donationLevels = [
  {
    name: "level 1",
    amount: "$10",
    donationImage: progress,
    desc: "pay for a monthly fee for one of our technological tools",
  },
  {
    name: "level 2",
    amount: "$15",
    donationImage: discovery,
    desc: "fund a research participant’s time",
  },
  {
    name: "level 3",
    amount: "$30",
    donationImage: laptop,
    desc: "pay the filing fee for a low-income individual",
  },
  {
    name: "level 4",
    amount: "any",
    donationImage: note,
    desc: "directly help support those with convictions start fresh",
  },
];

const useStyles = makeStyles((theme) => ({
  donation: {
    padding: theme.spacing(2),
  },
  donationImageStyle: {
    height: 200,
    width: 270,
  },
  donationAmountStyle: {
    textAlign: "center",
    fontFamily: ["roboto", "sans-serif"],
    fontWeight: 500,
    fontSize: 60,
  },
  donationDescStyle: {
    textAlign: "center",
    fontFamily: ["roboto", "sans-serif"],
    fontSize: 20,
  },
  title: {
    textAlign: "center",
    margin: theme.spacing(2),
  },
  qrCode: {
    height: 440,
    width: 610,
  }
}));

const DonatePage = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Typography className={classes.title} variant="h2">Why donate?</Typography>
        <Typography variant="body1">
          We depend on your generosity to let this project grow!
        </Typography>
        <Grid container>
          {donationLevels.map((level) => (
            <Grid
              className={classes.donation}
              item
              key={level.name}
              xs={12}
              sm={3}
            >
              <Box display="flex" justifyContent="center">
                <Box
                  className={classes.donationImageStyle}
                  component="img"
                  src={level.donationImage}
                />
              </Box>

              <Typography className={classes.donationAmountStyle}>
                {level.amount}
              </Typography>
              <Typography className={classes.donationDescStyle}>
                {level.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Box >
          
          <Box className={classes.qrCode} component={"img"} />
          <Typography variant="h2">title</Typography>
          <Typography>text</Typography>
          <Typography>list</Typography>
          <Typography>disclaimer</Typography>
        </Box>
        <Box>
          <Typography className={classes.title} variant="h2">FAQs</Typography>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
              <Typography>Summary</Typography>
            </AccordionSummary>
            <AccordionDetails>details</AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </>
  );
};

export default DonatePage;
