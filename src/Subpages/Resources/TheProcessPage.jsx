import { Box, Container, Typography } from "@material-ui/core";
import teamBuilding from "../../Assets/team_building.svg";
import HeroPanel from "../../Components/HeroPanel";
import { ResourcesStyles } from "../../Styles/ResourcesStyles";
import ListItemMobileSnap from "../../ui-kit/ListItemMobileSnap";
import SecondaryButton from "../../ui-kit/SecondaryButton";
import { GatherDocuments } from "./GatherDocuments";
import { LearnMore } from "./LearnMore";
import { ScheduleHearing } from "./ScheduleHearing";

const TheProcessPage = () => {
  const classes = ResourcesStyles();
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
        <Container>
          <Typography className={classes.headingStyle} variant="h2">
            Step 2: Determine Eligibility
          </Typography>
          <ListItemMobileSnap
            image={<Box height={175} component="img" src={teamBuilding} />}
            textLeft={true}
            text={
              <Typography>
                Once you have your records and forms gathered, use our
                eligibilty calculator to determine if your conviction can be
                vacated.
              </Typography>
            }
          />
          <SecondaryButton text={"Check Eligibility"} />

          <Typography className={classes.headingStyle} variant="h2">
            Step 3: File with Court
          </Typography>
          <ListItemMobileSnap
            image={<Box height={175} component="img" src={teamBuilding} />}
            text={
              <div>
                <Typography>
                  Next, submit a request to have your conviction vacated (refer
                  to court directory). Please note that the request to vacate is
                  up to the discretion of the judge and may be denied for a
                  variety of reasons, including if:
                </Typography>
                <Typography
                  className={classes.listItemsStyle}
                  component="ol"
                  variant="body2"
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
