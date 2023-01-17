import { Container, Typography, Grid, Box } from "@mui/material";
// Components
import useDonationStyles from "../Styles/useDonationStyles";
import { useDocumentTitle } from "../Components/customHooks/useDocumentTitle";
import RedesignHeroPanel from "../Components/RedesignHeroPanel";
import RedesignButtonWide from "../ui-kit/RedesignButtonWide";
import { DonationForm } from "../Components/DonationForm";
import Donatebody from "../Components/DonateBody";

const DonationPage = () => {
    const classes = useDonationStyles();
    useDocumentTitle("Donate - ");

    return (
        <>
            <RedesignHeroPanel className={classes.customHero}>
                <Grid container sx={{ rowGap: "64px" }}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <Typography variant="h1" sx={{ fontSize: "86px" }}>
                                Donate
                            </Typography>
                            <Box sx={{ marginBottom: 8, marginTop: 8 }}>
                                <Typography sx={{ marginBottom: 5 }} variant="subtitle1" component="p">
                                    Conviction vacation makes it easier for formerly incarcerated individuals to access
                                    housing and employment, two things that are crucial for reducing the odds of
                                    re-incarceration.
                                </Typography>
                                <Typography sx={{ marginBottom: 5 }} variant="subtitle1" component="p">
                                    With your donations, you will directly help break down barriers for people with
                                    convictions in the state of Washington.
                                </Typography>
                                <Typography variant="subtitle1" component="p">
                                    Clearviction is a registered 501(c)3 nonprofit organization, EIN#88-3187952. All
                                    donations are tax deductible in full or in part.
                                </Typography>
                            </Box>
                            <RedesignButtonWide href="http://clearviction.org/about">
                                Learn More About Us
                            </RedesignButtonWide>
                        </Box>
                    </Grid>
                    <Grid sx={{ display: "flex" }} item xs={12} sm={12} md={6}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                                marginLeft: "auto",
                                marginRight: "auto",
                            }}
                        >
                            <DonationForm positionMedium="relative" />
                        </Box>
                    </Grid>
                </Grid>
            </RedesignHeroPanel>
            <Box className={classes.contentContainer}>
                <Container>
                    <Donatebody title="How will your donations help Clearviction's goals?" md={3} />
                </Container>
            </Box>
        </>
    );
};

export default DonationPage;
