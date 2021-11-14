import "../CSS/HomePage.css";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'

import FAQAccordion from '../Components/Accordion'

/** MATERIAL UI IMPORTS */
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

import cvpLogoWhite from '../Assets/cvp-logo-white.png'
import cvpLogoLeftHalf from "../Assets/cvp-logo-white-left-half.png";
import democracylabLogo from '../Assets/democracylab-logo.png'
import openseattleLogo from '../Assets/openseattle-logo.png'
import housing from '../Assets/housing.svg';
import employment from '../Assets/employment.svg';
import education from '../Assets/education.svg';
import travel from '../Assets/travel.svg';
import vector2 from '../Assets/Vector 2.svg';
import vector3 from '../Assets/Vector 2.svg';
import teamwork from '../Assets/teamwork.svg'
import phone from '../Assets/phone.svg'

const useStyles = makeStyles(theme => ({
    marginAutoContainer: {
      width: 500,
      height: 80,
      display: 'flex',
      backgroundColor: 'gold',
    },
    marginAutoItem: {
      margin: 'auto'
    },
    secondaryButton: {
      backgroundColor: "#DCDCDC", 
      color: "#000000", 
      width: "300px", 
      textTransform: 'none'
    },
    typogoraphy: {
      h3: 600
    }  
}))

const HomePage = () => {
  // const history = useHistory();
  // const handleCalcRedirect = () => {
  //   history.push("/calculator");
  // };

  const classes = useStyles()

  return (
    <Container maxWidth={false} id="main">
      <Container maxWidth={false} className={classes.alignItemsAndJustifyContent} sx={{ backgroundColor: 'var(--light-gray)', height: '25rem'}}>
        <Stack direction="row">
          <Stack spacing={4} sx={{ paddingTop: '5em', paddingLeft: '16.3em' }} alignItems="flex-start" >
            <Typography variant="h3" style={{ fontWeight: 600 }}>Vacation Eligibility Calculator</Typography>
            <Typography variant="h6" sx={{ textAlign: 'left' }}>Check your eligibility to vacate your conviction <br /> for free in less than 10 minutes!</Typography>
            <Button variant="contained" sx={{ backgroundColor: "#4E6C99", width: "200px", textTransform: 'none'}}> Check My Eligibility </Button>
          </Stack>
          <img src={cvpLogoLeftHalf} className="homepage__cvp-logo" alt={"CVP Logo"}/>
        </Stack>
      </Container>

      <Container maxWidth={false}>        
        <Stack direction="row" spacing={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10 }}>
          <Button variant="contained" sx={{ backgroundColor: 'var(--light-gray)', color: '#000000', width: '341px', height: '44px', textTransform: 'none', fontWeight: '600'}}> How It Works </Button>
          <Button variant="contained" sx={{ backgroundColor: 'var(--light-gray)', color: '#000000', width: '341px', height: '44px', textTransform: 'none', fontWeight: '600'}}> FAQs</Button>
          <Button variant="contained" sx={{ backgroundColor: 'var(--light-gray)', color: '#000000', width: '341px', height: '44px', textTransform: 'none', fontWeight: '600'}}> Why Vacate? </Button>
        </Stack>
      </Container>

      <Container maxWidth={false} className={classes.alignItemsAndJustifyContent} sx={{ backgroundColor: 'var(--dark-blue)', color: '#ffffff', padding: 5}}>
        <Typography variant="h3">How It Works</Typography>
        <Stack direction="row" alignItems="center" sx={{ justifyContent: 'center' }}>
            <img className="icons" src={teamwork} alt={"Teamwork Icon"}/>
            <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>
              We break down the laws into <br /> understandable language.
            </Typography>
            <img src={vector3} id="vector3" />
                
            <img className="icons" src={phone} alt={"Mobile Phone Icon"}/>
            <Typography variant="body1" sx={{ textAlign: 'left' }}>
              You answer a few simple <br /> yes/no questions.
            </Typography>
            <img src={vector3} id="vector2"/>
            
            <img className="icons" src={employment} alt={"Employment Icon"}/>
            <Typography variant="body1" sx={{ textAlign: 'left' }}>
              This helps determine <br /> your vacation eligibility.
            </Typography>
        </Stack>
        <Button variant="contained" sx={{ backgroundColor: "#4E6C99", width: "200px", textTransform: 'none'}}> Check My Eligibility </Button>
      </Container>

      <Container maxWidth={false} className={classes.alignItemsAndJustifyContent} sx={{ backgroundColor: 'var(--gray)', padding: 5 }}>
        <Stack direction="column" sx={{ alignItems: 'center', paddingTop: '1em' }}>
        <Typography variant="h3" sx={{ paddingBottom: '1em'}}>FAQs</Typography>
          <FAQAccordion />
        </Stack>
      </Container>

      <Container maxWidth={false} className={classes.alignItemsAndJustifyContent} sx={{ padding: 5 }}>
        <Typography variant="h3">Why Vacate?</Typography>
        <Typography varient="h5">A conviction vacation seals the offense from your record, <br /> and will give you more chance to access:</Typography>

        <Stack direction="row" spacing={16} sx={{ justifyContent: 'center', padding: '2em'}}>
          <Stack direction="column">
            <img className="icons" src={housing} alt={"Housing Icon"}/>
            <Typography varint="h6" style={{ fontWeight: 600 }}>Housing</Typography>
            <Typography variant="subtitle1" sx={{ width: '200px'}}>
              Make it easier to find and be approved for rent or purchasing a home.
            </Typography>
          </Stack>
        
          <Stack direction="column" sx={{ alignItems: 'center'}}>
            <img className="icons" src={employment} alt={"Employment Icon"}/>
            <Typography varint="h6" style={{ fontWeight: 600 }}>Employment</Typography>
            <Typography variant="subtitle1" sx={{ width: '200px'}}>
              Reduce barriers to finding and obtaining employment.
            </Typography>
          </Stack>

          <Stack direction="column" sx={{ alignItems: 'center'}}>
            <img className="icons" src={education} alt={"Education Icon"}/>
            <Typography varint="h6" style={{ fontWeight: 600 }}>Education</Typography>
            <Typography variant="subtitle1" sx={{ width: '200px'}}>
              Apply for scholarships, programs, degrees or certificates.
            </Typography>
          </Stack>

          <Stack direction="column" sx={{ alignItems: 'center'}}>
            <img className="icons" src={travel} alt={"Travel Icon"}/>
            <Typography varint="h6" style={{ fontWeight: 600 }}>Travel</Typography>
            <Typography variant="subtitle1" sx={{ width: '200px'}}>
              Make it easier to travel when and where you want to.
            </Typography>
          </Stack>
        </Stack>

          <Button variant="contained" sx={{ backgroundColor: "#4E6C99", width: "200px", textTransform: 'none', marginTop: 5}}> Learn More </Button>
        </Container>

        <Container maxWidth={false} className={classes.alignItemsAndJustifyContent} sx={{ backgroundColor: 'var(--dark-blue)', color: '#ffffff', padding: 5}}>
          <img src={cvpLogoWhite} id="cvp-logo" alt={"CVP Logo"}/>
          <Stack direction="column" spacing={4} sx={{ padding: 5, alignItems: 'center' }}>
            <Typography variant="body1" sx={{width: '800px', textAlign: 'center'}}>
              The Conviction Vacation Project connects volunteers passionate about reducing barriers and making it easier for those with convictions in Washington State. 
            </Typography>
            <Typography variant="body1" sx={{width: '800px', textAlign: 'center'}}>
              We’re working together to create a tool to make navigating the conviction vacation process easier. Currently we are designing and building an eligibility calculator to help people determine if their conviction is eligible for vacation.
            </Typography>
          </Stack>
          <Button variant="contained" sx={{ backgroundColor: "#4E6C99", width: "200px", textTransform: 'none', marginBottom: 5 }}> Join the Team </Button>
        </Container>

        <Container maxWidth={false} sx={{padding: 0}}>
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
          <Typography sx={{paddingBottom: '3em'}}>The information on this site is not, nor should it be, considered legal advice.</Typography>
        </Container>
      </Container>
  );
};

export default HomePage;
