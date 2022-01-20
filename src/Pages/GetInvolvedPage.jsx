import { Button, ButtonGroup, Container, Box, Card, CardActionArea, CardContent, Typography } from "@material-ui/core";
import { Route, Link as RouterLink } from "react-router-dom";
import HeroPanel from "../Components/HeroPanel";
import DonatePage from "./DonatePage";
import PartnerPage from "./PartnerPage";
import VolunteerPage from "./VolunteerPage";

const GetInvolvedPage = () => {
  return (
    <Container>
      <HeroPanel
        title={"Get involved"}
        subtitle={
          "There are many ways to participate with the CVP team, and we appreciate all of them!"
        }
      />
      <Box display={"flex"} justifyContent={"center"}>
          <Card component={RouterLink} to="/">
              <CardActionArea>
                  <CardContent>
                      <Typography variant="h3">
                          Volunteer
                      </Typography>
                  </CardContent>
              </CardActionArea>
          </Card>
          
        <ButtonGroup>
          <Button to="/get_involved/volunteer" component={RouterLink}>Volunteer</Button>
          <Button to="/get_involved/donate" component={RouterLink}>Donate</Button>
          <Button to="/get_involved/partner-with-us" component={RouterLink}>Partner with us</Button>
        </ButtonGroup>
      </Box>

      <Route exact path="/get_involved/volunteer">
        <VolunteerPage />
      </Route>
      <Route exact path="/get_involved/donate">
          <DonatePage />
      </Route>
      <Route exact path="/get_involved/partner-with-us">
          <PartnerPage />
      </Route>
    </Container>
  );
};

export default GetInvolvedPage;
