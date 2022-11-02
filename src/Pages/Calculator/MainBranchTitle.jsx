import { Grid, Typography } from "@mui/material";
import PrimaryButton from "../../ui-kit/PrimaryButton";
import { MainBranchTitleStyles } from "./MainBranchTitleStyles";
import { BackButton } from "../../ui-kit/BackButton";
import ProgressBar from "../../Components/ProgressBar";

const MainBranchTitle = ({ progressBar, backButton, header, body, buttonText, buttonHref }) => {
    const classes = MainBranchTitleStyles();
    return (
        <Grid container className={classes.grid}>
            {progressBar && <ProgressBar currentSectionName={progressBar.currentSectionName} />}

            {backButton && (
                <Grid container className={classes.backButton}>
                    <BackButton />
                </Grid>
            )}

            <Typography variant="h4" component="h1" className={classes.header}>
                {header}
            </Typography>

            {body &&
                body.map(bodyElement => (
                    <Typography variant="body1" className={classes.body}>
                        {bodyElement.text}
                    </Typography>
                ))}
            <PrimaryButton className={classes.button} text={buttonText} href={buttonHref} />
        </Grid>
    );
};

export default MainBranchTitle;
