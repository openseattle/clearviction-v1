import { Container, Typography, Grid } from "@material-ui/core";
import { GovBarriers } from "../Subpages/WhyVacate/GovBarriers";
import { WhyVacateHousingStyles } from "../Styles/WhyVacateHousingStyles";
import { TextWithCTAButton } from "../Subpages/WhyVacate/TextWithCTAButton";
import { GovPrograms } from "../Subpages/WhyVacate/GovPrograms";

const WhyVacateAssistance = () => {
    const classes = WhyVacateHousingStyles();
    return (
        <>
            <Container maxWidth="lg">
                <Grid container alignItems="flex-start">
                    <Typography className={classes.title} variant="h2">
                        Barriers to Government programs
                    </Typography>
                    <Typography className={classes.contentText} variant="body1">
                        Even though most public programs are available to all who qualify, there are exceptions. If you
                        have convictions you might not be able to access:
                    </Typography>
                </Grid>
            </Container>
            <Container maxWidth="md">
                <GovBarriers />
            </Container>
            <TextWithCTAButton
                text={
                    "The best way to avoid these obstacles is to expunge your record by vacating your conviction. Learn if you’re eligible with our Misdemeanor Eligibility Calculator."
                }
                buttonText={"Check Eligibility"}
                buttonLinkTo={"/calculator/landing-0"}
            />
            <GovPrograms />
        </>
    );
};

export default WhyVacateAssistance;
