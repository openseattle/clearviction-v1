import { Container, Box } from "@material-ui/core";
import { Route} from "react-router-dom";
import HeroPanel from "../Components/HeroPanel";
import NavCardGroup from "../Components/NavCardGroup";
import WhyVacateAssistance from "./WhyVacateAssistance";
import WhyVacateEducation from "./WhyVacateEducation";
import WhyVacateEmployment from "./WhyVacateEmployment";
import WhyVacateHousing from "./WhyVacateHousing";

const pages = [
  {
    name: "Housing",
    link: "/why-vacate/housing",
  },
  {
      name: "Employment",
      link: "/why-vacate/employment",
  },
  {
      name: "Partner with us",
      link: "/why-vacate/education",
  },
  {
    name: "Government assistance",
    link: "/why-vacate/government-assistance",
}
]
const WhyVacatePage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <HeroPanel
          title={"Why vacate"}
          subtitle={
            "A conviction vacation seals the offense from your record and will give you more chance to access:"
          }
        />
        <Box display="flex" justifyContent={"center"}>
          <NavCardGroup subPages={pages}/>
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
