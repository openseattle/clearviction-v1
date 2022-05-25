import { useEffect } from 'react';

import { Typography } from "@material-ui/core";

import { useWelcomeStyles } from '../Styles/useWelcomeStyles';

import Header from '../../Components/Onboarding/Header';
import ModuleCard from '../../Components/Onboarding/ModuleCard';

const headerText =  {
    title: "Welcome!",
    information: "We're excited you're joining Clearviction."
};

const module1 = {
    link: "/onboarding/mod1",
    number: "module 1",
    icon: "tool",
    subheading: "Let's get your tools in order",
    text: "In this module you will learn how to set up your tools correctly and how to use them when communicating remotely with the team."
}

const module2 = {
    link: "/onboarding/mod2",
    number: "module 2",
    icon: "",
    subheading: "Learn about our philosophy and values",
    text: "In this module you will learn out team philosophy and values and how we place them at the center of the work that we do as a team."
}

const module3 = {
    link: "/onboarding/mod3",
    number: "module 3",
    icon: "",
    subheading: "Learn the best practices for remote work",
    text: "In this module you will learn about our team meetings and the best practices we use when collaborating and attending team meetings."
}

const module4 = {
    link: "/onboarding/mod4",
    number: "module 4",
    icon: "",
    subheading: "Read about Clearviction's progress",
    text: "In this module you will learn more about our progress as a team and you will learn more about the disciplines within Clearviction."
}

function OnboardingHome() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const classes = useWelcomeStyles();
    return (
        <div>
            <Header text={headerText} />     
                <div className={classes.body}>
                    
                    <Typography variant="body2" className={classes.bodyPara}>
                        This onboarding guide will help you familiarize yourself with the tools and practices that we use, as well as get you acquainted with our disciplines and progress. The guide will help you see where you best fit in and how you can start contributing.                    </Typography>
                    <Typography variant="body2" className={classes.bodyPara}>
                        To get started click on each module below to learn more about our team and how we work together. Please work on Modules 1 and 2 today or tomorow and complete the rest in the next couple of days (or in one sitting if your schedule allows for it.)                    </Typography>
                    <Typography variant="body2" className={classes.bodyPara}>
                        <span style={{ fontWeight: "bold", fontStyle: "italic" }}>Note:</span> <span style={{ fontStyle: "italic" }}>this resource is an imperfect and incomplete MVP. We've authored the core 20% (which should provide 80% of the value) and continue to fill in the rest!</span>
                    </Typography>
                </div>
                

                <ModuleCard module={module1} />
                <ModuleCard module={module2} />
                <ModuleCard module={module3} />
                <ModuleCard module={module4} />
            </div>
    );
}

export default OnboardingHome;