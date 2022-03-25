import { Link, Typography } from "@material-ui/core";
import AccordionBuilder from "../../Components/AccordionBuilder";
import { ExternalLink } from "../../ui-kit/ExternalLink";
import { useHomeStyles } from "../../Styles/useHomeStyles";

const DonateFAQAccordion = () => {
  const classes = useHomeStyles();

  const questions = [
    {
      summary: "How will my donation be used?",
      details: (
        <>
          <Typography className={classes.contentTextStyle}>
            As we're all volunteers, any of our donations will go directly to
            helping those convicted and give them a fresh start.
          </Typography>
          <Typography className={classes.contentTextStyle}>
            Your support will help pay for the technological tools needed by our
            team to let this project grow. To develop needed resources for those
            with convictions, supermarket vouchers will be provided for
            participants in our research. Your aid will also help support
            low-income individuals overcome the financial barriers to vacate
            their record.
          </Typography>
        </>
      ),
    },
    {
      summary: "Is it safe and secure for me to donate online?",
      details: (
        <>
          <Typography className={classes.contentTextStyle}>
            Yes! We use Venmo for all our online donations. Venmo is PayPal’s
            subsidiary and uses bank-level encryption to keep your data safe.
            The app's security features include data encryption, purchase
            verification, multifactor authentication, and fraud protection.
          </Typography>
        </>
      ),
    },
    {
      summary: "I do not have a Venmo account, can I still donate online?",
      details: (
        <>
          <Typography className={classes.contentTextStyle}>
            You will need a Venmo account to donate online. This can easily be
            set up using only a mobile phone or email address. You can then
            choose to either add funds to your Venmo account or link an external
            payment method like a bank account or credit card.
          </Typography>
          <Typography className={classes.contentTextStyle}>
            You can sign up for a Venmo account here:{" "}
            <ExternalLink href="https://account.venmo.com/signup">
              https://get.venmo.com
            </ExternalLink>
          </Typography>
        </>
      ),
    },
    {
      summary: "Can I make a donation by check?",
      details: (
        <>
          <Typography className={classes.contentTextStyle}>
            Yes, please make the check out to Seamus Brugh and mail it to:
          </Typography>
          <Typography className={classes.contentTextStyle}>
            Seamus Brugh
            <br />
            802 5th Ave N, unit 213
            <br />
            Seattle, WA 98109
          </Typography>
        </>
      ),
    },
    {
      summary: "How long does the process take?",
      details: (
        <>
          <Typography className={classes.contentTextStyle}>
            To vacate your Washington conviction, the process takes on average
            three to four months, depending on your individual circumstances,
            the court’s caseload at the time, and whether there are any
            objections to vacating your conviction.
          </Typography>
        </>
      ),
    },
    {
      summary: " Who should I contact if I have more questions?",
      details: (
        <>
          <Typography className={classes.contentTextStyle}>
            You can send us an email at <Link href="mailto:contact@clearviction.org">contact@clearviction.org</Link> and we will get
            back to you within 24 hours.
          </Typography>
        </>
      ),
    },
  ];
  return <AccordionBuilder faqs={questions} />;
};

export default DonateFAQAccordion;
