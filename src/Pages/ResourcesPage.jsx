import { Container, Grid } from "@material-ui/core";
import HeroPanel from "../Components/HeroPanel";
import { TextWithImage } from "../Subpages/WhyVacate/TextWithImage";
import arranging from "../Assets/data_arranging.svg";
import growth from "../Assets/growth.svg";
import PrimaryButton from "../ui-kit/Button";

const ResourcesPage = () => {
  return (
    <>
      <Container maxWidth={"lg"} style={{ paddingBottom: "50px" }}>
        <HeroPanel
          title={"Resources"}
          subtitle={"We have compiled a list of resources to get you started."}
        />
        <Grid container>
          <TextWithImage
            img={arranging}
            header={"The process"}
            text={[
              "The vacation process in four steps, forms, & records",
              <PrimaryButton
                text={"View Resources"}
                href={"/resources/the-process"}
              />,
            ]}
            cols={6}
          />
          <TextWithImage
            img={growth}
            header={"Assistance"}
            text={[
              "Housing, employment & education",
              <PrimaryButton
                text={"View Resources"}
                href={"/resources/assistance"}
              />,
            ]}
            cols={6}
          />
        </Grid>
      </Container>
    </>
  );
};

export default ResourcesPage;
