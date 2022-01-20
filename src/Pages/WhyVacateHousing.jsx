import {
  Box,
  Grid,
  makeStyles,
  Typography,
  Container,
  List,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";
import SecondaryButton from "../ui-kit/SecondaryButton";
import { HousingTips } from "../Subpages/WhyVacate/HousingTips";

import meeting from "../Assets/team_meeting.svg";
import team from "../Assets/team_building.svg";
import brainstorm from "../Assets/brainstorming_session.svg";
import laptop from "../Assets/laptop.svg";
import { WhyVacateHousingStyles } from "../Styles/WhyVacateHousingStyles";

const WhyVacateHousing = () => {
  const classes = WhyVacateHousingStyles();
  return (
      <>
        <Container className={classes.volunteer} maxWidth="lg">
          <Grid container justifyContent="left" alignItems="left">
            <Typography className={classes.title} variant="h2">Housing barriers</Typography>
            <Typography className={classes.contentText} variant="body1">
              There are many different barriers that can prevent people with convictions from fair access to housing. Each different type of housing comes with its own set of obstacles that you should take into consideration when looking for housing:
            </Typography>
          </Grid>
          <Box>
            <Grid container>
              <Grid item xs={12} sm={6} md={6}>
                <Box display="flex" justifyContent="center">
                  <Box component="img" src={team} className={classes.roleImage} />
                </Box>
                <Typography
                  className={classes.headingRoles}
                  variant="h3"
                  align="center"
                >
                  Public Housing Authorities
                </Typography>
                <Typography variant="body1" align="center">
                  Income capped
                </Typography>
                <Typography variant="body1" align="center">
                  Can't be a registered offender
                </Typography>
                <Typography variant="body1" align="center">
                  PHAs have discretion on who they decide to house
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Box display="flex" justifyContent="center">
                  <Box component="img" src={team} className={classes.roleImage} />
                </Box>
                <Typography
                  className={classes.headingRoles}
                  variant="h3"
                  align="center"
                >
                  Private Housing
                </Typography>
                <Typography variant="body1" align="center">
                  Landlords often deny people with criminal records
                </Typography>
                <Typography variant="body1" align="center">
                  Management companies often have background checks and also deny people with criminal records
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Box className={classes.roleAdjust} display="flex" justifyContent="center">
                  <Box
                    component="img"
                    src={brainstorm}
                    className={classes.roleImage}
                  />
                </Box>
                <Typography
                  className={classes.headingRoles}
                  variant="h3"
                  align="center"
                >
                  Supportive Housing
                </Typography>
                <Typography variant="body1" align="center">
                  Funded by HUD homeless programs
                </Typography>
                <Typography variant="body1" align="center">
                  Must have been residing in emergency shelter in the 90 days prior 
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Box display="flex" justifyContent="center">
                  <Box
                    component="img"
                    src={laptop}
                    className={classes.roleImage}
                  />
                </Box>
                <Typography
                  className={classes.headingRoles}
                  variant="h3"
                  align="center"
                >Transitional Housing</Typography>
                <Typography variant="body1" align="center">
                  Some require you have substance abuse, emotional or physical issues
                </Typography>
                <Typography variant="body1" align="center">
                  May require you attend special meetings or work
                </Typography>
              </Grid>
            </Grid>
          </Box>

        <Box className={classes.roots}>
          <Container maxWidth="lg" className={classes.backgroundSecondary}>
            <Typography className={classes.contentText} variant="body1" align="center">
              The best way to avoid these obstacles is to expunge your record by vacating your conviction. Learn if you’re eligible with our Misdemeanor Eligibility Calculator.
            </Typography>
            <SecondaryButton className={classes.buttonStyles} text={"Check Eligibility"} />
          </Container>
        </Box>

        <HousingTips />

        
        
        </Container>
      </>
  );
};

export default WhyVacateHousing;
