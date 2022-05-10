import { Grid, Typography, Container } from "@material-ui/core";
import { EducationOccLicReq } from "../Subpages/WhyVacate/EducationOccLicReq";
import { WhyVacateHousingStyles } from "../Styles/WhyVacateHousingStyles";
import { TextWithCTAButton } from "../Subpages/WhyVacate/TextWithCTAButton";
import { EducationBarriers } from "../Subpages/WhyVacate/EducationBarriers";
import { TwoParagraphTextWithHeader } from "../Subpages/WhyVacate/TwoParagraphTextWithHeader";

const WhyVacateEducation = () => {
    const classes = WhyVacateHousingStyles();
    return (
        <>
            <Container maxWidth="lg">
                <Grid container alignItems="flex-start">
                    <Typography className={classes.title} variant="h2">
                        Educational barriers
                    </Typography>
                    <Typography className={classes.contentText} variant="body1">
                        Conviction history should not affect educational opportunities after jail or prison, however,
                        many college and universities will collect background information and have full discretion over
                        the admistion deciding process. These are the main educational challenges faced by those with
                        convictions:
                    </Typography>
                </Grid>
            </Container>
            <Container className={classes.containerSpaceOnlyStyles} maxWidth="md">
                <EducationBarriers />
            </Container>
            <TextWithCTAButton
                text={
                    "The best way to avoid these obstacles is to expunge your record by vacating your conviction. Learn if you’re eligible with our Misdemeanor Eligibility Calculator."
                }
                buttonText={"Check Eligibility"}
                buttonLinkTo={"/calculator/landing-0"}
            />
            <TwoParagraphTextWithHeader
                className={classes.lightBlueSectionBackground}
                header={"Occupational licenses: What to know"}
                text={[
                    `An occupational license is a credential that the government requires a worker to hold in certain occupations. 
                  Aspiring workers must meet state-specific educational, training, testing and other requirements to practice 
                  in a licensed profession. Occupational licenses are mandatory in the relevant jurisdiction.`,
                    `Individuals 
                  with criminal records face many barriers to licensure including both those codified in federal and state law as well as implicit biases.
                  The National Inventory of Collateral Consequences of Conviction (https://niccc.nationalreentryresourcecenter.org/), 
                  catalogs over 15,000 provisions of law in both statute and regulatory codes that limit occupational licensing opportunities for individuals with criminal records.`,
                ]}
            />
            <Container maxWidth="md">
                <EducationOccLicReq />
            </Container>

            <TextWithCTAButton
                text={
                    "If you’re not yet eligible to vacate or want to know more, make sure to check out our resorces with tips for student loans, finding post-incarceration education and more."
                }
                buttonText={"Get Education Resources"}
                buttonLinkTo={"/resources/assistance/education"}
            />
        </>
    );
};

export default WhyVacateEducation;
