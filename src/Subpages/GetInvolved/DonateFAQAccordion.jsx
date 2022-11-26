import { Link, Typography } from "@mui/material";
import AccordionBuilder from "../../Components/AccordionBuilder";
import { ExternalLink } from "../../ui-kit/ExternalLink";
import { useHomeStyles } from "../../Styles/useHomeStyles";

const DonateFAQAccordion = () => {
    const classes = useHomeStyles();
    const { pathname } = window.location;

    const questions = [
        {
            summary: "How will my donation be used?",
            summaryID: "donation-button",
            details: (
                <>
                    <Typography className={classes.contentTextStyle}>
                        As we're all volunteers, any of our donations will go directly to helping those convicted and
                        give them a fresh start.
                    </Typography>
                    <Typography className={classes.contentTextStyle}>
                        Your support will help pay for the technological tools needed by our team to let this project
                        grow. To develop needed resources for those with convictions, supermarket vouchers will be
                        provided for participants in our research. Your aid will also help support low-income
                        individuals overcome the financial barriers to vacate their record.
                    </Typography>
                </>
            ),
            detailsID: "donation-paragraph",
        },
        {
            summary: "Is it safe and secure for me to donate online?",
            summaryID: "safe-button",
            details: (
                <Typography className={classes.contentTextStyle}>
                    Yes! We use Venmo for all our online donations. Venmo is PayPal’s subsidiary and uses bank-level
                    encryption to keep your data safe. The app's security features include data encryption, purchase
                    verification, multifactor authentication, and fraud protection.
                </Typography>
            ),
            detailsID: "safe-paragraph",
        },
        {
            summary: "I do not have a Venmo account, can I still donate online?",
            summaryID: "venmo-account-button",
            details: (
                <>
                    <Typography className={classes.contentTextStyle}>
                        You will need a Venmo account to donate online. This can easily be set up using only a mobile
                        phone or email address. You can then choose to either add funds to your Venmo account or link an
                        external payment method like a bank account or credit card.
                    </Typography>
                    <Typography className={classes.contentTextStyle}>
                        You can sign up for a Venmo account here:{" "}
                        <ExternalLink href="https://account.venmo.com/signup">https://get.venmo.com</ExternalLink>
                    </Typography>
                </>
            ),
            detailsID: "venmo-account-paragraph",
        },
        {
            summary: "Can I make a donation by check?",
            summaryID: "check-button",
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
            detailsID: "check-paragraph",
        },
        {
            summary: "How long does the process take?",
            summaryID: "how-long-button",
            details: (
                <Typography className={classes.contentTextStyle}>
                    To vacate your Washington conviction, the process takes on average three to four months, depending
                    on your individual circumstances, the court’s caseload at the time, and whether there are any
                    objections to vacating your conviction.
                </Typography>
            ),
            detailsID: "how-long-paragraph",
        },
        {
            summary: " Who should I contact if I have more questions?",
            summaryID: "contact-button",
            details: (
                <Typography className={classes.contentTextStyle}>
                    You can send us an email at{" "}
                    <Link href="mailto:contact@clearviction.org" underline="hover">
                        contact@clearviction.org
                    </Link>{" "}
                    and we will get back to you within 24 hours.
                </Typography>
            ),
            detailsID: "contact-paragraph",
        },
    ];

    const tuesQuestions = [
        {
            summary: "How will my donation be used?",
            summaryID: "how-button",
            details: (
                <Typography className={classes.contentTextStyle}>
                    Clearviction is staffed by a group of dedicated volunteers, and any of our donations will go
                    directly to supporting efforts to give those convicted a fresh start.
                </Typography>
            ),
            detailsID: "how-paragraph",
        },
        {
            summary: "Who can donate?",
            summaryID: "who-button",
            details: (
                <Typography className={classes.contentTextStyle}>
                    Anyone and everyone! However, Clearviction does not accept donations that are made as a political
                    endorsement.
                </Typography>
            ),
            detailsID: "who-paragraph",
        },
        {
            summary: "Is is safe and secure for me to donate online?",
            summaryID: "safe-button",
            details: (
                <Typography className={classes.contentTextStyle}>
                    Clearviction utilizes Donorbox for safe an secure transactions. Donorbox's reliable security
                    includes two-factor authentication, data encryption, fraud detection, and the assurance that none of
                    your information is ever stored on Donorbox servers. For more information,
                    <Link href="https://donorbox.org/features#security_and_safety" underline="hover">
                        visit Donorbox.
                    </Link>
                </Typography>
            ),
            detailsID: "safe-paragraph",
        },
        {
            summary: "I need a record of my donation for tax purposes.",
            summaryID: "record-button",
            details: (
                <Typography className={classes.contentTextStyle}>
                    Donorbox automatically sends you a receipt of your donation, even if you wish to remain anonymous.
                    This receipt can be customized to include any information you require. Clearviction is an official
                    501(c)(3) non-profit and donations to clearviction are all tax deductible. Any donatoins greater
                    than or equal to $250 require a receipt.
                    <Link
                        href="mhttps://www.irs.gov/charities-non-profits/charitable-organizations/charitable-contributions-written-acknowledgments"
                        underline="hover"
                    >
                        View the IRS' requirements.
                    </Link>
                </Typography>
            ),
            detailsID: "record-paragraph",
        },
        {
            summary: "Can I make a donation by check?",
            summaryID: "check-button",
            details: (
                <>
                    <Typography className={classes.contentTextStyle}>
                        Yes, please make the check out to Clearviction and mail it to:
                    </Typography>
                    <Typography className={classes.contentTextStyle}>
                        Clearviction
                        <br />
                        802 5th Ave N, unit 213
                        <br />
                        Seattle, WA 98109
                    </Typography>
                </>
            ),
            detailsID: "check-paragraph",
        },
        {
            summary: "Who should I contact if I have more questions?",
            summaryID: "contact-button",
            details: (
                <Typography className={classes.contentTextStyle}>
                    You can send us an email at{" "}
                    <Link href="mailto:contact@clearviction.org" underline="hover">
                        contact@clearviction.org
                    </Link>{" "}
                    and we will get back to you within 24 hours.
                </Typography>
            ),
            detailsID: "contact-paragraph",
        },
    ];
    if (pathname === "/givingtuesday") {
        return <AccordionBuilder faqs={tuesQuestions} />;
    }
    return <AccordionBuilder faqs={questions} />;
};

export default DonateFAQAccordion;
