import React from "react";
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

    const [ expanded, setExpanded, ] = React.useState("1");

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === "1"} onChange={handleChange("1")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography className={classes.heading}>Find your dashboard</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <ol>
                            <li>
                                Go to{" "}
                                <a
                                    href="https://airtable.com/appfJZShN8K4tcWHU/tblXQZfKPAJIjV4cL/viwATVLzgRzfGjf86?blocks=hide"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={classes.linkStyle}
                                >
                                    AirTable
                                </a>
                            </li>
                            <li>Click on the “Tasks” tab.</li>
                            <li>Toggle the “Views” sidebar by clicking the button in the top left corner.</li>
                            <li>
                                Find and click on “[your name] kanban.” This was created specifically for you with the
                                default filtering showing only tasks assigned to you explicitly. If you would like a
                                Calendar view, let Seamus know.
                            </li>
                        </ol>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "2"} onChange={handleChange("2")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography className={classes.heading}>Work on the onboarding tasks</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <p>
                            In your kanban, you will find some tasks that you must complete as soon as possible to get
                            yourself up to date with CVP work.
                        </p>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "3"} onChange={handleChange("3")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography className={classes.heading}>Engage with the new tasks</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <ol>
                            <li>
                                Check the tiles in your inbox column; they are new requests someone sent you. On the
                                tile, you’ll see:
                            </li>
                            <ul>
                                <li>The name of the request.</li>
                                <li>A symbol, indicating that:</li>
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
                                <li>
                                    If you have any questions, write them into the performance notes field, and @ the
                                    person who created the request (indicated in the Creator field).
                                </li>
                                <li>If there is a due date, consider it: </li>
                                <ul>
                                    <li>If it works for you, great!</li>
                                    <li>
                                        If you don’t change the completion date, it means you agree with the current
                                        deadline.
                                    </li>
                                    <li>
                                        If you need more time on a given task, change the due date to a reasonable time
                                        on the predicted completion field.
                                    </li>
                                </ul>
                            </ul>
                            <li>
                                Once you have a good understanding of the task and the predicted date reflects your
                                understanding, move the task to your to do column, indicating that you’ve integrated it
                                into your workflow.
                            </li>
                            <ul>
                                <li>
                                    Move the task you’re going to work on into the in progress column of your kanban.
                                </li>
                                <li>
                                    If the task is to create a work product and the request details don’t indicate a
                                    location to submit the product, drop the link into the performance notes section.
                                </li>
                                <li>Once your performance matches the AC, move the tile into the Delivered column.</li>
                            </ul>
                        </ol>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "4"} onChange={handleChange("4")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography className={classes.heading}>Re-work what needs reworking</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <p>
                            If you see a tile in the needs rework column, that indicates that something you placed into
                            the Delivered column was inconsistent with the AC, according to whoever reviewed it. It
                            happens to everyone!
                        </p>
                        <p>
                            Already visible on the tile should be a rating of how close you came to the AC and an
                            explanation as to why it needs to be reworked.
                        </p>
                        <ul>
                            <li>
                                If there is any confusion that remains about what someone is asking for, then @ the
                                person who signed the review in the AC gap analysis section for clarification.
                            </li>
                            <li>
                                If it’s not cleared up, hop on a Zoom call to talk it out. I know it’s inconvenient, but
                                it’ll save a whole lot of time in the long run!
                            </li>
                            <li>
                                When you have a good understanding of what you need to do, update the predicted date (if
                                there is one) and move it into your to do column.
                            </li>
                        </ul>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "5"} onChange={handleChange("5")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography className={classes.heading}>Add a task to someone else's kanban</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <ol>
                            <li>
                                For a simple request (not connected to Epics, Actions, Precedents, etc.), use this form.
                            </li>
                            <li>
                                If you’re an Owner and the request is part of a larger hierarchy of task group
                                structure, use{" "}
                                <a
                                    href="https://airtable.com/shrPD8xNfP2cZR6FB"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={classes.linkStyle}
                                >
                                    this form
                                </a>{" "}
                                to systematize and track the team’s workflow.
                            </li>
                        </ol>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "6"} onChange={handleChange("6")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography className={classes.heading}>Track task requests you make of others</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <p>
                            To differentiate which tasks are yours and which belong to other people, first display DRI
                            (Directly Responsible Individual) on each tile.
                        </p>
                        <ul>
                            <li>
                                Click on <img src={customizeCard} alt="customize Card" /> at the top of your dashboard.
                            </li>
                            <li>
                                Find <i>DRI</i> and toggle the radio button to green.
                            </li>
                        </ul>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "7"} onChange={handleChange("7")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography className={classes.heading}>Add tasks you created to your view</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <ol>
                            <li>
                                Click on <img src={filter} alt="filter" /> at the top of your dashboard.
                            </li>
                            <li>
                                Click + <i>Add filter</i>.
                            </li>
                            <li>In the new line created:</li>
                            <ul>
                                <li>
                                    Change <i>And</i> to <i>Or</i>.
                                </li>
                                <li>
                                    Select <i>Creator</i>.
                                </li>
                                <li>
                                    Leave <i>contains</i> in place.
                                </li>
                                <li>Type your own name into the blank.</li>
                            </ul>
                        </ol>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "8"} onChange={handleChange("8")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography className={classes.heading}>
                        Evaluate performance of a task someone completed for you
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <p>
                            When you enable the view indicated above, allowing you to see the tasks you created as done
                            and delivered, you’ll see the tiles’ DRIs placed into the Delivered column –it’s your
                            responsibility to evaluate and approve their work.
                        </p>
                        <ul>
                            <li>Click the tile to expand.</li>
                            <li>Read the notes the DRI wrote into the performance notes field.</li>
                            <li>Compare the work product with the AC.</li>
                            <li>Rate the performance in the AC Gap Qty. Remember to prioritize “good enough.”</li>
                            <li>
                                If the AC Gap Qty is 3 or less, put yourself in the DRI’s shoes to understand what
                                caused the gap. From this perspective, record the justification for the review and any
                                additional guidance required to help the DRI correct their deliverables into the AC Gap
                                Analysis field. Move the tile to the Needs Rework column.
                            </li>
                            <li>If the AC Gap Qty is 4 or 5, move the tile to the Approved column.</li>
                        </ul>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "9"} onChange={handleChange("9")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography className={classes.heading}>Create your own tasks for yourself</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <ol>
                            <li>
                                Head on over to the{" "}
                                <a
                                    href="https://airtable.com/appfJZShN8K4tcWHU/tblXQZfKPAJIjV4cL/viw5qPVwWi7GiDT2J?blocks=hide"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={classes.linkStyle}
                                >
                                    misc. tasks
                                </a>{" "}
                                grid in the Task sheet.{" "}
                            </li>
                            <ul>
                                <li>
                                    You’ll find a list of work that needs doing without a DRI, and without incomplete
                                    prerequisites grouped by discipline.
                                </li>
                            </ul>
                            <li>
                                Note the request details, the team that should be working on the task, and the task
                                group that the task falls within.
                            </li>
                            <li>
                                For tasks that you would like to work on, add yourself as DRI – this will cause the task
                                to populate your personal kanban.
                            </li>
                        </ol>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default TutorialAccordion;
