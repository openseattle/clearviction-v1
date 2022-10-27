import { Grid, Button } from "@mui/material";
import { useState } from "react";

// icons
import video from "../../Assets/Onboarding/video.svg";

// styles
import { useModalStyles } from "../../Styles/Onboarding/useModalStyles";

export default function AirtableVideoModal({ handleAirtableVideoClose }) {
    const [sectionId, setSectionId] = useState(1);
    const [activeTab, setActiveTab] = useState(1);
    const classes = useModalStyles();

    const sections = [
        { id: 1, title: "Completing Your profile" },
        { id: 2, title: "Finding Your Dashboard (Kanban)" },
        { id: 3, title: "Engaging With Tasks" },
        { id: 4, title: "Creating a Task (& Assigning It)" },
        { id: 5, title: "Tracking & Viewing Tasks" },
        { id: 6, title: "Evalutinging a Completed Task" },
    ];

    const profile = "https://drive.google.com/file/d/1fcGzJpDKHs44ocX0AWqsBNAK5b6ivBlv/preview";
    const dashboard = "https://drive.google.com/file/d/1eLpoMObiwtTIbf5C4tG-a0sul2s2bSCF/preview";
    const engageTasks = "https://drive.google.com/file/d/1IS3XA1n2KopFe6N-nMoR-BQg_KQTrfTS/preview";
    const createTasks = "https://drive.google.com/file/d/1zXSu7ADYY66PL6ggWg-ks7Hq1mDxN4r0/preview";
    const requests = "https://drive.google.com/file/d/1GpVX0sCVPz_6RBiJgmekdNXbeGsQ48Ca/preview";
    const evaluate = "https://drive.google.com/file/d/1W6QXg0U2EHgckjr8XmM9sA3a1X31N-pd/preview";

    const tabStyle = {
        cursor: "pointer",
        width: "200px",
        marginRight: "50px",
        height: "100px",
        color: "#fff",
        fontWeight: 600,
        fontSize: "17px",
        lineHeight: "23px",
        background: "#A2B5D5",
        border: "0.8px solid #000000",
    };

    const activeTabStyle = {
        cursor: "pointer",
        width: "200px",
        height: "100px",
        color: "#fff",
        fontWeight: 600,
        fontSize: "17px",
        lineHeight: "23px",
        background: "#4E6C99",
        border: "1px solid #000000",
    };

    const showSection = id => {
        setSectionId(id);
        setActiveTab(id);
    };

    return (
        <Grid container style={{ justifyContent: "space-between", marginBottom: "60px" }}>
            <Grid item xs={2}>
                {sections.map(section => (
                    <button
                        type="button"
                        key={section.id}
                        onClick={() => showSection(section.id)}
                        style={activeTab === section.id ? activeTabStyle : tabStyle}
                    >
                        <img src={video} alt="" style={{ width: "20px", float: "left" }} />
                        {section.title}
                    </button>
                ))}
            </Grid>
            <Grid item xs={7} md={8} lg={9} className={classes.contentStyle}>
                {sectionId === 1 && (
                    <div style={{ height: "100%" }}>
                        <iframe
                            title={sections.title}
                            src={profile}
                            width="100%"
                            height="80%"
                            allow="autoplay"
                        />
                    </div>
                )}
                {sectionId === 2 && (
                    <div style={{ height: "100%" }}>
                        <iframe
                            title={sections.title}
                            src={dashboard}
                            width="100%"
                            height="80%"
                            allow="autoplay"
                        />
                    </div>
                )}
                {sectionId === 3 && (
                    <div style={{ height: "100%" }}>
                        <iframe
                            title={sections.title}
                            src={engageTasks}
                            width="100%"
                            height="80%"
                            allow="autoplay"
                        />
                    </div>
                )}
                {sectionId === 4 && (
                    <div style={{ height: "100%" }}>
                        <iframe
                            title={sections.title}
                            src={createTasks}
                            width="100%"
                            height="80%"
                            allow="autoplay"
                        />
                    </div>
                )}
                {sectionId === 5 && (
                    <div style={{ height: "100%" }}>
                        <iframe
                            title={sections.title}
                            src={requests}
                            width="100%"
                            height="80%"
                            allow="autoplay"
                        />
                    </div>
                )}
                {sectionId === 6 && (
                    <div style={{ height: "100%" }}>
                        <iframe
                            title={sections.title}
                            src={evaluate}
                            width="100%"
                            height="80%"
                            allow="autoplay"
                        />
                    </div>
                )}
                <Button
                    onClick={handleAirtableVideoClose}
                    style={{ margin: "0 auto 64px" }}
                    className={classes.button}
                >
                    Close
                </Button>
            </Grid>
        </Grid>
    );
}
