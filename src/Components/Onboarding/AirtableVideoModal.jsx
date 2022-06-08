import { Grid } from '@material-ui/core';
import { useState } from 'react';

// icons
import video from '../../Assets/Onboarding/video.svg';

const contentStyle = {
  // position: 'relative',
  width: "100%",
  heigth: "100%",
  marginLeft: '50px',
  marginTop: '25px',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '22px',
}

export default function AirtableVideoModal() {
  const [sectionId, setSectionId] = useState(1);
  const [activeTab, setActiveTab] = useState(1);
  const sections = [
    { id: 1, title: "Complete your profile" },
    { id: 2, title: "Find your dashboard (kanban) and tasks" },
    { id: 3, title: "Engaging with tasks" },
    { id: 4, title: "How to create a task for yourself and add a task to someone else's kanban" },
    { id: 5, title: "Track task requests & Add Tasks you created to your view" },
    { id: 6, title: "Evalute someone's performance of a task they have completed for you" },
  ]

  const profile = "https://drive.google.com/file/d/1fcGzJpDKHs44ocX0AWqsBNAK5b6ivBlv/preview";
  const dashboard = "https://drive.google.com/file/d/1eLpoMObiwtTIbf5C4tG-a0sul2s2bSCF/preview";
  const engageTasks = "https://drive.google.com/file/d/1JfIh5ytgqtCT2ixF22qp7Ar_XKWVKYZD/preview";
  const createTasks = "https://drive.google.com/file/d/1zXSu7ADYY66PL6ggWg-ks7Hq1mDxN4r0/preview";
  const requests = "https://drive.google.com/file/d/1ReQ7xLrlg_TxmrAE8cx-98dyjOOAZlGj/preview";
  const evaluate = "https://drive.google.com/file/d/1W6QXg0U2EHgckjr8XmM9sA3a1X31N-pd/preview";

  const tabStyle = {
    cursor: 'pointer',
    width: '200px',
    height: '100px',
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
    height: '100px',
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
    <Grid container style={{ background: '#A2B5D5', height: "83.5%" }} >
      <Grid item xs={2} >
        {sections.map((section) => (
          <button key={section.id} onClick={() => showSection(section.id)} style={activeTab === section.id ? activeTabStyle : tabStyle} >
            <img src={video} alt="" style={{ width: '20px', float: 'left' }} />
            {section.title}
          </button>
        ))}
      </Grid>
      <Grid item xs={7} md={8} lg={9} style={contentStyle}>
        {sectionId === 1 && (
          <div style={{ height: "100%" }}>
            <iframe title={sections.title} src={profile} width="100%" height="90%" allow="autoplay"></iframe>
          </div>
        )}
        {sectionId === 2 && (
          <div style={{ height: "100%" }}>
            <iframe title={sections.title} src={dashboard} width="100%" height="90%" allow="autoplay"></iframe>
          </div>
        )}
        {sectionId === 3 && (
          <div style={{ height: "100%" }}>
            <iframe title={sections.title} src={engageTasks} width="100%" height="90%" allow="autoplay"></iframe>
          </div>
        )}
        {sectionId === 4 && (
          <div style={{ height: "100%" }}>
            <iframe title={sections.title} src={createTasks} width="100%" height="90%" allow="autoplay"></iframe>
          </div>
        )}
        {sectionId === 5 && (
          <div style={{ height: "100%" }}>
            <iframe title={sections.title} src={requests} width="100%" height="90%" allow="autoplay"></iframe>
          </div>
        )}
        {sectionId === 6 && (
          <div style={{ height: "100%" }}>
            <iframe title={sections.title} src={evaluate} width="100%" height="90%" allow="autoplay"></iframe>
          </div>
        )}
      </Grid>
    </Grid>
  )
}
