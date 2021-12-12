import FAQAccordion from "../Components/Accordion";
import PrimaryButton from "../ui-kit/Button";
import SecondaryButton from "../ui-kit/SecondaryButton";
import Text from "../ui-kit/Text";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

import cvpLogoWhite from "../Assets/cvp-logo-white.png";
import cvpLogoLeftHalf from "../Assets/cvp-logo-white-left-half.png";
import democracylabLogo from "../Assets/democracylab-logo.png";
import openseattleLogo from "../Assets/openseattle-logo.png";
import housing from "../Assets/housing.svg";
import employment from "../Assets/employment.svg";
import education from "../Assets/education.svg";
import travel from "../Assets/travel.svg";
import teamwork from "../Assets/teamwork.svg";
import phone from "../Assets/phone.svg";
import "../CSS/HomePage.css";

const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row light-bg">
        <div className="col-lg">
          <div id="hero-parent">
            <div id="left-content">
              <Text
                variant={"h2"}
                text={"Vacation Eligibility Calculator"}
              ></Text>
              <Text
                variant={"h3"}
                text={
                  "Check your eligibility to vacate your conviction for free in less than 10 minutes!"
                }
              ></Text>
              <Text variant={"h5"} text={"Coming in January 2022!"}></Text>
            </div>
            <div id="right-content">
              <img src={cvpLogoLeftHalf} id="hero-logo" alt={"CVP Logo"} />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg">
          <PrimaryButton text={"How It Works"} href={"#how-it-works"} />
          <PrimaryButton text={"FAQs"} href={"#faq"} />
          <PrimaryButton text={"Why Vacate"} href={"#why-vacate"} />
        </div>
      </div>

      <div className="row dark-bg" id="how-it-works">
        <Text variant={"h3"} text={"How It Works"}></Text>

        <div className="col-sm">
          <img className="icons" src={teamwork} alt={"Teamwork Icon"} />
          <br />
          <Text
            variant={"h5"}
            text={"We break down the laws into understandable language."}
            fontFamily={"Lora"}
          ></Text>
        </div>

        <div className="col-sm">
          <img className="icons" src={phone} alt={"Mobile Phone Icon"} />
          <br />
          <Text
            variant={"h5"}
            text={"You answer a few simple yes/no questions."}
            fontFamily={"Lora"}
          ></Text>
        </div>
        <div className="col-sm">
          <img className="icons" src={employment} alt={"Employment Icon"} />
          <br />
          <Text
            variant={"h5"}
            text={"This helps determine your vacation eligibility."}
            fontFamily={"Lora"}
          ></Text>
        </div>
        <Text variant={"h3"} text={"Coming in January 2022!"}></Text>
      </div>

      <div className="row light-bg" id="faq">
        <div className="col-sm">
          <Text variant="h3" text={"FAQs"}></Text>
          <div id="accordion">
            <FAQAccordion />
          </div>
        </div>
      </div>

      <div className="row" id="why-vacate">
        <Text variant={"h3"} text={"Why Vacate?"}></Text>
        <Text
          variant={"h4"}
          text={
            "A conviction vacation seals the offense from your record, and will give you more chance to access:"
          }
        ></Text>

        <div className="col-sm">
          <img className="icons" src={housing} alt={"Housing Icon"} />
          <Text variant={"h6"} text={"Housing"} fontWeight={"600"}></Text>
          <Text
            variant={"h5"}
            text={
              "Make it easier to find and be approved for rent or purchasing a home."
            }
            fontFamily={"Lora"}
          ></Text>
        </div>

        <div className="col-sm">
          <img className="icons" src={employment} alt={"Employment Icon"} />
          <Text variant={"h6"} text={"Employment"} fontWeight={"600"}></Text>
          <Text
            variant={"h5"}
            text={"Reduce barriers to finding and obtaining employment."}
            fontFamily={"Lora"}
          ></Text>
        </div>

        <div className="col-sm">
          <img className="icons" src={education} alt={"Education Icon"} />
          <Text variant={"h6"} text={"Education"} fontWeight={"600"}></Text>
          <Text
            variant={"h5"}
            text={"Apply for scholarships, programs, degrees or certificates."}
            fontFamily={"Lora"}
          ></Text>
        </div>

        <div className="col-sm">
          <img className="icons" src={travel} alt={"Travel Icon"} />
          <Text
            variant={"h6"}
            text={"Government Assistance"}
            fontWeight={"600"}
          ></Text>
          <Text
            variant={"h5"}
            text={"Receive government help."}
            fontFamily={"Lora"}
          ></Text>
        </div>
        <div className="row">
          <div className="col-lg">
            <SecondaryButton text={"Learn More"} />
          </div>
        </div>
      </div>

      <div className="row dark-bg">
        <div className="col-lg">
          <br />
          <img src={cvpLogoWhite} id="cvp-logo" alt={"CVP Logo"} />
          <br />
          <Text
            variant={"h5"}
            fontFamily={"Lora"}
            text={
              "The Conviction Vacation Project connects volunteers passionate about reducing barriers and making it easier for those with convictions in Washington State."
            }
          ></Text>
          <br />
          <br />
          <Text
            variant={"h5"}
            fontFamily={"Lora"}
            text={
              "We’re working together to create a tool to make navigating the conviction vacation process easier. Currently we are designing and building an eligibility calculator to help people determine if their conviction is eligible for vacation."
            }
          ></Text>
          <br />
          <SecondaryButton text={"Join the Team"} />
        </div>
      </div>

      <div className="row">
        <div className="col-lg">
          <Stack direction="row" sx={{ display: "flex", padding: 5 }}>
            <Grid
              container
              columns={2}
              spacing={6}
              justifyContent="space-between"
            >
              <Grid item>
                <List>
                  <ListItem>
                    <a href="/" style={{ color: "#000000" }}>
                      Home
                    </a>
                  </ListItem>
                  <ListItem>
                    <a href="/calculator" style={{ color: "#000000" }}>
                      Calculator
                    </a>
                  </ListItem>
                  <ListItem>
                    <a href="/" style={{ color: "#000000" }}>
                      Contact
                    </a>
                  </ListItem>
                </List>
              </Grid>

              <Grid item sx={{ float: "right", position: "relative" }}>
                <Stack direction="column">
                  <img src={openseattleLogo} alt={"Open Seattle Logo"} />
                  <img src={democracylabLogo} alt={"Democracy Lab Logo"} />
                </Stack>
              </Grid>
            </Grid>
          </Stack>
          <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
          <Text
            variant={"body"}
            text={
              "The information on this site is not, nor should it be, considered legal advice."
            }
          ></Text>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
