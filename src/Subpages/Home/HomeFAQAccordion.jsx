import { Typography } from "@material-ui/core";
import AccordionBuilder from "../../Components/AccordionBuilder";
import { ExternalLink } from "../../ui-kit/ExternalLink";
import { useHomeStyles } from "../../Styles/useHomeStyles";

const HomeFAQAccordion = () => {
  const classes = useHomeStyles();

  const questions = [
    {
      summary: "What does it mean to vacate a conviction?",
      details: (
        <>
          <Typography className={classes.contentTextStyle}>
            Vacating a conviction is the process of clearing a conviction from
            your record so it is not visible to the public any more. Vacating
            your conviction can remove that crime from some background checks,
            and you can say legally that you were never convicted of that crime.
          </Typography>
          <Typography className={classes.contentTextStyle}>
            The courts can still reference a vacated conviction in a future
            criminal proceeding, and not all convictions are eligible for
            vacation.
          </Typography>
        </>
      ),
    },
    {
      summary: "Why should I consider vacating my conviction?",
      details: (
        <>
          <Typography className={classes.contentTextStyle}>
            If you are convicted of a crime, your criminal record will continue
            to show that conviction in background checks. Having a criminal
            record might negatively affect your housing, employment, and
            educational opportunities.
          </Typography>

          <Typography className={classes.contentTextStyle}>
            If you are experiencing this, vacating your conviction removes that
            crime from background checks, and you can say legally that you were
            never convicted of that crime. This can help you get access to
            housing, education, employment, volunteering opportunities, and
            more.
          </Typography>
        </>
      ),
    },
    {
      summary: "How do I know if my conviction is eligible to vacate?",
      details: (
        <>
          <Typography className={classes.contentTextStyle}>
            There are specific criteria that your conviction must meet, to be
            eligible to vacate.
          </Typography>
          <Typography className={classes.contentTextStyle}>
            For misdemeanors, you can use our eligibility calculator to know if
            you are eligible.
          </Typography>
          <Typography className={classes.contentTextStyle}>
            For Felonies, please refer to{" "}
            <ExternalLink
              href={"https://apps.leg.wa.gov/RCW/default.aspx?cite=9.94a.640"}
            >
              RCW 9.94A.640
            </ExternalLink>
            . An easy to read resource to understand your eligibility is
            available at{" "}
            <ExternalLink
              href={"https://www.washingtonlawhelp.org/search?q=vacation"}
            >
              Washington Law Help
            </ExternalLink>
            .
          </Typography>
        </>
      ),
    },
    {
      summary:
        "If my conviction meets the eligibility criteria, does that guarantee that I can vacate it?",
      details: (
        <>
          <Typography className={classes.contentTextStyle}>
            A request to vacate may be denied for other reasons, and is up to
            the discretion of the judge. The most common reasons that a request
            can be denied is if:
          </Typography>
          <Typography className={classes.contentTextStyle}>
            (1) the court does not believe that vacating your conviction will be
            in the interest of society,
          </Typography>
          <Typography className={classes.contentTextStyle}>
            (2) you violated probation or have not paid off your fines,
          </Typography>
          <Typography className={classes.contentTextStyle}>
            (3) you are otherwise not eligible to vacate that particular
            conviction, or
          </Typography>
          <Typography className={classes.contentTextStyle}>
            (4) there was an inaccuracy in the court records and/or the
            application.
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
      summary: "What happens after my conviction is vacated?",
      details: (
        <>
          <Typography className={classes.contentTextStyle}>
            You will receive a court order vacating the conviction—which has the
            effect of withdrawing the guilty judgment and dismissing the charges
            against you. You can then legally state that you were not convicted
            of the offense.
          </Typography>
        </>
      ),
    },
    {
      summary: "Does vacating a conviction make it disappear from my record?",
      details: (
        <>
          <Typography className={classes.contentTextStyle}>No.</Typography>
          <Typography className={classes.contentTextStyle}>
            Your conviction will still be in court records and computerized
            court indexes to court records. If a conviction was a domestic
            violence case, these records and indexes will still show the case
            type.
          </Typography>
          <Typography className={classes.contentTextStyle}>
            Information about the court records from the cases that led to the
            convictions are still public. You can still find them on{" "}
            <ExternalLink href="https://www.courts.wa.gov">
              www.courts.wa.gov
            </ExternalLink>
            .
          </Typography>
          <Typography className={classes.contentTextStyle}>
            Prosecutors can still use evidence of vacated convictions in a later
            criminal prosecution. They can still use them in a sexually violent
            predator commitment proceeding.
          </Typography>
          <Typography className={classes.contentTextStyle}>
            FBI records and private background check records may still have
            information about the convictions.
          </Typography>
        </>
      ),
    },
  ];
  return <AccordionBuilder faqs={questions} />;
};

export default HomeFAQAccordion;
