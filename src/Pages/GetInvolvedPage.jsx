import { Box, Container, Divider, Grid } from "@material-ui/core";
import ImageContentCard from "../Components/ImageContentCard";
// import DonatePage from "./DonatePage";
// import PartnerPage from "./PartnerPage";
import VolunteerPage from "./VolunteerPage";
import diversity from "../Assets/diversity2.svg";
import moneyJar from "../Assets/money_jar.svg";
import marketing from "../Assets/marketing.svg";
import RedesignHeroPanel from "../Components/RedesignHeroPanel";
import { useGetInvolvedStyles } from "../Styles/useGetInvolvedStyles";

const GetInvolvedPage = () => {
  const classes = useGetInvolvedStyles();
  return (
    <>
      <RedesignHeroPanel
        title="Get involved"
        subtitle={
          "There are many ways to participate with the Clearviction team, and we appreciate all of them!"
        }
      >
        <Grid container>
          <Grid item xs={12} sm={12} md={4}>
            <Box display="flex" justifyContent="center">
              <ImageContentCard
                content="Join our dedicated volunteer team and help us bring the resources to those who need them. "
                image={diversity}
                buttonHref="#volunteer"
                buttonText="volunteer"
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
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Box display="flex" justifyContent="center">
              <ImageContentCard
                content="Create change by sharing our project with others and reaching out to your peers."
                image={marketing}
                buttonText="Partner with us"
              />
            </Box>
          </Grid>
        </Grid>
      </RedesignHeroPanel>

      <VolunteerPage />
      <Container maxWidth="lg">
        <Divider className={classes.dividerStyle} />
      </Container>
    </>
  );
};

export default GetInvolvedPage;
