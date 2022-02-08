import { Box, Container, Typography } from "@material-ui/core";
import AlternativeAccord from "../../Components/AlternativeAccord";
import { useResourcesStyles } from "../../Styles/useResourcesStyles";

const restrictions = [
  {
    summary: "Financial aid restrictions for drug-related convictions:",
    details: (
      <div>
        <Typography variant="body2">
          When applying for aid, you will be asked whether you had a drug
          conviction for an offense that occurred while you were receiving
          federal student aid. If the answer is yes, you will be provided a
          worksheet to help you determine whether your conviction affects your
          eligibility for federal student aid. Note: this restriction only
          applies if you were already receiving federal student aid when you
          were convicted.
        </Typography>
        <br />
        <Typography variant="body2">
          Even if you are not immediately eligible, this may not be permanent.
          For example, if you have a conviction for possession, your eligibility
          for financial aid resumes after one year for a first offense or two
          years for a second offense. After a third offense, you will remain
          ineligible indefinitely. For a sale conviction, eligibility resumes
          after two years for a first offense, but ineligibility is indefinite
          for a second offense.
        </Typography>
        <br />
        <Typography variant="body2">
          If your eligibility for federal student aid has been suspended due to
          a drug conviction, you can regain eligibility early by successfully
          completing an approved drug rehabilitation program or by passing two
          unannounced drug tests administered by an approved drug rehabilitation
          program. If you regain eligibility during the award year, notify your
          financial aid office immediately.
        </Typography>
      </div>
    ),
  },
  {
    summary: "Financial aid restrictions and sexual offense convictions: ",
    details: (
      <Typography variant="body2">
        Other funding restrictions apply to some sex offenses. If you have been
        convicted of a forcible or non-forcible sexual offense, and you are
        subject to an involuntary civil commitment upon completion of a period
        of incarceration for that offense, you cannot receive a Federal Pell
        Grant.
      </Typography>
    ),
  },
];

const FedAidRestrictions = () => {
  const classes = useResourcesStyles();
  return (
    <Box className={classes.darkBlueBackground}>
      <Container maxWidth="md">
        <Typography
          className={classes.headingStyle}
          variant="h3"
          align="center"
        >
          Restrictions on recieving federal aid
        </Typography>
        <AlternativeAccord faqs={restrictions} />
      </Container>
    </Box>
  );
};

export default FedAidRestrictions;
