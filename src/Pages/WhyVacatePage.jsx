import { Container, ButtonGroup, Button, Box } from "@material-ui/core";
import { Route, Link as RouterLink } from "react-router-dom";
import HeroPanel from "../Components/HeroPanel";
import WhyVacateAssistance from "./WhyVacateAssistance";
import WhyVacateEducation from "./WhyVacateEducation";
import WhyVacateEmployment from "./WhyVacateEmployment";
import WhyVacateHousing from "./WhyVacateHousing";

const WhyVacatePage = () => {
  return (
    <>
      <Container>
        <HeroPanel
          title={"Why vacate"}
          subtitle={
            "A conviction vacation seals the offense from your record and will give you more chance to access:"
          }
        />
        <Box display="flex" justifyContent={"center"}>
          <ButtonGroup>
            <Button to="/why-vacate/housing" component={RouterLink}>
              Housing
            </Button>
            <Button to="/why-vacate/employment" component={RouterLink}>
              Employment
            </Button>
            <Button to="/why-vacate/education" component={RouterLink}>
              Education
            </Button>
            <Button
              to="/why-vacate/government-assistance"
              component={RouterLink}
            >
              Government assistance
            </Button>
          </ButtonGroup>
        </Box>
      </Container>
      <Route exact path="/why-vacate/housing">
        <WhyVacateHousing />
      </Route>
      <Route exact path="/why-vacate/employment">
        <WhyVacateEmployment />
      </Route>
      <Route exact path="/why-vacate/education">
        <WhyVacateEducation />
      </Route>
      <Route exact path="/why-vacate/government-assistance">
        <WhyVacateAssistance />
      </Route>
    </>
  );
};

export default WhyVacatePage;
