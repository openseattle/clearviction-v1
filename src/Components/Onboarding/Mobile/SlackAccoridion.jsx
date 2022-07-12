import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import customizeCard from "../../../Assets/Onboarding/customizeCard.svg";
import filter from "../../../Assets/Onboarding/filter.svg";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    linkStyle: {
        color: "#237BCD",
    },
}));

const TutorialAccordion = props => {
    const classes = useStyles();

    const [expanded, setExpanded] = useState("1");

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === "1"} onChange={handleChange("1")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography className={classes.heading}>Set up profile</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <ol>
                            <li>Upload profile photo.</li>
                            <li>
                                Enter your first name, last name, and a{" "}
                                <a
                                    className={classes.linkStyle}
                                    href="https://www.oxfordlearnersdictionaries.com/us/about/practical-english-usage/phonetic-alphabet"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    phonetic spelling.
                                </a>{" "}
                            </li>
                            <li>Enter the display name you want to be called, followed by your preferred pronouns.</li>
                        </ol>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "2"} onChange={handleChange("2")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography className={classes.heading}>Update your notification settings</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <ol>
                            <li>On desktop:</li>
                            <ul>
                                <li>Click your profile picture in the top right.</li>
                                <li>Select “Preferences” from the menu to open your notification preferences.</li>
                                <li>Under “Notify me about”, choose your notification triggers.</li>
                                <li>
                                    To use different triggers for your mobile notifications, check the box next to “Use
                                    different settings for my mobile devices,” then select your preference from the
                                    drop-down menu.
                                </li>
                            </ul>
                            <li>
                                Download the Slack app to your phone and desktop and turn notifications on for @mentions
                                (If you would like any help with this, let Seamus know in the #tech_support channel).
                            </li>
                        </ol>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "3"} onChange={handleChange("3")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography className={classes.heading}>Check Slack messages at least once every day</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <p>
                            The only exception is when your status indicates that you’re away (update your status by
                            clicking on your profile photo and give as much detail as possible: e.g. vacation until
                            2022.05.23 check-ins every 3 days).
                        </p>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "4"} onChange={handleChange("4")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography className={classes.heading}>Contact team members</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <ol>
                            <li>To send a message, click on the channel group you would like to communicate with.</li>
                            <li>
                                Click on “Send a message” to deliver a message to your group members from the channel.
                            </li>
                        </ol>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "5"} onChange={handleChange("5")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography className={classes.heading}>Be thoughtful when you message team members</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <ol>
                            <li>Think before you type; be respectful and professional.</li>
                            <li>
                                Put enough information in your message to enable your recipient to respond when they’re
                                available.
                            </li>
                            <li>
                                When it is unclear which person on a team is the right person to answer a question, it
                                can be directed to the team as a whole.
                            </li>
                        </ol>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "6"} onChange={handleChange("6")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography className={classes.heading}>Have conversations in the open</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <p>
                            Transparent communication creates a shared purpose and lets everyone on the team
                            participate! If your first thought is that something should be a DM and your reason is:
                        </p>
                        <ol>
                            <li>
                                This is a secret, then we need to rethink how we can have a team only populated by
                                trustworthy people.
                            </li>
                            <li>
                                It might hurt someone’s feelings, then let’s find a way for the team to become more
                                professional.
                            </li>
                            <li>
                                Others don’t need to be interrupted/notified of this thing that only concerns my
                                intended recipient, then either the inappropriately interrupted person needs to remap
                                their notification preferences or your system admin needs to set up the appropriate
                                channels for this back-and-forth.
                            </li>
                        </ol>
                        <p>
                            If a conversation happens in private and you gained useful knowledge, report this back to
                            the whole group so that everyone is aware of it and is able to look this up.
                        </p>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "7"} onChange={handleChange("7")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography className={classes.heading}>Understand a channel's purpose</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <p>
                            The purpose of keeping posts in the right channel is two-fold: it ensures that only the
                            right people are informed of the post AND it keeps everyone interested in being part of the
                            conversation informed.
                        </p>
                        <p>
                            Based on your discipline, feel free to join the channels that apply to you. If you want to
                            learn more/join another team, feel free to join other channels.
                        </p>
                        <p>#general</p>
                        <ul>
                            <li>Everyone belongs. In fact, no one can leave!</li>
                            <li>Contains Team-wide announcements relating to CVP.</li>
                        </ul>
                        <p>#random</p>
                        <ul>
                            <li>Everyone belongs</li>
                            <li>Apropos of nothing posts. Mental relief.</li>
                        </ul>
                        <p>Team-specific channels</p>
                        <ul>
                            <li>Those who have chosen to monitor the team belong.</li>
                            <li>Naming convention: #team_[Team name].</li>
                        </ul>
                        <p>Community of Practice channels</p>
                        <ul>
                            <li>Those who are part of that discipline belong.</li>
                            <li>Naming convention: #cop_[discipline name].</li>
                        </ul>
                        <p>
                            Description: It’s always good to have a solid understanding of what a channel is for and
                            this information should be in the channel’s description. To see the “Description,” click on
                            the button in the top panel of each channel.
                        </p>
                        <p>
                            Topic: This can be found and edited under the channel name or under the button just as you
                            can for the “Description.”
                        </p>
                        <p>
                            We use the Topic section to add a link that is related to the channel. For example, here are
                            a few channel/topic pairs:
                        </p>
                        <ul>
                            <li>#Comings-and-goings is linked to the an onboarding guide. </li>
                            <li>Each #[Action] channel is connected to its respective Action Guide.</li>
                            <li>
                                #skillshare is connected to the database for all skillshares and skillshare signups.
                            </li>
                        </ul>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "8"} onChange={handleChange("8")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography className={classes.heading}>Join channels of interest</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <ol>
                            <li>
                                Click on “Channel Browser” at the top left of your sidebar. If you cannot see it, you
                                can click on “More” to find the “Channel Browser.”
                            </li>
                            <li>
                                Once you click on “Channel Browser” you can find the available Clearviction channels to
                                join.{" "}
                            </li>
                            <li>To join an available channel, simply click “Join.”</li>
                        </ol>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "9"} onChange={handleChange("9")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography className={classes.heading}>Use threads to keep communication organized</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <p>
                            There’s so much going on! In some channels, there will be a lot of people posting. To reply
                            in a thread, hover over their post and look for a speech bubble to appear on the right. This
                            creates a thread that keeps sub-conversations in one place.
                        </p>
                        <p>
                            Keep in mind that ONLY people who have commented on the thread itself are likely (but not
                            guaranteed) to be notified of your comment unless you @ them directly. This creates a nice
                            little corner of Slack for you to have a conversation in that:
                        </p>
                        <ul>
                            <li>Doesn’t occupy any physical space on others' Slack.</li>
                            <li>
                                Does not notify/interrupt users that subscribe to channel updates but are not in your
                                particular thread.
                            </li>
                            <li>
                                Allows people who are being notified of additions to the thread to unfollow a thread
                                specifically.
                            </li>
                            <li>
                                Is available to users who see that a conversation is happening and would like to either
                                participate or just see what's being said.
                            </li>
                            <li>Is discoverable via search.</li>
                        </ul>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "10"} onChange={handleChange("10")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography className={classes.heading}>Respond to requests in a timely manner</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <ul>
                            <li>
                                If it’s a request without an @[name] then we thread our own ability/willingness to
                                assist. We may @ someone else in the thread we consider the request.
                            </li>
                            <li>
                                If it’s a request directly to us, then we either react (emoji) to indicate that we’re
                                working on it, that we can’t be of assistance, or that we’ve seen the request and intend
                                to act on it at a specific time (immediately followed by transferring the activity to
                                the relevant task management system, of course).
                            </li>
                            <li>
                                If it's just meant as an asynchronous FYI, we may not respond at all, or we may give
                                little reaction to indicate that the message landed.
                            </li>
                        </ul>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default TutorialAccordion;
