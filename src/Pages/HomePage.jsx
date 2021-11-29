import "../CSS/HomePage.css"; 

import FAQAccordion from '../Components/Accordion'
import PrimaryButton from '../ui-kit/Button';
import SecondaryButton from '../ui-kit/SecondaryButton';
import Text from '../ui-kit/Text';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

import cvpLogoWhite from '../Assets/cvp-logo-white.png'
// import cvpLogoLeftHalf from "../Assets/cvp-logo-white-left-half.png";
import democracylabLogo from '../Assets/democracylab-logo.png'
import openseattleLogo from '../Assets/openseattle-logo.png'
import housing from '../Assets/housing.svg';
import employment from '../Assets/employment.svg';
import education from '../Assets/education.svg';
import travel from '../Assets/travel.svg';
import teamwork from '../Assets/teamwork.svg'
import phone from '../Assets/phone.svg'

const HomePage = () => {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg">
          <Text variant={"h2"} text={"Vacation Eligibility Calculator"}></Text>
          <Text variant={"h3"} text={"Check your eligibility to vacate your conviction for free in less than 10 minutes!"}></Text>
          <Text variant={"h5"} text={"Coming in January 2022!"}></Text>
        </div>
      </div>

      <div class="row">
        <div class="col-lg">
          <PrimaryButton text={"How It Works"}/>
          <PrimaryButton text={"FAQs"}/>
          <PrimaryButton text={"Why Vacate?"}/>
        </div>
      </div>

      <div class="row" id="dark-bg">
        <Text variant="h3" text={"How It Works"}></Text>

        <div class="col-sm">
          <img className="icons" src={teamwork} alt={"Teamwork Icon"}/>
          <br/><Text variant="subtitle" text={"We break down the laws into understandable language."}></Text>
        </div>

        <div class="col-sm">
          <img className="icons" src={phone} alt={"Mobile Phone Icon"}/>
          <br/><Text variant="subtitle" text={"You answer a few simple yes/no questions."}></Text>
        </div>
        <div class="col-sm">
        <img className="icons" src={employment} alt={"Employment Icon"}/>
        <br/><Text variant="subtitle" text={"This helps determine your vacation eligibility."}></Text>
        </div>
        <Text variant="h5" text={"Coming in January 2022!"}></Text>
      </div>

      <div class="row" id="light-bg">
        <div class="col-sm">
          <Text variant="h3" text={"FAQs"}></Text>
          <div id="accordion"><FAQAccordion /></div>
        </div>
      </div>

      <div class="row">
        <Text variant={"h3"} text={"Why Vacate?"}></Text>
        <Text variant={"subtitle"} text={"A conviction vacation seals the offense from your record, and will give you more chance to access:"}></Text>

        <div class="col-sm">
          <img className="icons" src={housing} alt={"Housing Icon"}/>
          <Text variant={"h6"} text={"Housing"} fontWeight={"600"}></Text>
          <Text variant={"subtitle"} text={"Make it easier to find and be approved for rent or purchasing a home."}></Text>
        </div>

        <div class="col-sm">
          <img className="icons" src={employment} alt={"Employment Icon"}/>
          <Text variant={"h6"} text={"Employment"} fontWeight={"600"}></Text>
          <Text variant={"subtitle"} text={"Reduce barriers to finding and obtaining employment."}></Text>
        </div>

        <div class="col-sm">
          <img className="icons" src={education} alt={"Education Icon"}/>
          <Text variant={"h6"} text={"Education"} fontWeight={"600"}></Text>
          <Text variant={"subtitle"} text={"Apply for scholarships, programs, degrees or certificates."}></Text>
        </div>

        <div class="col-sm">
          <img className="icons" src={travel} alt={"Travel Icon"}/>
          <Text variant={"h6"} text={"Government Assistance"} fontWeight={"600"}></Text>
          <Text variant={"subtitle"} text={"Receive government help."}></Text>              
        </div>
      </div>

      <div class="row" id="dark-bg">
        <div class="col-lg">
          <br/><img src={cvpLogoWhite} id="cvp-logo" alt={"CVP Logo"}/>
          <br/><Text variant={"subtitle"} text={"The Conviction Vacation Project connects volunteers passionate about reducing barriers and making it easier for those with convictions in Washington State."}></Text>
          <br/><Text variant={"subtitle"} text={"We’re working together to create a tool to make navigating the conviction vacation process easier. Currently we are designing and building an eligibility calculator to help people determine if their conviction is eligible for vacation."}></Text>
          <br/><SecondaryButton text={"Join the Team "}/>
        </div>
      </div>

      <div class="row">
        <div class="col-lg">
          <Stack direction="row" sx={{ display: 'flex', padding: 5 }}>
            <Grid container columns={2} spacing={6} justifyContent="space-between">
              <Grid item>
                <List>
                  <ListItem>Home</ListItem>
                  <ListItem>Volunteer</ListItem>
                  <ListItem>Calculator</ListItem>
                  <ListItem>Resources</ListItem>
                  <ListItem>About</ListItem>
                  <ListItem>Contact</ListItem>
                </List>
              </Grid>
            
              <Grid item sx={{ float: 'right', position: 'relative' }}>
                <Stack direction="column" >
                  <img src={openseattleLogo} alt={"Open Seattle Logo"}/>
                  <img src={democracylabLogo} alt={"Democracy Lab Logo"}/>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
          <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
          <Text variant={"body"} text={"The information on this site is not, nor should it be, considered legal advice."}></Text>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
