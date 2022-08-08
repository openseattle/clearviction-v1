// styling
import { Typography } from "@material-ui/core";
import { useHomeStyles } from "../../Styles/Onboarding/useHomeStyles";
import { useEffect, useRef } from "react";

// components
import Header from "../../Components/Onboarding/Header";
import ModuleStepper from "../../Components/Onboarding/ModuleStepper";

const headerText = {
    title: "Welcome!",
    information: "We're excited you're joining the Clearviction Project.",
};

function OnboardingHome() {
    const classes = useHomeStyles();

    const moduleSection = useRef(null);
    const gotoModuleSection = () =>
        window.scrollTo({
            top: moduleSection.current.offsetTop,
            behavior: "smooth",
        });

    useEffect(() => {
        if (window.location.href.indexOf("mod") > -1) {
            gotoModuleSection();
        }
    });

    return (
        <div>
            <Header text={headerText} />
            <div className={classes.body}>
                <Typography variant="h4" className={classes.mobileHeader}>
                    Welcome
                </Typography>
                <Typography variant="body2" className={classes.bodyPara}>
                    This onboarding guide will help you familiarize yourself with the tools and practices that we use,
                    as well as get you acquainted with our disciplines and progress. The guide will help you see where
                    you best fit in and how you can start contributing.
                </Typography>
                <Typography variant="body2" className={classes.bodyPara}>
                    To get started click on each module below to learn more about our team and how we work together.
                    Please work on Modules 1 and 2 today or tomorow and complete the rest in the next couple of days (or
                    in one sitting if your schedule allows for it.)
                </Typography>
                <Typography variant="body2" className={classes.bodyPara}>
                    <span style={{ fontWeight: "bold", fontStyle: "italic" }}>Note:</span>{" "}
                    <span style={{ fontStyle: "italic" }}>
                        this resource is an imperfect and incomplete MVP. We've authored the core 20% (which should
                        provide 80% of the value) and continue to fill in the rest!
                    </span>
                </Typography>
            </div>

            <div className={classes.stepper} ref={moduleSection}>
                <ModuleStepper />
            </div>
        </div>
    );
}

export default OnboardingHome;
