import { useEffect, useState } from 'react';

import { Typography } from "@material-ui/core";

import { useHomeStyles } from '../../Styles/Onboarding/useHomeStyles';

import Header from '../../Components/Onboarding/Header';
import ModuleCard from '../../Components/Onboarding/ModuleCard';
import openCircle from '../../Assets/Onboarding/openCircle.png';
import circleCheck from '../../Assets/Onboarding/circleCheck.png';

const headerText = {
    title: "Welcome!",
    information: "We're excited you're joining the Clearviction Project."
};

const module1 = {
    link: "/onboarding-mod1",
    number: "module 1",
    icon: "",
    subheading: "About Clearviction",
    text: "What is Clearviction and why does this project matter?"
}

const module2 = {
    link: "/onboarding-mod2",
    number: "module 2",
    icon: "tool",
    subheading: "Lets get your tools in order",
    text: "See what tools we use and how we use them to make the team run smooth and efficiently."
}

const module3 = {
    link: "/onboarding-mod3",
    number: "module 3",
    icon: "",
    subheading: "Our team expectations",
    text: "We all want to be good teammembers. Learn how we can make that happen."
}

const module4 = {
    link: "/onboarding-mod4",
    number: "module 4",
    icon: "",
    subheading: "Now what?",
    text: "Now that you know our practices and expectations, lets see what is happening within our teams."
}

function OnboardingHome() {
    const classes = useHomeStyles();
    const [mod1Complete, setMod1Complete] = useState(false);
    const [mod2Complete, setMod2Complete] = useState(false);
    const [mod3Complete, setMod3Complete] = useState(false);
    const [mod4Complete, setMod4Complete] = useState(false);

    useEffect(() => {
        const mod1 = localStorage.getItem("/onboarding-mod1");
        const mod2 = localStorage.getItem("/onboarding-mod2");
        const mod3 = localStorage.getItem("/onboarding-mod3");
        const mod4 = localStorage.getItem("/onboarding-mod4");
        if (mod1) {
            setMod1Complete(true);
        }
        if (mod2) {
            setMod2Complete(true);
        }
        if (mod3) {
            setMod3Complete(true);
        }
        if (mod4) {
            setMod4Complete(true);
        }
    }, [])

    return (
        <div>
            <Header text={headerText} />
            <div className={classes.body}>

                <Typography variant="body2" className={classes.bodyPara}>
                    This onboarding guide will help you familiarize yourself with the tools and practices that we use, as well as get you acquainted with our disciplines and progress. The guide will help you see where you best fit in and how you can start contributing.
                </Typography>
                <Typography variant="body2" className={classes.bodyPara}>
                    To get started click on each module below to learn more about our team and how we work together. Please work on Modules 1 and 2 today or tomorow and complete the rest in the next couple of days (or in one sitting if your schedule allows for it.)
                </Typography>
                <Typography variant="body2" className={classes.bodyPara}>
                    <span style={{ fontWeight: "bold", fontStyle: "italic" }}>Note:</span> <span style={{ fontStyle: "italic" }}>this resource is an imperfect and incomplete MVP. We've authored the core 20% (which should provide 80% of the value) and continue to fill in the rest!</span>
                </Typography>
                <div style={styles.div}>
                    <img src={mod1Complete ? circleCheck : openCircle} alt="" style={styles.img} />
                    <ModuleCard module={module1} />
                </div>
                <div style={styles.div}>
                    <img src={mod2Complete ? circleCheck : openCircle} alt="" style={styles.img} />
                    <ModuleCard module={module2} />
                </div>
                <div style={styles.div}>
                    <img src={mod3Complete ? circleCheck : openCircle} alt="" style={styles.img} />
                    <ModuleCard module={module3} />
                </div>
                <div style={styles.div}>
                    <img src={mod4Complete ? circleCheck : openCircle} alt="" style={styles.img} />
                    <ModuleCard module={module4} />
                </div>
            </div>
        </div>
    );
}

const styles = {
    img: {
        height: '50px',
    },
    div: {
        display: "flex",
        alignItems: "center",
    }
}

export default OnboardingHome;