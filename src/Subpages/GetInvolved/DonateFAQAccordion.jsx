import { Link, Typography } from "@mui/material";
import AccordionBuilder from "../../Components/AccordionBuilder";
import { ExternalLink } from "../../ui-kit/ExternalLink";
import { useHomeStyles } from "../../Styles/useHomeStyles";

const DonateFAQAccordion = () => {
    const classes = useHomeStyles();

    const questions = [
        {
            summary: "How will my donation be used?",
            summaryID: "donation-button",
            details: (
                <Typography className={classes.contentTextStyle}>
                    Clearviction is staffed by a group of dedicated volunteers, and any of our donations will go
                    directly to supporting efforts to give those convicted a fresh start.
                </Typography>
            ),
            detailsID: "donation-paragraph",
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
            summary: "Is it safe and secure for me to donate online?",
            summaryID: "safe-button",
            details: (
                <>
                    <Typography className={classes.contentTextStyle}>
                        Clearviction utilizes Donorbox for safe and secure transactions. Donorbox’s reliable security
                        includes two-factor authentication, data encryption, fraud detection, and the assurance that
                        none of your information is ever stored on Donorbox servers.
                    </Typography>
                    <Typography className={classes.contentTextStyle}>
                        For more information, visit Donorbox:{" "}
                        <ExternalLink href="https://donorbox.org/">https://donorbox.org/</ExternalLink>
                    </Typography>
                </>
            ),
            detailsID: "safe-paragraph",
        },
        {
            summary: "I need a record of my donation for tax purposes",
            summaryID: "tax-button",
            details: (
                <>
                    <Typography className={classes.contentTextStyle}>
                        Donorbox automatically sends you a receipt of your donation, even if you wish to remain
                        anonymous. This receipt can be customized to include any information you require.
                    </Typography>
                    <Typography className={classes.contentTextStyle}>
                        Clearviction is an official 501(c)(3) non-profit and donations to Clearviction are all tax
                        deductible. Any donations greater than or equal to $250 require a receipt. View the IRS’
                        requirements.
                    </Typography>
                </>
            ),
            detailsID: "tax-paragraph",
        },
        {
            summary: "Can I make a donation by check?",
            summaryID: "check-button",
            details: (
                <>
                    <Typography>
                        Donorbox has the capability for direct ACH payments, but you are still welcome to mail a check.
                        Please make the check out to Clearviction and mail it to:
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

    return <AccordionBuilder faqs={questions} />;
};

export default DonateFAQAccordion;
