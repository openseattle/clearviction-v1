import { Grid, Link, Typography } from "@material-ui/core";
import FactExpandMoreCard from "../../Components/FactExpandMoreCard";

const northwestJusticeCenterPacket = text => (
    <Link href="https://www.washingtonlawhelp.org/files/C9D2EA3F-0350-D9AF-ACAE-BF37E9BC9FFA/attachments/21968678-A4F9-42E5-BA32-58826390C62D/8705en_get-misdemeanor-convictions-off-criminal-record.pdf">
        {text}
    </Link>
);
const certificateOfDischargeForm = text => (
    <Link href="https://www.courts.wa.gov/forms/documents/CR08.0670_Obtaining a Certificate of Discharge_2019 07.pdf">
        {text}
    </Link>
);
const teamChildPacket = text => (
    <Link href="https://teamchild.org/wp-content/uploads/2019/03/Sealing-Juvenile-Court-Records-in-Washington-State-2018.pdf">
        {text}
    </Link>
);
const kingCountySealJuvenileRecords = text => (
    <Link href="https://kingcounty.gov/~/media/courts/superior-court/docs/juvenile/juvenile-forms/10-sealing-records-instructions-and-forms-pdf-web.ashx?la=en">
        {text}
    </Link>
);

const courtFormsFacts = [
    {
        id: "cf0",
        summary: "(Gross) Misdemeanor Convictions",
        content: (
            <Typography variant="body2">
                {northwestJusticeCenterPacket("Vacation packet from Northwest Justice Project")} with details about the
                eligibility to vacate (p. 2-4) and the needed court forms (p. 5-13).
            </Typography>
        ),
    },
    {
        id: "cf1",
        summary: "Marijuana Misdemeanors",
        content: (
            <Typography variant="body2">
                {northwestJusticeCenterPacket("Vacation packet from Northwest Justice Project")} with the steps to
                vacate (p. 2-6), all necessary court documents (p. 8-13) and a sample letter for WSP to seal your record
                (p. 7).
            </Typography>
        ),
    },
    {
        id: "cf2",
        summary: "Prostitution Convictions",
        content: (
            <Typography variant="body2">
                If you were a victim of trafficking, you can use this{" "}
                {northwestJusticeCenterPacket("vacation packet from Northwest Justice Project")} with info on the
                eligibility to vacate (p. 1-3), steps to take (p. 4-8), court forms (p. 10-18) and a sample letter for
                WSP (p. 9).
            </Typography>
        ),
    },
    {
        id: "cf3",
        summary: "Non-Violent Class B or C Felony",
        content: (
            <Typography variant="body2">
                {northwestJusticeCenterPacket("Vacation packet from Northwest Justice Project")} including an overview
                of the eligibility to vacate (p. 3-5), steps to vacate (p. 7-12), all necessary court documents (p.
                13-23) and a sample letter to WSP (p.24).
                <br />
                <br />
                To vacate a felony conviction, you will also need a Certificate of Discharge. If the court has not
                issued the Certificate of Discharge yet, you must file for a certificate before you can vacate the
                felony. {certificateOfDischargeForm("This packet")} will assist you to obtain a Certificate of Discharge
                in Washington State.
            </Typography>
        ),
    },
    {
        id: "cf4",
        summary: "Treaty to Indian Fishing Convictions",
        content: (
            <Typography variant="body2">
                {northwestJusticeCenterPacket("Vacation packet from Northwest Justice Project")} including an overview
                of the eligibility to vacate (p.1-2), steps to take (p. 3-7), all court forms (p. 8-16), and a sample
                letter for WSP (p. 17).
            </Typography>
        ),
    },
    {
        id: "cf5",
        summary: "Juvenile Conviction Records",
        content: (
            <>
                <Typography variant="body2">
                    Detailed {teamChildPacket("packet from TeamChild")} containing all court documents (p. 30-40),
                    sample letters to WSP and JRA (p. 41-42), and the specific practices per county (p. 19-27).
                </Typography>
                <Typography variant="body2">
                    The {kingCountySealJuvenileRecords("packet from King County Superior Court")} briefly describes the
                    procedure to vacate and contains all necessary court documents (p. 11-17) and a sample of how to
                    fill in the court documents (p. 4-9).
                </Typography>
            </>
        ),
    },
];
const CourtFormsFactGroup = () => {
    return (
        <>
            <Grid container>
                {courtFormsFacts.map(fact => (
                    <Grid key={fact.id} item xs={12} sm={6} md={4}>
                        <FactExpandMoreCard summary={fact.summary} content={fact.content} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default CourtFormsFactGroup;
