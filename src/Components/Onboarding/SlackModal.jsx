import { Grid } from '@material-ui/core';
import { useState } from 'react';

const contentStyle = {
  position: 'relative',
  marginLeft: '110px',
  marginTop: '50px',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '22px',
}

export default function SlackModal() {
  const [ sectionId, setSectionId ] = useState(1);
  const [ activeTab, setActiveTab ] = useState(1);
  const sections = [
    { id: 1, title: "Set up profile" },
    { id: 2, title: "Update your notification settings" }, 
    { id: 3, title: "Check Slack messages at least once every day"}, 
    { id: 4, title: "Contact team members"}, 
    { id: 5, title: "Be thoughtful when you message team members"}, 
    { id: 6, title: "Have conversations in the open"}, 
    { id: 7, title: "Understand a channel's purpose"}, 
    { id: 8, title: "Join channels of interest"}, 
    { id: 9, title: "Use threads to keep communication organized" },
    { id: 10, title: "Respond to requests in a timely manner" },
  ]

  const tabStyle = {
    cursor: 'pointer',
    width: '200px', 
    height: '75px',
    color: '#fff',
    fontWeight: 700,
    fontSize: '17px',
    lineHeight: '23px',
    background: '#A2B5D5',
    border: '0.8px solid #000000',
  }

  const activeTabStyle = {
    cursor: 'pointer',
    width: '200px', 
    height: '75px',
    color: '#fff',
    fontWeight: 700,
    fontSize: '17px',
    lineHeight: '23px',
    background: '#4E6C99',
    border: '1px solid #000000',
  }

  const showSection = (id) => {
    setSectionId(id);
    setActiveTab(id);
  }

  return (
    <Grid container style={{ background: '#A2B5D5' }} >
        <Grid item xs={2} >
          { sections.map((section) => (
            <button  key={section.id}  onClick={() => showSection(section.id)} style={activeTab === section.id ? activeTabStyle : tabStyle } >
              {section.title}
            </button>
          ))}
        </Grid>
        <Grid item xs={7} style={contentStyle}>
            { sectionId === 1 && (
              <div>
                <ol>
                  <li>Upload profile photo.</li>
                  <li>Enter your first name, last name, and a <a href='https://www.oxfordlearnersdictionaries.com/us/about/practical-english-usage/phonetic-alphabet' target='_blank' rel='noreferrer' >phonetic spelling.</a> </li>
                  <li>Enter the display name you want to be called, followed by your preferred pronouns.</li>
                </ol>
              </div>
            )}
            { sectionId === 2 && (
              <div>
                <ol>
                  <li>On desktop:</li>
                  <ul>
                    <li>Click your profile picture in the top right.</li>
                    <li>Select “Preferences” from the menu to open your notification preferences.</li>
                    <li>Under “Notify me about”, choose your notification triggers.</li>
                    <li>To use different triggers for your mobile notifications, check the box next to “Use different settings for my mobile devices,” then select your preference from the drop-down menu.</li>
                  </ul>
                  <li>Download the Slack app to your phone and desktop and turn notifications on for @mentions (If you would like any help with this, let Seamus know in the #tech_support channel).</li>
                </ol>
              </div>
            )}
            { sectionId === 3 && (
              <div>
                <p>The only exception is when your status indicates that you’re away (update your status by clicking on your profile photo and give as much detail as possible: e.g. vacation until 2022.05.23 check-ins every 3 days).</p>
              </div>
            )}
            { sectionId === 4 && (
              <div>
                <ol>
                  <li>To send a message, click on the channel group you would like to communicate with.</li>
                  <li>Click on “Send a message” to deliver a message to your group members from the channel.</li>
                </ol>
              </div>
            )}
            { sectionId === 5 && (
              <div>
                <ol>
                  <li>Think before you type; be respectful and professional.</li>
                  <li>Put enough information in your message to enable your recipient to respond when they’re available.</li>
                  <li>When it is unclear which person on a team is the right person to answer a question, it can be directed to the team as a whole.</li>
                </ol>
              </div>
            )}
            { sectionId === 6 && (
              <div>
                <p>Transparent communication creates a shared purpose and lets everyone on the team participate! If your first thought is that something should be a DM and your reason is:</p>
                <ol>
                  <li>This is a secret, then we need to rethink how we can have a team only populated by trustworthy people.</li>
                  <li>It might hurt someone’s feelings, then let’s find a way for the team to become more professional.</li>
                  <li>Others don’t need to be interrupted/notified of this thing that only concerns my intended recipient, then either the inappropriately interrupted person needs to remap their notification preferences or your system admin needs to set up the appropriate channels for this back-and-forth.</li>
                </ol>
                <p>If a conversation happens in private and you gained useful knowledge, report this back to the whole group so that everyone is aware of it and is able to look this up.</p>
              </div>
            )}
            { sectionId === 7 && (
              <div>
                <p>The purpose of keeping posts in the right channel is two-fold: it ensures that only the right people are informed of the post AND it keeps everyone interested in being part of the conversation informed.</p>
                <p>Based on your discipline, feel free to join the channels that apply to you. If you want to learn more/join another team, feel free to join other channels.</p>
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
                <p>Description:  It’s always good to have a solid understanding of what a channel is for and this information should be in the channel’s description. To see the “Description,” click on the button in the top panel of each channel.</p>
                <p>Topic: This can be found and edited under the channel name or under the button just as you can for the “Description.”</p>
                <p>We use the Topic section to add a link that is related to the channel. For example, here are a few channel/topic pairs:</p>
                <ul>
                  <li>#Comings-and-goings is linked to the an onboarding guide. </li>
                  <li>Each #[Action] channel is connected to its respective Action Guide.</li>
                  <li>#skillshare is connected to the database for all skillshares and skillshare signups.</li>
                </ul>
              </div>
            )}
            { sectionId === 8 && (
              <div>
                <ol>
                  <li>Click on “Channel Browser” at the top left of your sidebar. If you cannot see it, you can click on “More” to find the “Channel Browser.”</li>
                  <li>Once you click on “Channel Browser” you can find the available Clearviction channels to join. </li>
                  <li>To join an available channel, simply click “Join.”</li>
                </ol>
              </div>
            )}
            { sectionId === 9 && (
              <div>
                <p>There’s so much going on! In some channels, there will be a lot of people posting. To reply in a thread, hover over their post and look for a speech bubble to appear on the right. This creates a thread that keeps sub-conversations in one place.</p>
                <p>Keep in mind that ONLY people who have commented on the thread itself are likely (but not guaranteed) to be notified of your comment unless you @ them directly. This creates a nice little corner of Slack for you to have a conversation in that:</p>
                <ul>
                  <li>Doesn’t occupy any physical space on others' Slack.</li>
                  <li>Does not notify/interrupt users that subscribe to channel updates but are not in your particular thread.</li>
                  <li>Allows people who are being notified of additions to the thread to unfollow a thread specifically.</li>
                  <li>Is available to users who see that a conversation is happening and would like to either participate or just see what's being said.</li>
                  <li>Is discoverable via search.</li>
                </ul>
              </div>
            )}
            { sectionId === 10 && (
              <div>
                <ul>
                  <li>If it’s a request without an @[name] then we thread our own ability/willingness to assist. We may @ someone else in the thread we consider the request.</li>
                  <li>If it’s a request directly to us, then we either react (emoji) to indicate that we’re working on it, that we can’t be of assistance, or that we’ve seen the request and intend to act on it at a specific time (immediately followed by transferring the activity to the relevant task management system, of course).</li>
                  <li>If it's just meant as an asynchronous FYI, we may not respond at all, or we may give little reaction to indicate that the message landed.</li>
                </ul>
              </div>
            )}
        </Grid>
    </Grid>
  )
}
