import { Typography, } from "@material-ui/core";
import { useResourcesStyles } from "../../Styles/useResourcesStyles";
import BulletedListMui from "../../ui-kit/BulletedListMui";

const BackgroundReportHelp = () => {
  const classes = useResourcesStyles();
  return (
    <div className={classes.reportStyle}>
      <Typography className={classes.reportHeading} variant="h3">
        Criminal Background Report
      </Typography>
      <Typography variant="body1">
        You might need a copy of your Criminal History Record Information (CHRI)
        to vacate your record. There are two options:
      </Typography>
      <BulletedListMui>
        <li className={classes.listItemsStyle}>
          Get an “unofficial” copy through WATCH for a $11.00 fee. This report
          is not always accurate as it is not based on fingerprint verification.
          Ask the prosecutor if this option is acceptable.
        </li>
        <Typography variant="h4" align="center">
          OR
        </Typography>
        <li className={classes.listItemsStyle}>
          If the WATCH printout is not good enough, go to your local police or
          sheriff’s office for an official “record review/challenge” fingerprint
          card.
        </li>
        <li className={classes.listItemsStyle}>
          Next, write Washington State Patrol (WSP) a letter asking them to send
          an official copy of your complete CHRI. Explain it is for a motion to
          vacate criminal history records. Include the fingerprint card and a
          $12 money order. Send everything to:
        </li>
        <li className={classes.listItemsStyle}>
          <i>
            Washington State Patrol Identification
            <br />
            and Background Section <br />
            PO Box 42633 <br />
            Olympia WA 98504-2633
          </i>
        </li>
        <li className={classes.listItemsStyle}>
          A copy of your CHRI will be returned to the address on the fingerprint
          card. If you have not gotten the report after eight weeks, call them
          at (360) 534-2000.
        </li>
      </BulletedListMui>
    </div>
  );
};

export default BackgroundReportHelp;
