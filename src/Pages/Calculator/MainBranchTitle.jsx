import { Grid, Typography } from "@material-ui/core";
import PrimaryButton from "../../ui-kit/PrimaryButton";
import { MainBranchTitleStyles } from "./MainBranchTitleStyles";
import { BackButton } from "../../ui-kit/BackButton";
import ProgressBar from "../../Components/ProgressBar";

const MainBranchTitle = props => {
    const classes = MainBranchTitleStyles();
    return (
        <Grid container className={classes.grid}>
            {props.progressBar && <ProgressBar currentSectionName={props.progressBar.currentSectionName} />}

            {props.backButton && (
                <Grid container className={classes.backButton}>
                    <BackButton />
                </Grid>
            )}

            <Typography variant="h4" className={classes.header}>
                {props.header}
            </Typography>
            {props.body && (
                <Typography variant="body1" className={classes.body}>
                    {props.body[0].text}
                </Typography>
            )}
            <PrimaryButton className={classes.button} text={props.buttonText} href={props.buttonHref} />
        </Grid>
    );
};

export default MainBranchTitle;
