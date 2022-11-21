import { Container, Typography, Grid, Box, Divider } from "@mui/material";

// Components
import { useDonationStyles } from "../Styles/useDonationStyles";
import { useDocumentTitle } from "../Components/customHooks/useDocumentTitle";
import RedesignHeroPanel from "../Components/RedesignHeroPanel";
import { RedesignButtonPrimary } from "../ui-kit/RedesignButtonPrimary";
import { DonationMeter, DonationForm } from "../Components/DonationForm";
import DonationVideo from "../Components/DonationVideo";
import DonatePage from "./DonatePage";

const GivingTuesdayPage = () => {
    const classes = useDonationStyles();
    useDocumentTitle("Giving Tuesday - ");

    return (
        <>
            <RedesignHeroPanel title="Giving Tuesday">
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography variant="subtitle1" component="p">
                            Clearviction is an open-sourced project whose goal is to help people easily navigate the
                            legal system in Washington State.
                        </Typography>
                    </Grid>
                </Grid>
            </RedesignHeroPanel>
            <Box className={classes.regularContainer}>
                <Container>
                    <DonationMeter />
                    <Container>
                        <Typography variant="h3">Why donate?</Typography>
                        <DonationVideo />
                        <Typography variant="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                    </Container>

                    <Container>
                        <Typography variant="h4">Your voice is a powerful tool. Share our fundraiser.</Typography>
                        <Typography variant="p">
                            Help Clearviction expand its reach by sharing your donation activity with friends, family,
                            and more.
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
                </Container>
                <Container className={classes.donationBox}>
                    <DonationForm />
                </Container>
            </Box>
        </>
    );
};

export default GivingTuesdayPage;
