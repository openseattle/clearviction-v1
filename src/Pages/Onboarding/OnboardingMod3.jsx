import { useEffect } from 'react';
import Header from '../../Components/Onboarding/Header';
import ModuleContent from '../../Components/Onboarding/ModuleContent';
import Footer from '../../Components/Onboarding/Footer';

const headerText =  {
    title: "Module 3",
    description: "Expectations of being a part of the team",
};

const remote = {
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
    linkLocation: ""
}

const truth = {
    icon: "",
    title: "Asynchronous when we can & synchronous when we need to",
    paragraph1: "Asynchronous work brings with it major advantages as well as major shortcomings.",
    linkIcon: "link",
    linkTitle: "CV Materials",
    linkLocation: "",
    linkIcon2: "link",
    linkTitle2: "Our SOT Reference",
    linkLocation2: ""
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
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Header text={headerText} />
            
            <ModuleContent content={remote} />
            <ModuleContent content={trust} />
            <ModuleContent content={truth} />
             
            <Footer button1={button1} button2={button2} />
        </div>
    );
}

export default OnboardingMod3;