import { Container, Typography, Grid, Box, Divider } from "@mui/material";

// Components
import { useDocumentTitle } from "../Components/customHooks/useDocumentTitle";
import RedesignHeroPanel from "../Components/RedesignHeroPanel";
import { RedesignButtonPrimary } from "../ui-kit/RedesignButtonPrimary";
import DonationForm from "../Components/DonationForm";
import DonationVideo from "../Components/DonationVideo";
import DonatePage from "./DonatePage";

const GivingTuesdayPage = () => {
    useDocumentTitle("Giving Tuesday - ");

    // this will need to be created
    // const classes = useDonationStyles();

    return (
        <>
            <RedesignHeroPanel title="Giving Tuesday">
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography variant="subtitle1" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                        <Box marginTop="8em" marginBottom="8em">
                            <RedesignButtonPrimary href="#read-more" aria-label="">
                                CTA
                            </RedesignButtonPrimary>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        {/* <Box component="img" style={{ width: "100%", padding: 16 }} src={teamBuilding} alt="" /> */}
                    </Grid>
                </Grid>
            </RedesignHeroPanel>
            <DonationForm />
            <Container>
                <Typography variant="h2">Why donate?</Typography>
                <DonationVideo />
                <Typography variant="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
            </Container>

            <Container>
                <Typography variant="h4">Your voice is a powerful tool. Share our fundraiser.</Typography>
                <Typography variant="p">
                    Help Clearviction expand its reach by sharing your donation activity with friends, family, and more.
                </Typography>
                {/* I was looking into react-social comonent libarry for embedding social sharing.  */}
            </Container>

            <Divider /* className={classes.dividerStyle} <- from getstartedstyles */ />

            <Container>
                {/* Probably want to change the donate page to accept props, so we can change the title */}
                <DonatePage />
            </Container>

            <Divider />

            <Container>
                <Typography variant="h2">Meet the people commited to making a difference.</Typography>
                <Typography variant="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>

                <img src="https://via.placeholder.com/500x300)" alt="" />
            </Container>

            <Container>
                <Typography variant="h4">Help us break down barriers by joining our team.</Typography>
                <Typography variant="p">
                    When you share your expertise with us, we get closer to reducing barriers and timelines for
                    individuals looking to vacate their convictions in Washington State.
                </Typography>
            </Container>

            <RedesignButtonPrimary href="get-involved" aria-label="">
                learn more
            </RedesignButtonPrimary>
        </>
    );
};

export default GivingTuesdayPage;
