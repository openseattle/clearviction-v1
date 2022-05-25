import { useEffect } from 'react';
import Header from '../Components/Header';
import ModuleContent from '../Components/ModuleContent';
import Footer from '../Components/Footer';

const headerText =  {
    title: "Module 1",
    description: "The tools we use to work together",
    information: "You should already be deluged with invitations to create accounts for a few of the tools we use (Slack, Airtable, Google Docs). Sign up for all that stuff before reading further so the links will work. If you're missing access to any of these, drop a message in our Slack's #admin channel.",
    information2: "These are tools you actually will be using, so please bookmark/organize them in a place easily accessible.",
    information3: "We understand some of the tools we choose to use will be new to you. Good thing learning is fun! the best thing ever! something I do when backed into a corner. We'll be patient and helpful as you develop familiarity, and if you run into challenges, each tool has an in-house expert eager to help!"
};

const airtable = {
    icon: "",
    title: "Airtable",
    paragraph1: "AirTable is a relational database with a friendly (and oh-so-pretty) user interface. We use it as a the primary place to organize information, tasks, and each other. If you're new to AirTable, hold on to your Cornflakes--there's a lot to cover!",
    paragraph2: "I'd recommend downloading AirTable onto your computer soon, and getting a feel for it--you probably already have a few tasks in your inbox!",
    paragraph3: "You will be given super-star level editing ability, so look around and get comfortable, but, you know... be careful.",
    link: true,
    linkIcon: "link",
    linkTitle: "How to use Airtable for basic tasking",
    linkLocation: "https://docs.google.com/document/d/1he13oYe6eaC_jtaDtDFe14XWLaivzU1NLDWluRO_jXQ/edit#heading=h.1fppjcn7zale",
}

const slack = {
    icon: "",
    title: "Slack",
    paragraph1: "Like Churchill said of democracy, it's the worst form of communication, except for all the others. We do well to create some communal standards and come to terms with where to limit our expectations of Slack. You will receive notifications and be tagged through our channel.",
    paragraph2: "To learn how to use Slack to communicate with the team, check the document below.",
    link: true,
    linkIcon: "link",
    linkTitle: "Our practices",
    linkLocation: "",
}

const button1 = {
    link: "/onboarding",
    text: "previous"
}

const button2 = {
    link: "/onboarding/mod2",
    text: "next module"
}



function OnboardingMod1() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        
        <div>
            <Header text={headerText} />
            <div>
                <div >
                <ModuleContent content={airtable} />
                <ModuleContent content={slack} />
                
                <Footer button1={button1} button2={button2} />
                </div>
            </div>
            
        </div>
    );
}

export default OnboardingMod1;