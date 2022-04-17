import { Grid, Typography } from "@material-ui/core";
import PrimaryButton from "../../ui-kit/PrimaryButton";
import { MainBranchTitleStyles } from "./MainBranchTitleStyles";
import ProgressBar from "../../Components/ProgressBar";
import { BackButton } from "../../ui-kit/BackButton";

const MainBranchTitle = (props) => {
  const classes = MainBranchTitleStyles();
  return (
    <Grid container className={classes.grid}>
      {props.progressBar && (
          <ProgressBar
            currentSectionName={props.progressBar.currentSectionName}
            currentSection={props.progressBar.currentSection}
            totalSections={props.progressBar.totalSections}
          />
      )}
      {props.backButton && (
        <Grid container className={classes.backButton}>
          <BackButton />
        </Grid>
      )}

      <Typography variant="h4" className={classes.header}>
        {props.header}
      </Typography>
     {props.body && <Typography variant="body1" className={classes.body}>
        {props.body[0].text}
      </Typography>}
      <PrimaryButton
        className={classes.button}
        text={props.buttonText}
        href={props.buttonHref}
      />
    </Grid>
  );
};

export default MainBranchTitle;
