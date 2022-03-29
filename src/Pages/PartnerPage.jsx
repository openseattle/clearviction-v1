import { Box, Container, Grid, Typography } from "@material-ui/core";
import SecondaryButton from "../ui-kit/SecondaryButton";
import pr from "../Assets/pr.svg";
import HeroPanel from "../Components/HeroPanel";
import { useGetInvolvedStyles } from "../Styles/useGetInvolvedStyles";

const PartnerPage = () => {
  const classes = useGetInvolvedStyles();

  return (
    <>
      <HeroPanel title={"Partner With Us"} />
      <Container className={classes.partner} maxWidth="lg">
        <Typography className={classes.partnerHeading} variant="h2">
          Help us bring a message of hope into your community.
        </Typography>
        <Typography className={classes.partnerHeading} variant="h5">
          We appreciate finding new ways to work with organizations and people
          who share our goals and want to help us raise awareness. Whether it be
          guidance or support, we'd love to hear more.
        </Typography>
        <Box display="flex" justifyContent={"center"}>
          <SecondaryButton text={"Contact Us"} linkTo={"/contact"} />
        </Box>
      </Container>
      <Container className={classes.share} maxWidth="lg">
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box display={"flex"} justifyContent={"center"}>
              <Box className={classes.sharePR} component="img" src={pr} />
            </Box>
          </Grid>
          <Grid className={classes.shareRight} item xs={12} sm={6}>
            <Typography className={classes.shareHeading} variant="h3">
              Share the calculator with your community
            </Typography>
            <Typography className={classes.shareBody} variant="body1">
              Do you know someone who could benefit from our calculator? Want to
              help us spread the word around your community?
            </Typography>
            <Typography className={classes.shareBody} variant="body1">
              Share our mission on your social media or send it to someone you
              know needs it.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PartnerPage;
