import { Typography, List, ListItem, } from "@material-ui/core";

const BackgroundReportHelp = () => {
  return (
    <div style={{padding: "24px"}}>
      <Typography style={{paddingBottom: "36px"}} variant="h3">Criminal Background Report</Typography>
      <Typography variant="body1">
        You might need a copy of your Criminal History Record Information (CHRI)
        to vacate your record. There are two options:
      </Typography>
      <List>
        <ListItem>
          <Typography>
            Get an “unofficial” copy through WATCH for a $11.00 fee. This report
            is not always accurate as it is not based on fingerprint
            verification. Ask the prosecutor if this option is acceptable.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            If the WATCH printout is not good enough, go to your local police or
            sheriff’s office for an official “record review/challenge”
            fingerprint card.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            Next, write Washington State Patrol (WSP) a letter asking them to
            send an official copy of your complete CHRI. Explain it is for a
            motion to vacate criminal history records. Include the fingerprint
            card and a $12 money order. Send everything to:
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <i>
              Washington State Patrol Identification
              <br />
              and Background Section <br />
              PO Box 42633 <br />
              Olympia WA 98504-2633
            </i>
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            A copy of your CHRI will be returned to the address on the
            fingerprint card. If you have not gotten the report after eight
            weeks, call them at (360) 534-2000.
          </Typography>
        </ListItem>
      </List>
    </div>
  );
};

export default BackgroundReportHelp;
