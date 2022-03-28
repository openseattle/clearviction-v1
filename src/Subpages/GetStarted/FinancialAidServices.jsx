import { Grid, Link, List, ListItem, Typography } from "@material-ui/core";
import FactExpandMoreCard from "../../Components/FactExpandMoreCard";
import { ExternalLink } from "../../ui-kit/ExternalLink";

const faFacts = [
  {
    id: "fa0",
    summary: "Legal Financial Obligations (LFOs)",
    content: (
      <>
        <Typography variant="caption">
          You may be eligible for financial assistance of fees, fines, or
          restitution for a misdemeanor or felony:
        </Typography>
        <Typography component="ul" variant="caption">
          <li> • CLEAR hotline - refer you to legal organizations</li>
          <li>
            • Re-Entry Clinic - a joint project of Columbia Legal Services and
            FareStart, focusing on legal issues related to LFO’s
          </li>
          <li>
            • Contact us at contact@cvp.com and we will get back to you within
            24 hours.
          </li>
        </Typography>
        <Typography variant="caption">
          If you want more info about your rights concerning LFOs, consult the
          website of Washington LawHelp.
        </Typography>
      </>
    ),
  },
  {
    id: "fa1",
    summary: "Court Fees",
    content: (
      <>
        <Typography variant="caption">
          • Use this{" "}
          <ExternalLink href="https://www.washingtonlawhelp.org/files/C9D2EA3F-0350-D9AF-ACAE-BF37E9BC9FFA/attachments/3928A184-D6E5-9324-4FB9-495A060A017B/3204en_filing-motion-for-fee-waiver.pdf">
            {" "}
            packet from WashingtonlawHelp
          </ExternalLink>{" "}
          to find out if you are eligible to waive your fees (p. 1-2). It also
          includes the instructions to ask for a fee waiver (p. 4-9) and all
          necessary forms (p. 10-14). If you have trouble filling out the
          documents, use this website created by Northwest Justice to help fill
          out the documents for free.
        </Typography>
      </>
    ),
  },
];
const FinancialAidServices = () => {
  return (
    <>
      <Grid container>
        {faFacts.map((fact) => (
          <Grid key={fact.id} item xs={12} sm={6} md={4}>
            <FactExpandMoreCard summary={fact.summary} content={fact.content} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default FinancialAidServices;
