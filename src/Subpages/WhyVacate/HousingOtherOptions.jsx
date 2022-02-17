import { Box, Grid, Typography, List, Container } from "@material-ui/core";
import { WhyVacateHousingStyles } from "../../Styles/WhyVacateHousingStyles";
import { CVPListItem } from "../../ui-kit/ListItem";

export const HousingOtherOptions = () => {
  const classes = WhyVacateHousingStyles();
  return (
    <>
      <Box>
        <Container
          style={{
            paddingBottom: "5rem",
            display: "flex",
            justifyContent: "center",
          }}
          maxWidth="md"
        >
          <Grid container className={classes.containerStyles}>
            <Grid item xs={12}>
              <Typography
                className={classes.blackHeaderText}
                variant="h3"
                align="left"
              >
                Other options for those with convictions
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <List>
                <CVPListItem
                  useBulletPoint={true}
                  text={
                    "Find a flexible landlord. Using craigslist was often mentioned as a resource"
                  }
                />
                <CVPListItem
                  useBulletPoint={true}
                  text={"Stay with friends/ family at their will"}
                />
                <CVPListItem
                  useBulletPoint={true}
                  text={
                    "Look for townhouses, duplexes, single-family homes and trailers. Stay away from large apartment complexes"
                  }
                />
                <CVPListItem
                  useBulletPoint={true}
                  text={
                    "Have someone rent for you and pay them back under the table"
                  }
                />
                <CVPListItem
                  useBulletPoint={true}
                  text={"Subletting from someone looking to get out of a lease"}
                />
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <List>
                <CVPListItem useBulletPoint={true} text={"Hotels / motels"} />
                <CVPListItem
                  useBulletPoint={true}
                  text={"Government Referrals"}
                />
                <CVPListItem
                  useBulletPoint={true}
                  text={"Money Talks, pay months upfront to a private landlord"}
                />
                <CVPListItem
                  useBulletPoint={true}
                  text={"Write letters when submitting an application"}
                />
                <CVPListItem
                  useBulletPoint={true}
                  text={
                    "Buy a house. Banks and lenders care about Income, credit score, how long you have been with an employer, and ability to pay back the loan"
                  }
                />
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
