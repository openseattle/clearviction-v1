import { Grid, Typography, Container } from "@mui/material";
import { HousingTips } from "../Subpages/WhyVacate/HousingTips";
import { HousingBarriers } from "../Subpages/WhyVacate/HousingBarriers";
import { HousingOtherOptions } from "../Subpages/WhyVacate/HousingOtherOptions";
import { WhyVacateHousingStyles } from "../Styles/WhyVacateHousingStyles";
import { TextWithCTAButton } from "../Subpages/WhyVacate/TextWithCTAButton";

const WhyVacateHousing = () => {
    const classes = WhyVacateHousingStyles();
    return (
        <>
            <Container maxWidth="md">
                <Grid container alignItems="flex-start">
                    <Typography className={classes.title} variant="h2">
                        Housing barriers
                    </Typography>
                    <Typography className={classes.contentText} variant="subtitle2">
                        There are many different barriers that can prevent people with convictions from fair access to
                        housing. Each different type of housing comes with its own set of obstacles that you should take
                        into consideration when looking for housing:
                    </Typography>
                </Grid>
            </Container>
            <Container className={classes.containerSpaceOnlyStyles} maxWidth="md">
                <HousingBarriers />
            </Container>
            <HousingTips />
            <HousingOtherOptions />
            <TextWithCTAButton
                text={
                    "The best way to get help finding affordable housing is to contact your local PHA. They will have affordable housing listings and information on public and subsidized housing programs."
                }
                buttonText={"Get Housing Resources"}
                buttonLinkTo={"/resources/assistance/housing"}
            />
        </>
    );
};

export default WhyVacateHousing;
