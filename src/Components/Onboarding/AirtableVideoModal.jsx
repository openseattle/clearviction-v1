import { Grid, Button } from '@material-ui/core';
import { useState } from 'react';

// icons
import video from '../../Assets/Onboarding/video.svg';

const contentStyle = {
  position: 'relative',
  marginLeft: '110px',
  marginTop: '50px',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '22px',
}

const linkStyle = {
  color: '#237BCD',
}

export default function AirtableVideoModal() {
  const [ sectionId, setSectionId ] = useState(1);
  const [ activeTab, setActiveTab ] = useState(1);
  const sections = [
    { id: 1, title: "Complete your profile" },
    { id: 2, title: "Find your dashboard (kanban)" }, 
    { id: 3, title: "Work on the onboarding tasks and how to find tasks"}, 
    { id: 4, title: "Create a task for yourself"}, 
    { id: 5, title: "Track task requests you make of others"}, 
  ]

  const profile = "https://drive.google.com/file/d/1fcGzJpDKHs44ocX0AWqsBNAK5b6ivBlv/preview";
  const dashboard = "https://drive.google.com/file/d/1eLpoMObiwtTIbf5C4tG-a0sul2s2bSCF/preview";
  const onboardingTasks = "";
  const createTasks = "https://drive.google.com/file/d/1zXSu7ADYY66PL6ggWg-ks7Hq1mDxN4r0/preview";
  const requests = "https://drive.google.com/file/d/1ReQ7xLrlg_TxmrAE8cx-98dyjOOAZlGj/preview";

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
    console.log(activeTab);
  }

  return (
    <Grid container style={{ background: '#A2B5D5' }} >
        <Grid item xs={2} >
          { sections.map((section) => (
            <button  key={section.id}  onClick={() => showSection(section.id)} style={activeTab === section.id ? activeTabStyle : tabStyle } >
              <img src={video} alt="" style={{ width: '20px', float: 'left' }} />
              {section.title}
            </button>
          ))}
        </Grid>
        <Grid item xs={7} style={contentStyle}>
            { sectionId === 1 && (
              <div>
                <iframe title={sections.title} src={profile} width="110%" height="auto" allow="autoplay"></iframe>
              </div>
            )}
            { sectionId === 2 && (
              <div>
                <iframe title={sections.title} src={dashboard} width="110%" height="auto" allow="autoplay"></iframe>
              </div>
            )}
            { sectionId === 3 && (
              <div>
                <iframe title={sections.title} src={onboardingTasks} width="110%" height="auto" allow="autoplay"></iframe>
              </div>
            )}
            { sectionId === 4 && (
              <div>
                <iframe title={sections.title} src={createTasks} width="110%" height="auto" allow="autoplay"></iframe>
              </div>
            )}
            { sectionId === 5 && (
              <div>
                <iframe title={sections.title} src={requests} width="110%" height="auto" allow="autoplay"></iframe>
              </div>
            )}
            { sectionId === 6 && (
              <div>
               
              </div>
            )}
            { sectionId === 7 && (
              <div>
                
              </div>
            )}
            { sectionId === 8 && (
              <div>
                
              </div>
            )}
            { sectionId === 9 && (
              <div>
                
              </div>
            )}
        </Grid>
    </Grid>
  )
}
