
// styling
import { Typography } from "@material-ui/core";
import { useHomeStyles } from '../../Styles/Onboarding/useHomeStyles';

// components
import Header from '../../Components/Onboarding/Header';
import ModuleStepper from '../../Components/Onboarding/ModuleStepper';

const headerText = {
    title: "Welcome!",
    information: "We're excited you're joining the Clearviction Project."
};

// const module1 = {
//     link: "/onboarding-mod1",
//     number: "module 1",
//     subheading: "About Clearviction",
//     text: "What is Clearviction and why does this project matter?"
// }

// const module2 = {
//     link: "/onboarding-mod2",
//     number: "module 2",
//     subheading: "Lets get your tools in order",
//     text: "See what tools we use and how we use them to make the team run smooth and efficiently."
// }

// const module3 = {
//     link: "/onboarding-mod3",
//     number: "module 3",
//     subheading: "Our team expectations",
//     text: "We all want to be good teammembers. Learn how we can make that happen."
// }

// const module4 = {
//     link: "/onboarding-mod4",
//     number: "module 4",
//     subheading: "Now what?",
//     text: "Now that you know our practices and expectations, lets see what is happening within our teams."
// }

function OnboardingHome() {
    const classes = useHomeStyles();

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
                {/* <div style={styles.div}>
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
                </div> */}
            </div>
            <div className={classes.stepper} >
                <ModuleStepper />
            </div>
        </div>
    );
}

export default OnboardingHome;