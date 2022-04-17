import { Container } from "@material-ui/core";
import HeroPanel from "../Components/HeroPanel";
import WhyVacateAssistance from "./WhyVacateAssistance";
import WhyVacateEducation from "./WhyVacateEducation";
import WhyVacateEmployment from "./WhyVacateEmployment";
import WhyVacateHousing from "./WhyVacateHousing";

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
      </Container>

      <WhyVacateHousing />
      <WhyVacateEmployment />
      <WhyVacateEducation />
      <WhyVacateAssistance />
    </>
  );
};

export default WhyVacatePage;
