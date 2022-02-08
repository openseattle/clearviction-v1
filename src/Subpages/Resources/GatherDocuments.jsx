import { Container, Typography } from "@material-ui/core";
import TabPanelGroup from "../../Components/TabPanelGroup";
import AlternativeAccord from "../../Components/AlternativeAccord";
import BackgroundReportHelp from "./BackgroundReportHelp";
import { useResourcesStyles } from "../../Styles/useResourcesStyles";
import BulletedListMui from "../../ui-kit/BulletedListMui";
import { ExternalLink } from "../../ui-kit/ExternalLink";

const nwJusticeProjectLink = (
  <ExternalLink href="https://www.washingtonlawhelp.org/files/C9D2EA3F-0350-D9AF-ACAE-BF37E9BC9FFA/attachments/21968678-A4F9-42E5-BA32-58826390C62D/8705en_get-misdemeanor-convictions-off-criminal-record.pdf">
    Vacation packet from Northwest Justice Project
  </ExternalLink>
);
const courtsWALink = (
  <ExternalLink href="https://www.courts.wa.gov/forms/documents/CR08.0670_Obtaining a Certificate of Discharge_2019 07.pdf">
    This packet
  </ExternalLink>
);

const teamChildLink = (
  <ExternalLink href="https://teamchild.org/wp-content/uploads/2019/03/Sealing-Juvenile-Court-Records-in-Washington-State-2018.pdf">
    packet from TeamChild
  </ExternalLink>
);

const kingCourtLink = (
  <ExternalLink href="https://kingcounty.gov/~/media/courts/superior-court/docs/juvenile/juvenile-forms/10-sealing-records-instructions-and-forms-pdf-web.ashx?la=en">
    packet from King County Superior Court
  </ExternalLink>
);

const waCourtFormsLink = (
  <ExternalLink href="https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38">
    Here you can find a full list of all Washington state court forms
  </ExternalLink>
);

const misdemeanorDetails = (
  <div>
    <Typography>
      {nwJusticeProjectLink} with details about the eligibility to vacate (p.
      2-4) and the needed court forms (p. 5-13).
    </Typography>
  </div>
);

const marijuanaDetails = (
  <Typography>
    {nwJusticeProjectLink} with the steps to vacate (p. 2-6), all necessary
    court documents (p. 8-13) and a sample letter for WSP to seal your record
    (p. 7).
  </Typography>
);

const prostitutionDetails = (
  <Typography>
    If you were a victim of trafficking, you can use this {nwJusticeProjectLink}{" "}
    with info on the eligibility to vacate (p. 1-3), steps to take (p. 4-8),
    court forms (p. 10-18) and a sample letter for WSP (p. 9).
  </Typography>
);

const nonViolentDetails = (
  <div>
    <Typography>
      {nwJusticeProjectLink} including an overview of the eligibility to vacate
      (p. 3-5), steps to vacate (p. 7-12), all necessary court documents (p.
      13-23) and a sample letter to WSP (p.24).
    </Typography>
    <br />
    <Typography>
      To vacate a felony conviction, you will also need a Certificate of
      Discharge. If the court has not issued the Certificate of Discharge yet,
      you must file for a certificate before you can vacate the felony.{" "}
      {courtsWALink} will assist you to obtain a Certificate of Discharge in
      Washington State.
    </Typography>
  </div>
);

const fishingDetails = (
  <Typography>
    {nwJusticeProjectLink} including an overview of the eligibility to vacate
    (p.1-2), steps to take (p. 3-7), all court forms (p. 8-16), and a sample
    letter for WSP (p. 17).
  </Typography>
);

const juvenileDetails = (
  <BulletedListMui>
    <li>
      Detailed {teamChildLink} containing all court documents (p. 30-40), sample
      letters to WSP and JRA (p. 41-42), and the specific practices per county
      (p. 19-27).
    </li>
    <li>
      The {kingCourtLink} briefly describes the procedure to vacate and contains
      all necessary court documents (p. 11-17) and a sample of how to fill in
      the court documents (p. 4-9).
    </li>
  </BulletedListMui>
);

const allFormsDetails = (
  <div>
    <Typography>{waCourtFormsLink} to vacate a record.</Typography>
    <br />
    <Typography>
      If you are looking for the general forms to vacate a record, use these
      forms: <br />- CrRLJ 09.01000: Motion and Declaration for Order Vacating
      Conviction <br />- CrRLJ 09.0200: Proposed Order
    </Typography>
    <br />
    <Typography style={{ fontSize: "10px" }}>
      A WORD OF CAUTION: If you use a form in MS Word format, please be advised
      that the version of Word you are using may affect the layout of the
      document. The completed document should conform to all rules governing
      acceptable document format (see{" "}
      <ExternalLink href="https://www.courts.wa.gov/court_rules/pdf/GR/GA_GR_14_00_00.pdf">
        General Rule 14
      </ExternalLink>
      ) - source:{" "}
      <ExternalLink href="https://kingcounty.gov/courts/superior-court/juvenile.aspx">
        {" "}
        King County Juvenile Court
      </ExternalLink>
    </Typography>
  </div>
);
const courtFormsFaqs = [
  {
    summary: "(Gross) Misdemeanor Conviction",
    details: misdemeanorDetails,
  },
  {
    summary: "Marijuana Misdemeanor Conviction",
    details: marijuanaDetails,
  },
  {
    summary: "Prostitution Conviction",
    details: prostitutionDetails,
  },
  {
    summary: "Non-Violent Class B or C Felony Conviction",
    details: nonViolentDetails,
  },
  {
    summary: "Conviction about Treaty to Indian Fishing",
    details: fishingDetails,
  },
  {
    summary: "Juvenile Conviction Records",
    details: juvenileDetails,
  },
  {
    summary: "Other (View all State Court Forms)",
    details: allFormsDetails,
  },
];

const gatherDocumentsTabGroup = [
  {
    index: 0,
    label: "Court Forms",
    content: (
      <AlternativeAccord
        sectionHeading={"Resources to Vacate: "}
        faqs={courtFormsFaqs}
      />
    ),
  },
  { index: 1, label: "My Records", content: <BackgroundReportHelp /> },
];
export const GatherDocuments = () => {
  const classes = useResourcesStyles();
  return (
    <Container maxWidth={"sm"}>
      <Typography className={classes.headingStyle} variant={"h2"}>
        Step 1: Gather Documents
      </Typography>
      <Typography className={classes.contentTextStyle} variant={"body1"}>
        Gathering documents is the first step in the process. This includes any
        forms or records that pertain to your conviction. Please refer to ‘Court
        Forms’ and ‘My Records’ below.
      </Typography>
      <TabPanelGroup tabs={gatherDocumentsTabGroup} />
    </Container>
  );
};
