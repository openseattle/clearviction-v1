import {
  Box,
  Container,
  Grid,
  Icon,
  SvgIcon,
  Typography,
} from "@material-ui/core";
import HeroPanel from "../Components/HeroPanel";
import ImageContentCard from "../Components/ImageContentCard";
import DonatePage from "./DonatePage";
import PartnerPage from "./PartnerPage";
import VolunteerPage from "./VolunteerPage";
import diversity from "../Assets/diversity2.svg";
import { Alarm, CloudDone, Sync } from "@material-ui/icons";
import Fact from "../Components/Fact";

const GetInvolvedPage = () => {
  return (
    <Container>
      <HeroPanel
        title={"Get involved"}
        subtitle={
          "There are many ways to participate with the CVP team, and we appreciate all of them!"
        }
      />
      <Grid container>
        <Grid item xs={12} sm={4}>
          <ImageContentCard
            content="hi"
            image={diversity}
            buttonHref="#"
            buttonText={"button"}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ImageContentCard />
        </Grid>

        <Grid item xs={12} sm={4}>
          <ImageContentCard />
        </Grid>
      </Grid>

      <VolunteerPage />
    </Container>
  );
};

export default GetInvolvedPage;
