import { Grid } from '@material-ui/core';
import { useState } from 'react';

// icons
import customizeCard from '../../Assets/Onboarding/customizeCard.svg'
import filter from '../../Assets/Onboarding/filter.svg';

const contentStyle = {
  position: 'relative',
  marginLeft: '50px',
  marginTop: '15px',
  marginBottom: '15px',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '22px',
}

const linkStyle = {
  color: '#237BCD',
}

export default function AirtableModal(props) {
  const [sectionId, setSectionId] = useState(1);
  const [activeTab, setActiveTab] = useState(1);
  const sections = [
    { id: 1, title: "Find your dashboard" },
    { id: 2, title: "Work on the onboarding tasks" },
    { id: 3, title: "Engage with the new tasks" },
    { id: 4, title: "Re-work what needs reworking" },
    { id: 5, title: "Add a task to someone else's kanban" },
    { id: 6, title: "Track task requests you make of others" },
    { id: 7, title: "Add tasks you created to your view" },
    { id: 8, title: "Evaluate performance of a task someone completed for you" },
    { id: 9, title: "Create your own tasks for yourself" }
  ]

  const tabStyle = {
    cursor: 'pointer',
    width: '200px',
    height: '83px',
    color: '#fff',
    fontWeight: 600,
    fontSize: '17px',
    lineHeight: '23px',
    background: '#A2B5D5',
    border: '0.8px solid #000000',
  }

  const activeTabStyle = {
    cursor: 'pointer',
    width: '200px',
    height: '83px',
    color: '#fff',
    fontWeight: 600,
    fontSize: '17px',
    lineHeight: '23px',
    background: '#4E6C99',
    border: '1px solid #000000',
  }

  const showSection = (id) => {
    setSectionId(id);
    setActiveTab(id);
    console.log(activeTab);
  }

  return (
    <Grid container>
      <Grid item xs={2} >
        {sections.map((section) => (
          <button key={section.id} onClick={() => showSection(section.id)} style={activeTab === section.id ? activeTabStyle : tabStyle} >
            {section.title}
          </button>
        ))}
      </Grid>
      <Grid item xs={7} style={contentStyle}>
        {sectionId === 1 && (
          <div>
            <ol>
              <li>Go to <a href="https://airtable.com/appfJZShN8K4tcWHU/tblXQZfKPAJIjV4cL/viwATVLzgRzfGjf86?blocks=hide" target="_blank" rel="noreferrer" style={linkStyle}>AirTable</a></li>
              <li>Click on the “Tasks” tab.</li>
              <li>Toggle the “Views” sidebar by clicking the button in the top left corner.</li>
              <li>Find and click on “[your name] kanban.” This was created specifically for you with the default filtering showing only tasks assigned to you explicitly. If you would like a Calendar view, let Seamus know.</li>
            </ol>
          </div>
        )}
        {sectionId === 2 && (
          <div>
            <p>In your kanban, you will find some tasks that you must complete as soon as possible to get yourself up to date with CVP work.</p>
          </div>
        )}
        {sectionId === 3 && (
          <div>
            <ol>
              <li>
                Check the tiles in your inbox column; they are new requests someone sent you. On the tile, you’ll see:
              </li>
              <ul>
                <li>The name of the request.</li>
                <li>A  symbol, indicating that:</li>
                <ul>
                  <li>✅task is either in the delivered or accepted category.</li>
                  <li>🔵task is less than four days from due date.</li>
                  <li>🔴task is less than one day from due date.</li>
                  <li>😧task is overdue.</li>
                </ul>
                <li>The estimated date of completion (if there is one).</li>
                <li>An estimation of the time required to complete.</li>
                <li>The prerequisites (if there are any).</li>
              </ul>
              <li>Assess the task.</li>
              <ul>
                <li>Click on the tile to display the request details which include:</li>
                <ul>
                  <li>All information required for the task.</li>
                  <li>Any relevant links/resources.</li>
                  <li>The Assessment Criteria (AC) that your work will be compared to.</li>
                </ul>
                <li>If you have any questions, write them into the performance notes field, and @ the person who created the request (indicated in the Creator field).</li>
                <li>If there is a due date, consider it: </li>
                <ul>
                  <li>If it works for you, great!</li>
                  <li>If you don’t change the completion date, it means you agree with the current deadline.</li>
                  <li>If you need more time on a given task, change the due date to a reasonable time on the predicted completion field.</li>
                </ul>
              </ul>
              <li>Once you have a good understanding of the task and the predicted date reflects your understanding, move the task to your to do column, indicating that you’ve integrated it into your workflow.</li>
              <ul>
                <li>Move the task you’re going to work on into the in progress column of your kanban.</li>
                <li>If the task is to create a work product and the request details don’t indicate a location to submit the product, drop the link into the performance notes section.</li>
                <li>Once your performance matches the AC, move the tile into the Delivered column.</li>
              </ul>
            </ol>
          </div>
        )}
        {sectionId === 4 && (
          <div>
            <p>
              If you see a tile in the needs rework column, that indicates that something you placed into the Delivered column was inconsistent with the AC, according to whoever reviewed it. It happens to everyone!
            </p>
            <p>
              Already visible on the tile should be a rating of how close you came to the AC and an explanation as to why it needs to be reworked.
            </p>
            <ul>
              <li>If there is any confusion that remains about what someone is asking for, then @ the person who signed the review in the AC gap analysis section for clarification.</li>
              <li>If it’s not cleared up, hop on a Zoom call to talk it out. I know it’s inconvenient, but it’ll save a whole lot of time in the long run!</li>
              <li>When you have a good understanding of what you need to do, update the predicted date (if there is one) and move it into your to do column.</li>
            </ul>

          </div>
        )}
        {sectionId === 5 && (
          <div>
            <ol>
              <li>For a simple request (not connected to Epics, Actions, Precedents, etc.), use this form.</li>
              <li>If you’re an Owner and the request is part of a larger hierarchy of task group structure, use <a href='https://airtable.com/shrPD8xNfP2cZR6FB' target="_blank" rel="noreferrer" style={linkStyle}>this form</a> to systematize and track the team’s workflow.</li>
            </ol>
          </div>
        )}
        {sectionId === 6 && (
          <div>
            <p>To differentiate which tasks are yours and which belong to other people, first display DRI (Directly Responsible Individual) on each tile.</p>
            <ul>
              <li>Click on <img src={customizeCard} alt='customize Card' /> at the top of your dashboard.</li>
              <li>Find <i>DRI</i> and toggle the radio button to green.</li>
            </ul>
          </div>
        )}
        {sectionId === 7 && (
          <div>
            <ol>
              <li>Click on <img src={filter} alt='filter' /> at the top of your dashboard.</li>
              <li>Click + <i>Add filter</i>.</li>
              <li>In the new line created:</li>
              <ul>
                <li>Change <i>And</i> to <i>Or</i>.</li>
                <li>Select <i>Creator</i>.</li>
                <li>Leave <i>contains</i> in place.</li>
                <li>Type your own name into the blank.</li>
              </ul>
            </ol>
          </div>
        )}
        {sectionId === 8 && (
          <div>
            <p>When you enable the view indicated above, allowing you to see the tasks you created as done and delivered, you’ll see the tiles’ DRIs placed into the Delivered column –it’s your responsibility to evaluate and approve their work.</p>
            <ul>
              <li>Click the tile to expand.</li>
              <li>Read the notes the DRI wrote into the performance notes field.</li>
              <li>Compare the work product with the AC.</li>
              <li>Rate the performance in the AC Gap Qty. Remember to prioritize “good enough.”</li>
              <li>If the AC Gap Qty is 3 or less, put yourself in the DRI’s shoes to understand what caused the gap. From this perspective, record the justification for the review and any additional guidance required to help the DRI correct their deliverables into the AC Gap Analysis field. Move the tile to the Needs Rework column.</li>
              <li>If the AC Gap Qty is 4 or 5, move the tile to the Approved column.</li>
            </ul>
          </div>
        )}
        {sectionId === 9 && (
          <div>
            <ol>
              <li>Head on over to the "<a href='https://airtable.com/appfJZShN8K4tcWHU/tblXQZfKPAJIjV4cL/viw5qPVwWi7GiDT2J?blocks=hide' target="_blank" rel="noreferrer" style={linkStyle}>Work that needs doing</a>” grid in the Task sheet. </li>
              <ul>
                <li>You’ll find a list of work that needs doing without a DRI, and without incomplete prerequisites grouped by discipline.</li>
              </ul>
              <li>Note the request details, the team that should be working on the task, and the task group that the task falls within.</li>
              <li>For tasks that you would like to work on, add yourself as DRI – this will cause the task to populate your personal kanban.</li>
            </ol>
          </div>
        )}
      </Grid>
    </Grid>
  )
}
