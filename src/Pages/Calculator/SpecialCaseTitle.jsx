import { Grid, Typography } from "@material-ui/core";
import { BackButton } from "../../ui-kit/BackButton";
import PrimaryButton from "../../ui-kit/PrimaryButton";
import { SpecialCaseTitleStyles } from "./SpecialCaseTitleStyles";

const SpecialCaseTitle = (props) => {
  const classes = SpecialCaseTitleStyles();
  return (
    <Grid container className={classes.grid}>
      <Grid container className={classes.backButton}>
        <BackButton />
      </Grid>
      <Typography variant="h6" className={classes.header}>
        {props.header}
      </Typography>
      <Grid item className={classes.bodyGrid}>
        {props.body.map((b, idx) => {
          return (
            <Typography key={idx} variant="body1" className={classes.body}>
              {b.text}
            </Typography>
          );
        })}
      </Grid>
      <PrimaryButton
        className={classes.button}
        text={props.buttonText}
        href={props.buttonHref}
      />
    </Grid>
  );
};

export default SpecialCaseTitle;
