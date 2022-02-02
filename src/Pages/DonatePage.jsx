import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ArrowDropDownOutlined } from "@material-ui/icons";
import laptop from "../Assets/laptop.svg";
import progress from "../Assets/progress.svg";
import note from "../Assets/note_taking.svg";
import discovery from "../Assets/science_discovery.svg";
import code from "../Assets/qr_code.svg";

const useStyles = makeStyles((theme) => ({
  donationRoot: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  donation: {
    height: "100%",
  },
  donationImageStyle: {
    width: "100%",
  },
  donationAmountStyle: {
    textAlign: "center",
    fontFamily: ["roboto", "sans-serif"],
    fontWeight: "Bold",
    fontSize: 50,
  },
  donationDescStyle: {
    padding: theme.spacing(3),
    textAlign: "center",
    fontFamily: ["roboto", "sans-serif"],
    fontSize: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    }
  },
  title: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),

  },
  qrCode: {
    marginTop: theme.spacing(5),
    width: "100%",
  },
  donate: {
    backgroundColor: theme.palette.primary.dark,
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
  faq: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
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

const donationLevels = [
  {
    name: "level 1",
    amount: "$10",
    donationImage: progress,
    desc: "Contribute toward the monthly cost of the tools required to provide this service",
  },
  {
    name: "level 2",
    amount: "$15",
    donationImage: discovery,
    desc: "Buy groceries for one of our research subjects",
  },
  {
    name: "level 3",
    amount: "$30",
    donationImage: laptop,
    desc: "Pay the filing fee for a low-income individual",
  },
  {
    name: "level 4",
    amount: "Any $",
    donationImage: note,
    desc: "Directly help support those with convictions start fresh",
  },
];

const DonatePage = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.donationRoot} maxWidth="lg">
        <Typography className={classes.title} variant="h2" align="center">
          Why donate?
        </Typography>
        <Typography className={classes.title} variant="body1" align="center">
          We depend on your generosity to let this project grow!
        </Typography>
        <Grid container spacing={3}>
          {donationLevels.map((level, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={6} lg={3}>
              <Card className={classes.donation} >
                <Box display="flex" justifyContent="center">
                  <Box
                    className={classes.donationImageStyle}
                    component="img"
                    src={level.donationImage}
                  />
                </Box>
                <CardContent>
                <Typography className={classes.donationAmountStyle}>
                      {level.amount}
                    </Typography>
                  <Typography className={classes.donationDescStyle}>
                    {level.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box className={classes.donate}>
        <Container maxWidth="lg">
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
              <Typography className={classes.donateBody}>
                Venmo @Seamus-Brugh by
              </Typography>
              <Typography component="ol" className={classes.donateBody}>
                <li>Searching the username (@Seamus-Brugh)</li>
                OR
                <li>Scanning the QR code in-app</li>
              </Typography>
              <Typography className={classes.donateBody2}>
                Note:
                <li>Do not mark as goods or service!</li>
                <li>
                  Be sure to include "Helping people get a fresh start!" in the
                  Venmo description section.
                </li>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="md">
        <Box className={classes.faq}>
          <Typography className={classes.title} variant="h2">
            FAQs
          </Typography>

          <Accordion className={classes.faqAccordionStyle}>
            <AccordionSummary
              className={classes.faqSummary}
              id="panel1a-header"
              aria-controls="panel1a-content"
              expandIcon={<ArrowDropDownOutlined className={classes.expand} />}
            >
              <Typography className={classes.faqSumText}>
                How will my donation be used?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                As we're all volunteers, any of our donations will go directly
                to helping those convicted and give them a fresh start.
                <br />
                <br />
                Your support will help pay for the technological tools needed by
                our team to let this project grow. To develop needed resources
                for those with convictions, supermarket vouchers will be
                provided for participants in our research. Your aid will also
                help support low-income individuals overcome the financial
                barriers to vacate their record.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.faqAccordionStyle}>
            <AccordionSummary
              className={classes.faqSummary}
              id="panel2a-header"
              aria-controls="panel2a-content"
              expandIcon={<ArrowDropDownOutlined className={classes.expand} />}
            >
              <Typography className={classes.faqSumText}>
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
          <Accordion className={classes.faqAccordionStyle}>
            <AccordionSummary
              className={classes.faqSummary}
              id="panel3a-header"
              aria-controls="panel3a-content"
              expandIcon={<ArrowDropDownOutlined className={classes.expand} />}
            >
              <Typography className={classes.faqSumText}>
                I do not have a Venmo account, can I still donate online?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You will need a Venmo account to donate online. This can easily
                be set up using only a mobile phone or email address. You can
                then choose to either add funds to your Venmo account or link an
                external payment method like a bank account or credit card.
                <br />
                <br />
                You can sign up for a Venmo account here:{" "}
                <a href="https://account.venmo.com/signup">
                  https://get.venmo.com
                </a>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.faqAccordionStyle}>
            <AccordionSummary
              className={classes.faqSummary}
              id="panel4a-header"
              aria-controls="panel4a-content"
              expandIcon={<ArrowDropDownOutlined className={classes.expand} />}
            >
              <Typography className={classes.faqSumText}>
                Can I make a donation by check?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, please make the check out to Seamus Brugh and mail it to:
                <br />
                <br />
                Seamus Brugh <br />
                802 5th Ave N, unit 213
                <br />
                Seattle, WA 98109
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.faqAccordionStyle}>
            <AccordionSummary
              className={classes.faqSummary}
              id="panel5a-header"
              aria-controls="panel5a-content"
              expandIcon={<ArrowDropDownOutlined className={classes.expand} />}
            >
              <Typography className={classes.faqSumText}>
                Who should I contact if I have more questions?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can send us an email at convictionvacation@gmail.com. We
                will get back to you within 24 hours.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </>
  );
};

export default DonatePage;
