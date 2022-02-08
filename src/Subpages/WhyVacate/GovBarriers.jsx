import { Container, Typography, Box, List } from "@material-ui/core";
import { WhyVacateHousingStyles } from "../../Styles/WhyVacateHousingStyles";
import ListItemMobileSnap from "../../ui-kit/ListItemMobileSnap";
import snap from "../../Assets/Chicken_TwoColor1.svg";
import tanf from "../../Assets/Family_TwoColor1.svg";

export const GovBarriers = () => {
  const classes = WhyVacateHousingStyles();
  return (
    <Box className={classes.roots}>
      <Container maxWidth="lg" className={classes.rootsContainer}>
        <List>
          <ListItemMobileSnap
            edu
            image={
              <Box component="img" src={tanf} className={classes.rootsImage} />
            }
            header={"Temporary Assistance for Needy Families"}
            text={
              <Typography className={classes.rootsBodyText} variant="body1">
                If you are a Washington state resident who is responsible for
                the care of a child or are pregnant, you may qualify for TANF.
                You cannot receive TANF if you are convicted of a felony or if
                you have violated your probation or parole.
              </Typography>
            }
          />
          <ListItemMobileSnap
            edu
            image={
              <Box component="img" src={snap} className={classes.rootsImage} />
            }
            header={"Supplemental Nutrition Assistance Program"}
            text={
              <Typography className={classes.rootsBodyText} variant="body1">
                SNAP helps low income people by providing Electronic Benefits
                Card (EBT Card) to buy food on a monthly basis. You cannot
                receive Basic Food if you are convicted of a felony or if have
                violated your probation or parole.
              </Typography>
            }
            textLeft
          />
        </List>
      </Container>
    </Box>
  );
};
