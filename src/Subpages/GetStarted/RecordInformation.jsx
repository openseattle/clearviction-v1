import { Grid, Typography, Link } from "@mui/material";
import FactExpandMoreCard from "../../Components/FactExpandMoreCard";

const chriInfo = [
    {
        id: "chri0",
        summary: "“Unofficial” Copy Through W.A.T.C.H",
        price: "$11",
        turnaround: "Estimated Turnaround: Instant",
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
        price: "$30 - $70",
        turnaround: "Estimated Turnaround: 2 weeks",
        content: (
            <Typography variant="body2">
                If the WATCH printout is not good enough, go to your local police or sheriff’s office for an official
                “record review/challenge” fingerprint card.
                <br />
                <br />
                Next, write WSP a letter asking them to send an officialcopy of your complete CHRI. Include the
                fingerprint card and a money order. A copy of your CHRI will be returned to the address on the
                fingerprint card. Send everything to:
                <br />
                <br />
                Washington State Patrol Identification and Background Section <br />
                PO Box 42633 <br />
                Olympia WA 98504-2633
            </Typography>
        ),
    },
];
const RecordInformation = () => {
    return (
        <Grid container>
            {chriInfo.map(fact => (
                <Grid key={fact.id} item xs={12} sm={6} md={6}>
                    <FactExpandMoreCard
                        summary={fact.summary}
                        content={fact.content}
                        price={fact.price}
                        turnaround={fact.turnaround}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default RecordInformation;
