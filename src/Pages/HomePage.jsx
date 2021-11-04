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
import logo1 from '../Assets/logo1.png'
import logo2 from '../Assets/logo2.png'
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
    }  
}))

const HomePage = () => {
  const history = useHistory();
  const handleCalcRedirect = () => {
    history.push("/calculator");
  };

  
  const classes = useStyles()

  return (
    <Container maxWidth={false} id="main">
      <Container maxWidth={false} className={classes.alignItemsAndJustifyContent} sx={{ backgroundColor: 'var(--light-gray)'}}>
        <Stack direction="column" spacing={6} >
            <Typography variant="h4">Vacation Eligibility Calculator</Typography>
            <Typography variant="body1">Check your eligibility to vacate your conviction for free in less than 10 minutes!</Typography>
            <Button variant="contained" sx={{ backgroundColor: "#4E6C99", width: "200px", textTransform: 'none'}}> Check My Eligibility </Button>
        </Stack>
      </Container>

      <Container maxWidth={false}>        
        <Stack direction="row" spacing={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10 }}>
          <Button variant="contained" sx={{ backgroundColor: 'var(--light-gray)', color: '#000000', width: '341px', height: '44px', textTransform: 'none'}}> How It Works </Button>
          <Button variant="contained" sx={{ backgroundColor: 'var(--light-gray)', color: '#000000', width: '341px', height: '44px', textTransform: 'none'}}> FAQs</Button>
          <Button variant="contained" sx={{ backgroundColor: 'var(--light-gray)', color: '#000000', width: '341px', height: '44px', textTransform: 'none'}}> Why Vacate? </Button>
        </Stack>
      </Container>

      <Container maxWidth={false} className={classes.alignItemsAndJustifyContent} sx={{ backgroundColor: 'var(--dark-blue)', color: '#ffffff', padding: 5}}>
        <Typography variant="h3">How It Works</Typography>
        <Stack direction="row">
            <img className="icons" src={teamwork} />
            <Typography variant="subtitle1">
              We break down the laws into understandable language.
            </Typography>
                
            <img className="icons" src={phone} />
            <Typography variant="body1">
              You answers a few simple yes/no questions.
            </Typography>
            
            <img className="icons" src={employment} />
            <Typography variant="body1">
              This helps determine your vacation eligibility.
            </Typography>
        </Stack>
        <Button variant="contained" sx={{ backgroundColor: "#4E6C99", width: "200px", textTransform: 'none'}}> Check My Eligibility </Button>
      </Container>

      <Container maxWidth={false} className={classes.alignItemsAndJustifyContent} sx={{ backgroundColor: 'var(--gray)', padding: 5 }}>
        <Stack direction="column">
        <Typography variant="h4">FAQs</Typography>
          <FAQAccordion />
        </Stack>
      </Container>

      <Container maxWidth={false} className={classes.alignItemsAndJustifyContent} sx={{ padding: 5 }}>
        <Typography variant="h3">Why Vacate?</Typography>
        <Typography varient="h5">A conviction vacation seals the offense from your record, and will give you more chance to access:</Typography>

        <Stack direction="row">
          <Stack direction="column" sx={{ alignItems: 'center'}}>
            <img className="icons" src={housing} />
            <Typography varint="h6">Housing</Typography>
            <Typography variant="subtitle1">
              Make it easier to find and be approved for rent or purchasing a home.
            </Typography>
          </Stack>
        
          <Stack direction="column" sx={{ alignItems: 'center'}}>
            <img className="icons" src={employment} />
            <Typography varint="h6">Employment</Typography>
            <Typography variant="subtitle1">
              Reduce barriers to finding and obtaining employment.
            </Typography>
          </Stack>

          <Stack direction="column" sx={{ alignItems: 'center'}}>
            <img className="icons" src={education} />
            <Typography varint="h6">Education</Typography>
            <Typography variant="subtitle1">
              Apply for scholarships, programs, degrees or certificates.
            </Typography>
          </Stack>

          <Stack direction="column" sx={{ alignItems: 'center'}}>
            <img className="icons" src={travel} />
            <Typography varint="h6">Travel</Typography>
            <Typography variant="subtitle1">
              Make it easier to travel when and where you want to.
            </Typography>
          </Stack>
        </Stack>

          <Button variant="contained" sx={{ backgroundColor: "#4E6C99", width: "200px", textTransform: 'none', marginTop: 5}}> Learn More </Button>
        </Container>

        <Container maxWidth={false} className={classes.alignItemsAndJustifyContent} sx={{ backgroundColor: 'var(--dark-blue)', color: '#ffffff', padding: 5}}>
          <img src={cvpLogoWhite} id="cvp-logo" />
          <Stack direction="column" spacing={4} sx={{ padding: 5 }}>
            <Typography variant="body1">
              The Conviction Vacation Project connects volunteers passionate about reducing barriers and making it easier for those with convictions in Washington State. 
            </Typography>
            <Typography variant="body1">
              We’re working together to create a tool to make navigating the conviction vacation process easier. Currently we are designing and building an eligibility calculator to help people determine if their conviction is eligible for vacation.
            </Typography>
          </Stack>
          <Button variant="contained" sx={{ backgroundColor: "#4E6C99", width: "200px", textTransform: 'none', marginBottom: 5 }}> Join the Team </Button>
        </Container>

        <Container maxWidth={false} sx={{ margin: 5,}}>
          <Stack direction="row" sx={{ display: 'flex', padding: 5 }}>
            <Grid container columns={2} spacing={6} >
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
                  <img src={logo2} />
                  <img src={logo1} />
                </Stack>
              </Grid>
            </Grid>
          </Stack>
          <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
          <Typography>The information on this site is not, nor should it be, considered legal advice.</Typography>
        </Container>
      </Container>
  );
};

export default HomePage;
