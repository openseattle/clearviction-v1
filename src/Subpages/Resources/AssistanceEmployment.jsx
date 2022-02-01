import { Box, Container, Grid, Typography } from "@material-ui/core";
import { useResourcesStyles } from "../../Styles/useResourcesStyles";
import officeWork from "../../Assets/office_work.svg";
import worldMap from "../../Assets/world_map.svg";
import ListItemMobileSnap from "../../ui-kit/ListItemMobileSnap";
import SecondaryButton from "../../ui-kit/SecondaryButton";
import { ExternalLink } from "../../ui-kit/ExternalLink";
import workResources from "../../data/resourcesData";

const AssistanceEmployment = () => {
  const classes = useResourcesStyles();
  return (
    <>
      <Box className={classes.darkBlueBackground}>
        <Container>
          <Typography
            className={classes.headingStyle}
            variant="h2"
            align="center"
          >
            Laws protect those with convictions from discrimination
          </Typography>
          <Typography variant="body1">
            The Equal Employment Opportunity Commission enforces the most
            critical law with regards to the protection of felons, as stated in
            Title VII of the Civil Rights Act of 1964. Felons’ rights may be
            violated during the search for employment in two ways:
          </Typography>
        </Container>
        <Container className={classes.regularContainer} maxWidth="md">
          <Grid container>
            <Grid item xs={12} sm={12} md={4}>
              <Typography
                className={classes.headingStyle}
                variant="h4"
                align="center"
              >
                Adverse Impact
              </Typography>
              <Typography variant="body1" align="center">
                Disparate impact or unintentional discrimination
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Typography
                className={classes.headingStyle}
                variant="h3"
                align="center"
              >
                OR
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Typography
                className={classes.headingStyle}
                variant="h4"
                align="center"
              >
                Adverse Treatment
              </Typography>
              <Typography variant="body1" align="center">
                Disparate treatment or intentional discrimination
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container className={classes.regularContainer} maxWidth="md">
        <ListItemMobileSnap
          text={
            <div>
              <Typography className={classes.headingStyle} variant="h4">
                Want to know if you (dis)qualify for a job?
              </Typography>
              <Typography className={classes.contentTextStyle} component="ol">
                <li>
                  Click the button to open the Council of State Governments map
                  in a new tab
                </li>
                <li>Select Washington State</li>
                <li>Search a category under “Employment”</li>
              </Typography>
              <SecondaryButton
                text={"View Map"}
                linkTo={"https://niccc.csgjusticecenter.org/map/"}
                externalLink
              />
            </div>
          }
          image={<Box component="img" src={worldMap} height={300} margin={5} />}
        />
      </Container>
      <Box className={classes.lightBlueBackGround}>
        <Container>
          <Typography className={classes.headingStyle} variant="h2">
            Find work!
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} >
              <Grid container  style={{height:"100%"}} alignItems="center">
                <div>
                  <Typography className={classes.headingStyle}>
                    <ExternalLink
                      href="http://www.lni.wa.gov/tradeslicensing/apprenticeship/programs/"
                      className={classes.titleLinkStyle}
                    >
                      Washington State Department of Labor & Industries
                    </ExternalLink>
                  </Typography>
                  <Typography variant="body2">
                    Apprenticeship Programs in Washington. Apprenticeships are
                    generally a mix of work and school that results in the
                    apprentice being trained in a specific field
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} >
              <Box component="img" src={officeWork} height={"100%"} />
            </Grid>
            {workResources.map((workSource, idx) => (
              <Grid key={idx} item xs={12} sm={6} md={4}>
                <Typography className={classes.headingStyle}>
                  <ExternalLink
                    href={workSource.url}
                    className={classes.titleLinkStyle}
                    name={workSource.name}
                  >
                    {workSource.name}
                  </ExternalLink>
                </Typography>
                <Typography variant="body2">{workSource.body}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AssistanceEmployment;
