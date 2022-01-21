import { Box, Container, Grid, Typography } from "@material-ui/core";
import FactGroup from "../Components/FactGroup";
import timeGraphic from "../Assets/time.svg";
import emails from "../Assets/sending_emails.svg";
import question from "../Assets/question.svg";
import { TextWithCTAButton } from "../Subpages/WhyVacate/TextWithCTAButton";
import AlternativeAccord from "../Components/AlternativeAccord";
import { WhyVacateEmploymentStyles } from "../Styles/WhyVacateEmploymentStyle";

const unemployment = {
  graphic: timeGraphic,
  title: "Long unemployment periods",
  text: "Getting back into society may not happen as quickly as most would prefer. Jobs in the manufacturing industry or part-time jobs can help.",
};
const rejected = {
  graphic: emails,
  title: "Rejected Applications",
  text: "These are a common circumstance for people who have previously been convicted of significant criminal offenses.",
};
const education = {
  graphic: question,
  title: "Lack of education or experience",
  text: "Getting a job in a new field can be complicated, especially with convictions in your record.",
};

const friendlyIndustries = [
  {
    summary: "Virtual jobs and freelancing companies",
    details:
      "Virtual jobs usually do not need background checks, and a strong portfolio should suffice.",
  },
  {
    summary: "Manufacturing companies",
    details:
      "Manufacturing companies are about the most accessible places for a people withe felonies, immigrants, and even fugitives to find employment. It’s no surprise that there’s always a job vacancy in this industry. Employers in manufacturing industries only care about getting the job done and may not have any interest in a background check.",
  },
  {
    summary: "H.R. Agents",
    details:
      "There are many advantages of using outsourced human resource agencies to seek employment in companies. Most jobs found through these agencies are temporary but can do well to strengthen a CV. If you’re good enough, H.R. agencies will protect your interest, for their reputation and profit. ",
  },
  {
    summary: "Online marketing professionals",
    details:
      "The surge in the number of businesses using online marketing in the last decade is a huge advantage for job seekers. Someone with a felony who also has a reasonable level of knowledge and experience would have no problem with background checks. In most cases, if the crime of their felony is not related to online frauds and manipulations, hiring won’t be a complicated process.",
  },
  {
    summary: "Oil and gas professionals",
    details:
      "The oil and gas industry offers endless opportunities for job seekers at any level.",
  },
  {
    summary: "App and software development companies",
    details:
      "Mobile applications and software developers are some of the highly sought-after professionals in the United States. Every business that takes online marketing seriously has mobile apps. Technology companies that offer mobile app development and software services are always on the lookout for the best talents in the industry. If you have what it takes, your felony will not always come in your way of getting jobs like this one.",
  },
  {
    summary: "Computer repair technician jobs",
    details:
      "Computer repair technicians are estimated to grow by more than 8.2 percent over the next decades. In 2016 alone, the number of computer technicians was 69,030 in California, 43,800 in New York, 21,700 and 6,420 in North Carolina and South Carolina, respectively, as well as over 500,000 more all over the United States.",
  },
  {
    summary: "Retail companies",
    details:
      "Retail companies will hire people with felonies, but are less likely to hire people with a records of theft or violence.",
  },
  {
    summary: "Transport companies",
    details:
      "People with felonies can find job opportunities in the transport industry as drivers, carriers, and delivery guys.",
  },
  {
    summary: "Food services and grocery stores",
    details: "Missing",
  },
];

const WhyVacateEmployment = () => {
  const classes = WhyVacateEmploymentStyles();
  return (
    <Container maxWidth="lg">
      <Grid container alignItems="flex-start">
        <Typography className={classes.title} variant="h2">
          Employment barriers
        </Typography>
        <Typography className={classes.contentText} variant="body1">
          Simply having a conviction does not prevent you from having a job,
          however, it can be more difficult depending on the type of job and the
          employer. It is important to not lose hope while facing challenges
          such as:
        </Typography>
        </Grid>
      <FactGroup fact1={unemployment} fact2={rejected} fact3={education} />
      <TextWithCTAButton
        text={
          "The best way to avoid these obstacles is to expunge your record by vacating your conviction. Learn if you’re eligible with our Misdemeanor Eligibility Calculator."
        }
        buttonText={"Check Elegibility"}
      />
      <Box className={classes.lightBlueSectionBackground}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box className={classes.spacer}>
              <Typography className={classes.emphasizedText} variant="h1">
                2/3
              </Typography>
              <Typography className={classes.regularText}>
                of ex-prisoners remain out of work a year after prison release,
                and 60 percent are rearrested within three years
              </Typography>
              <Typography className={classes.regularText}>
                Those that can find steady work are less likely to return to
                prison
              </Typography>

              <Typography className={classes.citeText}>
                {" "}
                (Bureau of Justice Statistics 2002; Petersilia 2003; Travis
                2005).
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box className={classes.spacer}>
              <Typography className={classes.emphasizedText} variant="h1">
                -50%
              </Typography>
              <Typography className={classes.regularText}>
                A criminal record reduces the likelihood of a callback or job
                offer by nearly 50 percent (28 vs. 15 percent).
              </Typography>
              <Typography className={classes.regularText}>
                Furthermore, the negative effect of a criminal conviction is
                substantially larger for Black people than for White people.
              </Typography>

              <Typography className={classes.citeText}>
                (Lopoo and Western 2005; Sampson and Laub 1993; Uggen 2000).
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <AlternativeAccord
        sectionHeading={"Conviction-friendly industries"}
        faqs={friendlyIndustries}
      />
    </Container>
  );
};

export default WhyVacateEmployment;
