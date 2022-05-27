import { useEffect } from 'react';
import Header from '../../Components/Onboarding/Header';
import ModuleContent from '../../Components/Onboarding/ModuleContent';
import Footer from '../../Components/Onboarding/Footer';

const headerText =  {
    title: "Module 1",
    description: "About Clearviction",
};

const mission = {
    icon: "",
    title: "Our Mission",
    paragraph1: "ClearViction aims to reduce barriers faced by formerly incarcerated individuals by streamlining the process of vacating eligible convictions in Washington state.",
}

const story = {
    icon: "",
    title: "Our Story",
    // link: true,
    linkIcon: "doc",
    linkTitle: "Clearviction Story",
    linkLocation: "",
}

const problem = {
    icon: "",
    title: "The Problem",
    // link: true,
    linkIcon: "doc",
    linkTitle: "The Problem",
    linkLocation: "",
}

const button1 = {
    link: "/onboarding",
    text: "previous"
}

const button2 = {
    link: "/onboarding-mod2",
    text: "next module"
}



function OnboardingMod1() {
    
    return (
        
        <div>
            <Header text={headerText} />
            <div>
                <div >
                <ModuleContent content={mission} />
                <ModuleContent content={story} />
                <ModuleContent content={problem} />
                
                <Footer button1={button1} button2={button2} />
                </div>
            </div>
            
        </div>
    );
}

export default OnboardingMod1;