import { Grid, Button } from "@mui/material";
import { useState } from "react";

// icons
import video from "../../Assets/Onboarding/video.svg";

// styles
import { useModalStyles } from "../../Styles/Onboarding/useModalStyles";

const SlackVideoModal = ({ handleSlackVideoClose }) => {
    const [sectionId, setSectionId] = useState(1);
    const [activeTab, setActiveTab] = useState(1);
    const classes = useModalStyles();

    const sections = [
        { id: 1, title: "Setting Up Your Profile" },
        { id: 2, title: "Finding & Joining a Channel" },
        { id: 3, title: "Creating a Channel" },
        { id: 4, title: "Conversing With Teammates" },
        { id: 5, title: "Understanding Donut" },
        { id: 6, title: "Checking Threads / Mentions" },
        { id: 7, title: "Understanding Active / Inactive Status" },
    ];

    const profile = "https://drive.google.com/file/d/13ke5zaKAJbChEOB5Im1tC5pypQ3XiZM-/preview";
    const channels = "https://drive.google.com/file/d/1N51-sShXuB3xcozLrTQAx9O6yebllgFx/preview";
    const createChannel = "https://drive.google.com/file/d/1Hodm4l4JBhUe_h0RQCHVin73VFXAzohl/preview";
    const convo = "https://drive.google.com/file/d/1Y-GN_bW03z4uyU91n695h7aaQDizULDP/preview";
    const donut = "https://drive.google.com/file/d/1Ne1eBJ76itiCTQjYzjhVxxR0n74SVnoO/preview";
    const threads = "https://drive.google.com/file/d/1Y-GN_bW03z4uyU91n695h7aaQDizULDP/preview";
    const active = "https://drive.google.com/file/d/1qNlcKF7Nik3PaifSJvKr_E6IvxewM5BX/preview";

    const tabStyle = {
        cursor: "pointer",
        width: "200px",
        height: "85px",
        color: "#fff",
        fontWeight: 700,
        fontSize: "17px",
        lineHeight: "23px",
        background: "#A2B5D5",
        border: "0.8px solid #000000",
    };

    const activeTabStyle = {
        cursor: "pointer",
        width: "200px",
        height: "85px",
        color: "#fff",
        fontWeight: 700,
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
                        <iframe title={sections.title} src={profile} width="100%" height="80%" allow="autoplay" />
                    </div>
                )}
                {sectionId === 2 && (
                    <div style={{ height: "100%" }}>
                        <iframe title={sections.title} src={channels} width="100%" height="80%" allow="autoplay" />
                    </div>
                )}
                {sectionId === 3 && (
                    <div style={{ height: "100%" }}>
                        <iframe title={sections.title} src={createChannel} width="100%" height="80%" allow="autoplay" />
                    </div>
                )}
                {sectionId === 4 && (
                    <div style={{ height: "100%" }}>
                        <iframe title={sections.title} src={convo} width="100%" height="80%" allow="autoplay" />
                    </div>
                )}
                {sectionId === 5 && (
                    <div style={{ height: "100%" }}>
                        <iframe title={sections.title} src={donut} width="100%" height="80%" allow="autoplay" />
                    </div>
                )}
                {sectionId === 6 && (
                    <div style={{ height: "80%" }}>
                        <iframe title={sections.title} src={threads} width="100%" height="80%" allow="autoplay" />
                    </div>
                )}
                {sectionId === 7 && (
                    <div style={{ height: "80%" }}>
                        <iframe title={sections.title} src={active} width="100%" height="80%" allow="autoplay" />
                    </div>
                )}
                <Button onClick={handleSlackVideoClose} className={classes.button}>
                    Close
                </Button>
            </Grid>
        </Grid>
    );
};

export default SlackVideoModal;
