import { Box, Container, Divider, Grid } from "@mui/material";

import DonatePage from "./DonatePage";
import PartnerPage from "./PartnerPage";
import VolunteerPage from "./VolunteerPage";
import RedesignHeroPanel from "../Components/RedesignHeroPanel";
import ImageContentCard from "../Components/ImageContentCard";
import { useDocumentTitle } from "../Components/customHooks/useDocumentTitle";

import diversity from "../Assets/diversity2.svg";
import moneyJar from "../Assets/money_jar.svg";
import marketing from "../Assets/marketing.svg";

import { useGetInvolvedStyles } from "../Styles/useGetInvolvedStyles";

const GetInvolvedPage = () => {
    const classes = useGetInvolvedStyles();
    useDocumentTitle("Get Involved - ");

    return (
        <>
            <RedesignHeroPanel
                title="Get Involved"
                subtitle="There are many ways to participate with the Clearviction team, and we appreciate all of them!"
            >
                <Grid container>
                    <Grid item xs={12} sm={12} md={4}>
                        <Box display="flex" justifyContent="center">
                            <ImageContentCard
                                content="Join our dedicated volunteer team and help us bring the resources to those who need them. "
                                image={diversity}
                                buttonHref="#volunteer"
                                buttonText="volunteer"
                                alt=""
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Box display="flex" justifyContent="center">
                            <ImageContentCard
                                content="Your gift makes a difference. Make it possible to continue helping our community."
                                image={moneyJar}
                                buttonHref="#donate"
                                buttonText="Donate"
                                alt=""
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Box display="flex" justifyContent="center">
                            <ImageContentCard
                                content="Create change by sharing our project with others and reaching out to your peers."
                                image={marketing}
                                buttonHref="#partner-with-us"
                                buttonText="Partner with us"
                                alt=""
                            />
                        </Box>
                    </Grid>
                </Grid>
            </RedesignHeroPanel>
            <VolunteerPage id="volunteer" />
            <Container maxWidth="md">
                <Divider className={classes.dividerStyle} />
            </Container>
            <DonatePage />
            <Container maxWidth="md">
                <Divider className={classes.dividerStyle} />
            </Container>
            <PartnerPage />
        </>
    );
};

export default GetInvolvedPage;
