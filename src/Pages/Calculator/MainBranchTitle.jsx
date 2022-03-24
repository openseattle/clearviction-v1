import { Grid, Typography } from "@material-ui/core";
import PrimaryButton from "../../ui-kit/PrimaryButton";
import { MainBranchTitleStyles } from "./MainBranchTitleStyles";

const MainBranchTitle = (props) => {
  const classes = MainBranchTitleStyles();
  return (
    <Grid container className={classes.grid}>
      <Typography variant="h4" className={classes.header}>
        {props.header}
      </Typography>
      <Typography variant="body1" className={classes.body}>
        {props.body}
      </Typography>
      <PrimaryButton
        className={classes.button}
        text={props.buttonText}
        href={props.buttonHref}
      />
    </Grid>
  );
};

export default MainBranchTitle;
