import { Box, Container, Grid, Link, Typography } from "@material-ui/core";
import { useResourcesStyles } from "../../Styles/useResourcesStyles";
import officeWork from "../../Assets/office_work.svg";
import worldMap from "../../Assets/world_map.svg";
import ListItemMobileSnap from "../../ui-kit/ListItemMobileSnap";
import SecondaryButton from "../../ui-kit/SecondaryButton";

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
              <SecondaryButton text={"View Map"} linkTo={"https://niccc.csgjusticecenter.org/map/"} />
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
          <ListItemMobileSnap
            textLeft
            text={
              <div>
                <Typography className={classes.headingStyle}>
                  <Link
                    href="http://www.lni.wa.gov/tradeslicensing/apprenticeship/programs/"
                    className={classes.titleLinkStyle}
                  >
                    Washington State Department of Labor & Industries
                  </Link>
                </Typography>
                <Typography variant="body2">
                  Apprenticeship Programs in Washington. Apprenticeships are
                  generally a mix of work and school that results in the
                  apprentice being trained in a specific field
                </Typography>
              </div>
            }
            image={
              <Box component="img" src={officeWork} height={200} margin={5} />
            }
          />

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography className={classes.headingStyle}>
                <Link
                  href="https://www.worksourcewa.com"
                  className={classes.titleLinkStyle}
                >
                  Washington State WorkSource
                </Link>
              </Typography>
              <Typography variant="body2">
                WorkSource offers self-help programs, group programs and
                activities, workshops, one on one consultations, and training
                programs for job seekers.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography className={classes.headingStyle}>
                <Link
                  href="http://www.esd.wa.gov/jobs-and-training"
                  className={classes.titleLinkStyle}
                >
                  Employment Security Department
                </Link>
              </Typography>
              <Typography variant="body2">
                The agency works with local WorkSource centers and other sites
                in addition to providing placement assistance.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography className={classes.headingStyle}>
                <Link
                  href="http://www.pfp.org/"
                  className={classes.titleLinkStyle}
                >
                  People for People
                </Link>
              </Typography>
              <Typography variant="body2">
                Provides several resources, including employment training
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography className={classes.headingStyle}>
                <Link
                  href="http://www.goodwill.org/find-jobs-and-services/find-a-job/"
                  className={classes.titleLinkStyle}
                >
                  Goodwill
                </Link>
              </Typography>
              <Typography variant="body2">
                Offers those with criminal backgrounds pre-release services,
                basic skills development, employment readiness training,
                occupational skill training, and job placement assistance
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography className={classes.headingStyle}>
                <Link
                  href="http://www.careeronestop.org/"
                  className={classes.titleLinkStyle}
                >
                  Careeronestop
                </Link>
              </Typography>
              <Typography variant="body2">
                Sponsored by the U.S. Department of Labor, and is a resource for
                finding jobs and job training
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography className={classes.headingStyle}>
                <Link
                  href="http://seattle.craigslist.org/"
                  className={classes.titleLinkStyle}
                >
                  Craigslist
                </Link>
              </Typography>
              <Typography variant="body2">
                Lists many jobs in a variety of occupations
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AssistanceEmployment;
