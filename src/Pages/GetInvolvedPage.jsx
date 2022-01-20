import {
  Container,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Route, Link as RouterLink } from "react-router-dom";
import HeroPanel from "../Components/HeroPanel";
import DonatePage from "./DonatePage";
import PartnerPage from "./PartnerPage";
import VolunteerPage from "./VolunteerPage";

const subPages = [
  {
    name: "Volunteer",
    link: "/get_involved/volunteer",
    desc: "Join our dedicated volunteer team and help us bring theresources to those who need them.",
  },
  {
      name: "Donate",
      link: "/get_involved/donate",
      desc: "Your gift makes it possible to continue helping our community. "
  },
  {
      name: "Partner with us",
      link: "/get_involved/partner-with-us",
      desc: "Create change by sharing our story and reaching out to your peers."
  }

];

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
        {subPages.map((pageCard) => (
          <Card key={pageCard.name} component={RouterLink} to={pageCard.link}>
            <CardActionArea>
              <CardContent>
                <Typography variant="h3" align="center">{pageCard.name}</Typography>
                <Typography variant="body1" align="center">{pageCard.desc}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
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
