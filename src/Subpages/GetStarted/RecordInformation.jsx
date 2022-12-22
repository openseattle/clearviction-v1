import { Grid, Typography, Link } from "@mui/material";
import FactExpandMoreCard from "../../Components/FactExpandMoreCard";
import { ExternalLink } from "../../ui-kit/ExternalLink";

const chriInfo = [
    {
        id: "chri0",
        summary: "“Unofficial” Copy Through W.A.T.C.H",
        content: (
            <Typography variant="body2">
                {" "}
                Get an{" "}
                <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://watch.wsp.wa.gov/WATCH/Home/Notice?ReturnPage=%2FHome%2FIndex"
                    underline="hover"
                >
                    “unofficial” copy through WATCH
                </Link>{" "}
                for a $11.00 fee. This report is not always accurate so you should ask the prosecutor.{" "}
            </Typography>
        ),
    },
    {
        id: "chri1",
        summary: "Official Record Review (Fingerprint Card)",
        content: (
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
        ),
    },
];
const RecordInformation = () => {
    return (
        <Grid container>
            {chriInfo.map(fact => (
                <Grid key={fact.id} item xs={12} sm={6} md={6}>
                    <FactExpandMoreCard summary={fact.summary} content={fact.content} />
                </Grid>
            ))}
        </Grid>
    );
};

export default RecordInformation;
