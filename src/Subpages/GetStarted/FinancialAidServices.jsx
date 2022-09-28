import { Grid, Link, List, ListItem, Typography } from "@mui/material";
import FactExpandMoreCard from "../../Components/FactExpandMoreCard";
import { ExternalLink } from "../../ui-kit/ExternalLink";

const faFacts = [
    {
        id: "fa0",
        summary: "Legal Financial Obligations (LFOs)",
        content: (
            <>
                <Typography variant="body2">
                    You may be eligible for financial assistance of fees, fines, or restitution for a misdemeanor or
                    felony:
                </Typography>
                <Typography component="ul" variant="body2">
                    <li>
                        {" "}
                        <ExternalLink href="https://nwjustice.org/clear-hotline">CLEAR hotline</ExternalLink> - refer
                        you to legal organizations
                    </li>
                    <li>
                        {" "}
                        <ExternalLink href="https://columbialegal.org/wp-content/uploads/2019/10/CLS-Re-Entry-Clinic-Brochure.pdf">
                            Re-Entry Clinic
                        </ExternalLink>{" "}
                        - a joint project of Columbia Legal Services and FareStart, focusing on legal issues related to
                        LFO’s
                    </li>
                    <li>Contact us at contact@cvp.com and we will get back to you within 24 hours.</li>
                </Typography>
                <Typography variant="body2">
                    If you want more info about your rights concerning LFOs, consult the website of{" "}
                    <ExternalLink href="https://www.washingtonlawhelp.org/issues/criminal/legal-financial-obligations-restitution-reduc-1?location=Yakima%20County">
                        Washington LawHelp
                    </ExternalLink>{" "}
                    .
                </Typography>
            </>
        ),
    },
    {
        id: "fa1",
        summary: "Court Fees",
        content: (
            <>
                <Typography variant="body2" component="ul">
                    <li>
                        Use this{" "}
                        <ExternalLink href="https://www.washingtonlawhelp.org/files/C9D2EA3F-0350-D9AF-ACAE-BF37E9BC9FFA/attachments/3928A184-D6E5-9324-4FB9-495A060A017B/3204en_filing-motion-for-fee-waiver.pdf">
                            {" "}
                            packet from Washington Law Help
                        </ExternalLink>{" "}
                        to find out if you are eligible to waive your fees (p. 1-2).
                    </li>
                    <li>
                        It also includes the instructions to ask for a fee waiver (p. 4-9) and all necessary forms (p.
                        10-14).
                    </li>
                    <li>
                        If you have trouble filling out the documents, use this website created by Northwest Justice{" "}
                        <ExternalLink href="https://lawhelpinteractive.org/Interview/GenerateInterview/7063/engine">
                            to help fill out the documents for free
                        </ExternalLink>
                        .
                    </li>
                </Typography>
            </>
        ),
    },
];
const FinancialAidServices = () => {
    return (
        <>
            <Grid container>
                {faFacts.map(fact => (
                    <Grid key={fact.id} item xs={12} sm={6} md={4}>
                        <FactExpandMoreCard summary={fact.summary} content={fact.content} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default FinancialAidServices;
