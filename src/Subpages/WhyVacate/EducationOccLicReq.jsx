import { Box, Grid, Typography, List, Container } from "@material-ui/core";
import { WhyVacateHousingStyles } from "../../Styles/WhyVacateHousingStyles";
import { CVPListItem } from "../../ui-kit/ListItem";

export const EducationOccLicReq = () => {
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
        >
          <Grid className={classes.containerSpaceOnlyStyles} container >
            <Grid item xs={12}>
              <Typography
                className={classes.blackHeaderText}
                variant="h4"
                align="left"
              >
                Occupational licensing requirements can be among the most
                difficult barriers faced by people with criminal records seeking
                to enter the workforce.
              </Typography>
              <Typography
                className={classes.blackHeaderText}
                variant="h4"
                align="left"
              >
                The following factors will be considered in determining whether
                a criminal conviction should be grounds to deny a license:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <List>
                <CVPListItem
                  useBulletPoint={true}
                  textAlignment={"left"}
                  text={
                    "Amount of time that has elapsed since the last criminal activity"
                  }
                />
                <CVPListItem
                  useBulletPoint={true}
                  textAlignment={"left"}
                  text={
                    "Work activity of the applicant before and after the criminal conviction"
                  }
                />
                <CVPListItem
                  useBulletPoint={true}
                  textAlignment={"left"}
                  text={"Age of the person when the crime was committed"}
                />
                <CVPListItem
                  useBulletPoint={true}
                  textAlignment={"left"}
                  text={"The nature and seriousness of the crime"}
                />
                <CVPListItem
                  useBulletPoint={true}
                  textAlignment={"left"}
                  text={
                    "Extent to which a license might offer an opportunity to engage in further criminal activity"
                  }
                />
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <List>
                <CVPListItem
                  useBulletPoint={true}
                  textAlignment={"left"}
                  text={
                    "Evidence of the person’s rehabilitation while incarcerated or after release"
                  }
                />
                <CVPListItem
                  useBulletPoint={true}
                  textAlignment={"left"}
                  text={
                    "Relationship of a crime to the ability, capacity, or fitness to perform the duties"
                  }
                />
                <CVPListItem
                  useBulletPoint={true}
                  textAlignment={"left"}
                  text={
                    "Extent and nature of the applicant’s past criminal activity"
                  }
                />
                <CVPListItem
                  useBulletPoint={true}
                  textAlignment={"left"}
                  text={
                    "Relationship of the crime to the purposes for requiring a license"
                  }
                />
                <CVPListItem
                  useBulletPoint={true}
                  textAlignment={"left"}
                  text={
                    "Other evidence of the person’s fitness from people with knowledge of the applicant"
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
