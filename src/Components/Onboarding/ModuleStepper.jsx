import { useState } from 'react';
// components
import ModuleCard from './ModuleCard';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepContent from '@material-ui/core/StepContent';
import StepIcon from '@material-ui/core/StepIcon';

// icons
import circleCheck from '../../Assets/Onboarding/circleCheck.png';
import openCircle from '../../Assets/Onboarding/openCircle.png';
import { Collapse, StepLabel } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const modules = [{
    link: "/onboarding-mod1",
    number: "module 1",
    subheading: "About Clearviction",
    text: "What is Clearviction and why does this project matter?"
},
{
    link: "/onboarding-mod2",
    number: "module 2",
    subheading: "Lets get your tools in order",
    text: "See what tools we use and how we use them to make the team run smooth and efficiently."
},
{
    link: "/onboarding-mod3",
    number: "module 3",
    subheading: "Our team expectations",
    text: "We all want to be good teammembers. Learn how we can make that happen."
},
{
    link: "/onboarding-mod4",
    number: "module 4",
    subheading: "Now what?",
    text: "Now that you know our practices and expectations, lets see what is happening within our teams."
}]

const styles = {
    img: {
        height: '30px',
        alignSelf: 'center',
    }
}

export default function VerticalLinearStepper() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <Stepper orientation="vertical" activeStep={activeStep}>
            {modules.map((module, index) => (
                <Step key={index} active={true} expanded={true}>
                    <StepLabel icon=
                        {localStorage.getItem(module.link) ?
                            <img src={circleCheck} style={styles.img} alt="" />
                            : <img src={openCircle} style={styles.img} alt="" />
                        }
                    >
                        <ModuleCard module={module} />
                        {/* <StepContent children={} TransitionProps={{ in: true }} /> */}
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    );
}