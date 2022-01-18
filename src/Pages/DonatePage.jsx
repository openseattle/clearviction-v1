import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ExpandMoreOutlined } from "@material-ui/icons";
import laptop from "../Assets/laptop.svg";
import progress from "../Assets/progress.svg";
import note from "../Assets/note_taking.svg";
import discovery from "../Assets/science_discovery.svg";
import code from "../Assets/qr_code.svg";

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
    height: 400,
    width: 400,
  },
  donate: {
    backgroundColor: "#2F3554",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  donateRight: {
    paddingTop: theme.spacing(3),
  },
  donateHeading: {
    color: "white",
    margin: theme.spacing(3),
  },
  donateBody: {
    color: "white",
    fontSize: 20,
    margin: theme.spacing(3),
  },
  donateBody2: {
    color: "white",
    fontSize: 16,
    margin: theme.spacing(3),
  },
  faqSummary: {
    backgroundColor: theme.palette.primary.light,
  },
}));

const DonatePage = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Typography className={classes.title} variant="h2">
          Why donate?
        </Typography>
        <Typography variant="body1" align="center">
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
        <Box className={classes.donate}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Box display={"flex"} justifyContent={"center"}>
                <Box className={classes.qrCode} component={"img"} src={code} />
              </Box>
            </Grid>
            <Grid className={classes.donateRight} item xs={12} sm={6}>
              <Typography className={classes.donateHeading} variant="h2">
                How to donate:
              </Typography>
              <Typography className={classes.donateBody}>text</Typography>
              <Typography component="ol" className={classes.donateBody}>
                <li>item</li>
                <li>item</li>
              </Typography>
              <Typography className={classes.donateBody2}>
                disclaimer
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Typography className={classes.title} variant="h2">
            FAQs
          </Typography>

          <Accordion>
            <AccordionSummary
              className={classes.faqSummary}
              id="panel1a-header"
              aria-controls="panel1a-content"
              expandIcon={<ExpandMoreOutlined />}
            >
              <Typography>How will my donation be used?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>
                  <Typography>
                    As we're all volunteers, any of our donations will go
                    directly to helped those convicted and give them a fresh
                    start.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    Your support will help pay for the technological tools
                    needed by our team to let this project grow. To develop
                    needed resources for those with convictions, supermarket
                    vouchers will be provided for participants in our research.
                    Your aid will also help support low-income individuals
                    overcome the financial barriers to vacate their record.
                  </Typography>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              id="panel2a-header"
              aria-controls="panel2a-content"
              expandIcon={<ExpandMoreOutlined />}
            >
              <Typography>
                Is it safe and secure for me to donate online?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes! We use Venmo for all our online donations. Venmo is
                PayPal’s subsidiary and uses bank-level encryption to keep your
                data safe. The app's security features include data encryption,
                purchase verification, multifactor authentication, and fraud
                protection.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              id="panel3a-header"
              aria-controls="panel3a-content"
              expandIcon={<ExpandMoreOutlined />}
            >
              <Typography>
                I do not have a Venmo account, can I still donate online?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You will need a Venmo account to donate online. This can easily
                be set up using only a mobile phone or email address. You can
                then choose to either add funds to your Venmo account or link an
                external payment method like a bank account or credit card.
              </Typography>
              <Typography>
                You can sign up for a Venmo account here: https://get.venmo.com
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              id="panel4a-header"
              aria-controls="panel4a-content"
              expandIcon={<ExpandMoreOutlined />}
            >
              <Typography>Can I make a donation by check?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, please make the check out to Seamus Brugh and mail it to:
                <br />
                Seamus Brugh <br />
                802 5th Ave N,
                <br />
                unit 213 Seattle,
                <br />
                WA 98109
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              id="panel5a-header"
              aria-controls="panel5a-content"
              expandIcon={<ExpandMoreOutlined />}
            >
              <Typography>
                Who should I contact if I have more questions?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can send us an email at contact@cvp.com. We will get back to
                you within 24 hours.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </>
  );
};

export default DonatePage;
