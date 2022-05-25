import { useEffect } from 'react';
import Header from '../Components/Header';
import ModuleContent from '../Components/ModuleContent';
import Footer from '../Components/Footer';

const headerText =  {
    title: "Module 3",
    description: "The practices we use to work remotely",
    information: "We are taking for granted that you are already up to speed with best practices for colocated work, and are ready to focus on what makes remote different. When teams first shift to remote, they tend to practice a failure pattern called: Carbon copy Skeuomorph Lift and shift endeavoring to mimic their old practices in a remote context. We have moved beyond this initial failure pattern, into the functional stage of remote practice wherein we endeavor to accomplish our goals with new, remote-native tools and practices."
};

const knowledge = {
    icon: "",
    title: "Knowledge Management",
    paragraph1: "comms, meeting of the minds, etc.",
    linkTitle: "Document/Link1",
    linkIcon: "link",
    linkLocation: ""
}

const transparency = {
    icon: "",
    title: "Transparency",
    paragraph1: "Transparency is a fancy way of saying availability of information.",
    paragraph2: "If an organization expects people to blindly execute discrete tasks created by an omniscient architect, people can be unthinking automatons and transparency is unnecessary.",
    paragraph3: "While we don't have an omniscient architect, we do have empowered volunteers making their own discretions, collectively determining our overall identity, purpose, and execution.",
    paragraph4: "In our context, transparency is doubly imperative.",
    paragraph5: "Decision-makers (everyone) need the data relevant to their decisions readily organized, accessible, and understandable. Others, especially those in leadership roles, can better conduct eyes on-hands off leadership only intervening/nudging people when appropriate.",
    linkIcon: "link",
    linkTitle: "Document/Link 1",
    linkLocation: ""
}

const asynchronous = {
    icon: "",
    title: "Asynchronous when we can & synchronous when we need to",
    paragraph1: "Asynchronous work brings with it major advantages as well as major shortcomings.",
    paragraph2: "It allows teams with conflicting schedules spread across multiple time zones to collaborate effectively. It allows focused, flow-state working without the chatter of constant interruptions and the resulting attention residue. If work product needs to bounce between people many times, synchronous work can create a long sequence of prerequisite dependencies resulting in major delays. Nuanced communications attempted asynchronously not only end up taking more total time, but frequently fail despite the temporal investment.",
    paragraph3: "For the luxury of asynch work to function, we must have a transparent structure and process for asynchronous task creation, definition, clarification, assignment, execution, evaluation, and acceptance, as well as the discipline to use it uniformly.",
    paragraph4: "Because different disciplines benefit from different task management systems, we make space for teams to choose whichever one fits their needs best. The leader of each team will note their task management system in their documentation here.",
    paragraph5: "The time for Synch",
    paragraph6: "We all know how it feels--two or three messages meant to clarify only cause more confusion. It's at this moment that the convenience of asynch methods are outweighed by the efficiency of synchronous dialogue. We watch for this need, respond promptly with the synchronous comm method consistent with the moment's needs and our interlocutor's communication preferences, and document the results of the exchange afterward for the sake of transparency and record-creation.",
    paragraph7: "The imperative of personal discipline",
    paragraph8: "Synchronous time is expensive--it burns a hole through everyone's calendars, interrupts workflows, and consumes social effort. At least 3/4 of our work happens asynchronously. If we fail to execute on the 3/4, the 1/4 synchronous time will be for naught.",
}

const communication = {
    icon: "link",
    title: "Low context communication",
    paragraph1: "Much of the time, when two people are in synchronous conversation, messages can be concise because shared context is clear. Everything from a meeting's name, the attendees present, the broken machine we're looking at together, to the hesitation you hear in my voice before answering a question provides important information that must be combined with the spoken words to compose each full message.",
    paragraph2: "When we're working asynchronously, firing quick messages/questions off without contextualizing, we require the reader to conduct a time-consuming investigation to piece together all of the unspoken elements.",
    paragraph3: "With this in mind......",
    paragraph4: "None of us will do this",
    linkTitle: "Document/Link 1",
    linkIcon: "link",
    linkLocation: "",
    linkTitle2: "Document/Link 2",
    linkIcon2: "link",
    linkLocation2: "",
};


const meetings = {
    icon: "",
    title: "Meetings",
    paragraph1: "Let's keep this section as goal-oriented and focused as our meetings are.",
    paragraph2: "Anyone who calls a meeting must have an agenda for the meeting published and attached to the meeting's calendar event before the meeting starts. Each meeting should have discrete goals defined in advance, and if they are accomplished before the meeting time is over, the meeting ends early socializing is a legitimate goal for a meeting",
    paragraph3: "Meetings start on time and end on time",
    paragraph4: "Unless there are extenuating circumstances, all participants use their video for every meeting",
    paragraph5: "All information around the meeting (timing, attendees, purpose, zoom link, etc.) is kept in the locations indicated in our SOT. If there is ever conflicting information, the SOT controls.",
};

const iteration = {
    icon: "",
    title: "Iterations & incrementalism",
    paragraph1: "Iterative and incremental processes mean that while we pursue perfection, we do so imperfect piece by imperfect piece. We identify and create the smallest viable component possible, release it for real-world testing, and then improve & build upon it as feedback surfaces.",
    paragraph2: "Iterative and incremental creation is a keystone in remote work. It's a prerequisite for asynchronous contributions, an Agile production cycle, and designing/building products in our rapidly evolving world.",
    paragraph3: "This practice is how we activate the Progress over perfection philosophy.",
    paragraph4: "Supporting authorities:",
    linkTitle: "Marshmallow video",
    linkIcon: "link",
    linkLocation: "",
    linkTitle2: "Design studies",
    linkIcon2: "link",
    linkLocation2: "",
    linkTitle3: "As GitLab value",
    linkIcon3: "link",
    linkLocation3: "",
};

const expectation = {
    icon: "",
    title: "Expectation settings",
    paragraph1: "This is a general concept ranging from please arrive to our Nemo meeting timely all the way to we'll need the site launched by Wednesday.",
    paragraph2: "None of us are strangers to expectation setting in a professional environment, but it can be awkward in a horizontal institution, let alone a volunteer one!",
    paragraph3: "However, we're here to work together in service of our mission, which requires relying on each other--and any time someone is relying on you for something, it's really important to establish a shared understanding of what that something is!",
    paragraph4: "CVP Practices The work product recipient and creator collaborate to determine what is reasonable to expect, and how to signal if the expectations will not be met. We are explicit in the shared understanding above. We record the above understanding in the relevant task management system, visible to both recipient and creator. The recipient trusts the creator to signal if expectations will not be met, ideally either via or after updating the task management system. Supporting authorities",
    paragraph5: "Supporting authorities",
    linkTitle: "Dilbert",
    linkIcon: "link",
    linkLocation: "",
}

const button1 = {
    link: "/onboarding/mod2",
    text: "previous"
}

const button2 = {
    link: "/onboarding/mod4",
    text: "next module"
}

function OnboardingMod3() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Header text={headerText} />
            
            <ModuleContent content={knowledge} />
            <ModuleContent content={transparency} />
            <ModuleContent content={asynchronous} />
            <ModuleContent content={communication} />
            <ModuleContent content={meetings} />
            <ModuleContent content={iteration} />
            <ModuleContent content={expectation} />
             
            <Footer button1={button1} button2={button2} />
        </div>
    );
}

export default OnboardingMod3;