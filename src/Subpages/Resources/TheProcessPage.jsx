import { Box, Container, Typography } from "@material-ui/core";
import teamBuilding from "../../Assets/team_building.svg";
import dataArranging from "../../Assets/data_arranging.svg"
import HeroPanel from "../../Components/HeroPanel";
import { useResourcesStyles } from "../../Styles/useResourcesStyles";
import ListItemMobileSnap from "../../ui-kit/ListItemMobileSnap";
import SecondaryButton from "../../ui-kit/SecondaryButton";
import { GatherDocuments } from "./GatherDocuments";
import { LearnMore } from "./LearnMore";
import { ScheduleHearing } from "./ScheduleHearing";

const TheProcessPage = () => {
  const classes = useResourcesStyles();
  return (
    <>
      <Container>
        <HeroPanel
          title={"Resources"}
          subtitle={
            "The process of vacating a conviction is convoluted, making it difficult for most people to navigate. That’s why we have compiled a list of resources to help you get started."
          }
        />
      </Container>
      <Box className={classes.darkBlueBackground}>
        <GatherDocuments />
        <Container className={classes.regularContainer} maxWidth="md">
          <ListItemMobileSnap
            image={<Box height={175} component="img" src={teamBuilding} />}
            textLeft={true}
            text={
              <div>
                <Typography className={classes.headingStyle} variant="h2">
                  Step 2: Determine Eligibility
                </Typography>{" "}
                <Typography>
                  Once you have your records and forms gathered, use our
                  eligibilty calculator to determine if your conviction can be
                  vacated.
                </Typography>
              </div>
            }
          />
          <SecondaryButton text={"Check Eligibility"} linkTo={"/calculator"} />
        </Container>
        <Container className={classes.regularContainer} maxWidth="md">
          <ListItemMobileSnap
            image={<Box height={175} component="img" src={dataArranging} />}
            text={
              <div>
                <Typography className={classes.headingStyle} variant="h2">
                  Step 3: File with Court
                </Typography>
                <Typography>
                  Next, submit a request to have your conviction vacated (refer
                  to court directory). Please note that the request to vacate is
                  up to the discretion of the judge and may be denied for a
                  variety of reasons, including if:
                </Typography>
                <Typography
                  className={classes.listItemsStyle}
                  component="ol"
                  variant="body1"
                >
                  <li>
                    The court does not believe that vacating your conviction
                    will be in the interest of society
                  </li>
                  <li>
                    You violated probation or have not paid off your fines
                  </li>
                  <li>
                    You are otherwise not eligible to vacate that conviction
                  </li>
                  <li>
                    Inaccuracy in your court records and/or the application
                  </li>
                </Typography>
              </div>
            }
          />
        </Container>
        <ScheduleHearing />
      </Box>
      <LearnMore />
    </>
  );
};
export default TheProcessPage;
