import { useEffect } from 'react';
import { Grid, Box }  from '@material-ui/core';

import Header from '../../Components/Onboarding/Header';
import ModuleContent from '../../Components/Onboarding/ModuleContent';
import Footer from '../../Components/Onboarding/Footer';

import remote from '../../Assets/Onboarding/remote.svg';

const headerText =  {
    title: "Module 3",
    description: "Expectations of being a part of the team",
};

const remoteWork = {
    icon: "",
    title: "Expectations for Remote Work",
    paragraph1: "In a remote context, individuals must be empowered to exercise their own discretion to make decisions that will impact the organization",
    paragraph2: "Progress over perfection",
    paragraph3: "Asynchronous when we can & synchronous when we need",
    paragarph4: '"A team is not a group of people that work together, A team is a group of people that trust each other." - Simon Sinek',
}

const trust = {
    icon: "",
    title: "Trust Practices",
    linkIcon: "doc",
    linkTitle: "Trust practices",
    linkLocation: "https://airtable.com/appfJZShN8K4tcWHU/tblwBmfy7sXtKZb8y/viwB9AEhG2TBetEA0?blocks=hide"
}

const truth = {
    icon: "",
    title: "Asynchronous when we can & synchronous when we need to",
    paragraph1: "Asynchronous work brings with it major advantages as well as major shortcomings.",
    linkIcon: "link",
    linkTitle: "CV Materials",
    linkLocation: "https://drive.google.com/drive/u/5/folders/14NbUv8CE6e1vnKifNbA3Kl2dsghTYPk2",
    linkIcon2: "link",
    linkTitle2: "Our SOT Reference",
    linkLocation2: "https://docs.google.com/document/d/1QaJJ5JD2AHsaB1A8zHTTjtvmFDk7wpYTbj4UBJIcFzI/edit"
}

const button1 = {
    link: "/onboarding-mod2",
    text: "previous"
}

const button2 = {
    link: "/onboarding-mod4",
    text: "next module"
}

function OnboardingMod3() {
    return (
        <>
            <Header text={headerText} />
            <Box >
                <Grid container  
                    spacing={1}
                    justifyContent="center"
                >
                <Grid item sm={2} >
                    <img src={remote} alt="" />
                </Grid>
                <Grid item sm={10}>
                    <ModuleContent content={remoteWork} />
                </Grid>
                <Grid item sm={2}>
                    <img src={remote} alt="" />
                </Grid>
                <Grid item sm={10}>
                    <ModuleContent content={trust} />
                </Grid>
                <Grid item sm={2}>
                    <img src={remote} alt="" />
                </Grid>
                <Grid item sm={10}>
                    <ModuleContent content={truth} />
                </Grid>
            </Grid>
            </Box>
            
             
            <Footer button1={button1} button2={button2} />
        </>
    );
}

export default OnboardingMod3;