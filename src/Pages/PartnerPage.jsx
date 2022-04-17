import { Box, Container, Grid, Typography } from "@material-ui/core";

import pr from "../Assets/pr.svg";

import ContentSection from "../Components/ContentSection";
import { RedesignButtonPrimary } from "../ui-kit/RedesignButtonPrimary";
import { useGetInvolvedStyles } from "../Styles/useGetInvolvedStyles";

const PartnerPage = () => {
  const classes = useGetInvolvedStyles();

  return (
    <>
      <Container id="partner-with-us" className={classes.regularContainerStyle} maxWidth="md">
        <Typography className={classes.headingStyle} variant="h2">
          Help us bring a message of hope into your community.
        </Typography>
        <Typography className={classes.volunteerTextStyle} variant="body1">
          We appreciate finding new ways to work with organisations and people
          who share our goals and want to help us raise awareness. Whether it be
          guidance or support, we'd love to hear more.
        </Typography>
        <Container className={classes.CTAButtonContainerStyle}>
          <RedesignButtonPrimary href="/contact">
            Contact Us
          </RedesignButtonPrimary>
        </Container>
      </Container>
      <ContentSection
        className={classes.regularContainerStyle}
        sectionSize="md"
      >
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box display={"flex"} justifyContent={"center"}>
              <Box
                className={classes.partnerImageStyle}
                component="img"
                src={pr}
                alt="A person sitting on a megaphone spreading their message"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography className={classes.headingStyle} variant="h3">
              Share the calculator with your community
            </Typography>
            <Typography className={classes.volunteerTextStyle} variant="body1">
              Do you know someone who could benefit from our calculator? Want to
              help us spread the word around your community?
            </Typography>
            <Typography className={classes.volunteerTextStyle} variant="body1">
              Share our mission on your social media or send it to someone you
              know needs it.
            </Typography>
          </Grid>
        </Grid>
      </ContentSection>
    </>
  );
};

export default PartnerPage;
