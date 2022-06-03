import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Typography, Modal, Button, Box } from '@material-ui/core';
import { useModuleContentStyles } from '../../Styles/Onboarding/useModuleContentStyles';
import link from '../../Assets/Onboarding/link.svg';
import doc from '../../Assets/Onboarding/doc.svg';
import video from '../../Assets/Onboarding/video.svg';

import AirtableModal from './AirtableModal';
import SlackModal from './SlackModal';
import AirtableVideoModal from './AirtableVideoModal';

const modalStyle = {
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    padding: "50px"
}

function ModuleContent(props) {
    const classes = useModuleContentStyles();
    const { title, subheading,
        paragraph1, paragraph2,
        paragraph3, paragraph4,
        linkTitle, linkTitle2,
        linkTitle3, linkIcon,
        linkIcon2, linkIcon3,
        linkLocation, linkLocation2,
        linkLocation3, modalParagraph1,
        modalTitle, modalParagraph2,
        modalParagraph3, modalParagraph4,
        p2bullet1, p2bullet2,
        p2bullet3, p3bullet1,
        p3bullet2, p3bullet3,
        p3bullet4,
    } = props.content;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [airtableOpen, setAirtableOpen] = useState(false);
    const handleAirtableOpen = () => setAirtableOpen(true);
    const handleAirtableClose = () => setAirtableOpen(false);

    const [slackOpen, setSlackOpen] = useState(false);
    const handleSlackOpen = () => setSlackOpen(true);
    const handleSlackClose = () => setSlackOpen(false);

    const [airtableVideoOpen, setAirtableVideoOpen] = useState(false);
    const handleAirtableVideoOpen = () => setAirtableVideoOpen(true);
    const handleAirtableVideoClose = () => setAirtableVideoOpen(false);

    const [slackVideoOpen, setSlackVideoOpen] = useState(false);
    const handleSlackVideoOpen = () => setSlackVideoOpen(true);
    const handleSlackVideoClose = () => setSlackVideoOpen(false);


    return (
        <div className={classes.moduleContentCard + " " + classes.regularContainer}>
            {/* <div className={classes.regularContainer}> */}

            <Typography variant="h4" className={classes.moduleCardHeading}>{title}</Typography>
            <Typography variant="body2" className={classes.bold}>{subheading}</Typography>
            {paragraph1 ? <Typography variant="body2" className={classes.moduleCardBody}>{paragraph1}</Typography> : null}
            {paragraph2 ? <Typography variant="body2" className={classes.moduleCardBody}>{paragraph2}</Typography> : null}
            {paragraph3 ? <Typography variant="body2" className={classes.moduleCardBody}>{paragraph3}</Typography> : null}
            {paragraph4 ? <Typography variant="body2" className={classes.moduleCardBody}>{paragraph4}</Typography> : null}

            {linkTitle ? (
                <div className={classes.moduleContentLink}>
                    {linkIcon === "link" &&
                        <Button href={linkLocation} target="_blank" rel="noreferrer"
                            className={classes.linkContainer}>
                            <div className={classes.linkContainer}>
                                <img src={link} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText} >{linkTitle}</p>
                            </div>
                        </Button>
                    }
                    {linkIcon === "doc" &&
                        <Button onClick={handleOpen} className={classes.linkContainer} >
                            <div className={classes.linkContainer}>
                                <img src={doc} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText} >{linkTitle}</p>
                            </div>
                        </Button>
                    }
                    {linkIcon === "docAirtable" &&
                        <Button onClick={handleAirtableOpen} style={{ textDecoration: "none", color: "#4e6c99" }} >
                            <div className={classes.linkContainer}>
                                <img src={doc} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText} >{linkTitle}</p>
                            </div>
                        </Button>
                    }
                    {linkIcon === "videoAirtable" &&
                        <Button onClick={handleAirtableVideoOpen} className={classes.linkContainer} >
                            <div className={classes.linkContainer}>
                                <img src={video} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText} >{linkTitle}</p>
                            </div>
                        </Button>
                    }
                    {linkIcon === "videoSlack" &&
                        <Button onClick={handleSlackVideoOpen}
                            className={classes.linkContainer} >
                            <div className={classes.linkContainer}>
                                <img src={video} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText} >{linkTitle}</p>
                            </div>
                        </Button>
                    }
                    {linkIcon === "videoMiro" &&
                        <Button
                            // onClick={handleSlackVideoOpen} 
                            className={classes.linkContainer} >
                            <div className={classes.linkContainer}>
                                <img src={video} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText} >{linkTitle}</p>
                            </div>
                        </Button>
                    }
                </div>
            ) : (
                null
            )}

            {linkTitle2 ? (
                <div className={classes.moduleContentLink}>
                    {linkIcon2 === "link" &&
                        <Button href={linkLocation2} target="_blank" rel="noreferrer"
                            className={classes.linkContainer}
                        >
                            <div className={classes.linkContainer}>
                                <img src={link} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText} >{linkTitle2}</p>
                            </div>
                        </Button>
                    }
                    {linkIcon2 === "doc" &&
                        <Button onClick={handleOpen} className={classes.linkContainer}>
                            <div className={classes.linkContainer}>
                                <img src={doc} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText2} >{linkTitle2}</p>
                            </div>
                        </Button>
                    }
                    {linkIcon2 === "docAirtable" &&
                        <Button onClick={handleAirtableOpen} className={classes.linkContainer} >
                            <div className={classes.linkContainer}>
                                <img src={doc} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText} >{linkTitle2}</p>
                            </div>
                        </Button>
                    }
                    {linkIcon2 === "docSlack" &&
                        <Button onClick={handleSlackOpen} className={classes.linkContainer} >
                            <div className={classes.linkContainer}>
                                <img src={doc} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText} >{linkTitle2}</p>
                            </div>
                        </Button>
                    }
                    {linkIcon2 === "video" &&
                        <Button style={{ textDecoration: "none", color: "#4e6c99" }} >
                            <div className={classes.linkContainer}>
                                <img src={video} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText2} >{linkTitle2}</p>
                            </div>
                        </Button>
                    }
                </div>
            ) : (
                null
            )}

            {linkTitle3 ? (
                <div className={classes.moduleContentLink}>

                    {linkIcon3 === "link" &&
                        <Button href={linkLocation3} target="_blank" rel="noreferrer"
                            className={classes.linkContainer}>
                            <div className={classes.linkContainer}>
                                <img src={link} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText} >{linkTitle3}</p>
                            </div>
                        </Button>
                    }
                    {linkIcon3 === "doc" &&
                        <Button onClick={handleOpen} style={{ textDecoration: "none", color: "#4e6c99" }} >
                            <div className={classes.linkContainer}>
                                <img src={doc} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText} >{linkTitle3}</p>
                            </div>
                        </Button>
                    }
                    {linkIcon3 === "video" &&
                        <Button style={{ textDecoration: "none", color: "#4e6c99" }} >
                            <div className={classes.linkContainer}>
                                <img src={video} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText} >{linkTitle3}</p>
                            </div>
                        </Button>
                    }
                </div>

            ) : (
                null
            )}

            {/* main modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby=''
                aria-describedby=''
            >
                <Box sx={modalStyle}>
                    <Typography className={classes.modalTitleStyle} >
                        {modalTitle}
                    </Typography>
                    <Typography variant='body2' className={classes.moduleCardBody}>
                        {modalParagraph1}
                    </Typography>
                    <Typography variant='body2' className={classes.moduleCardBody}>
                        {modalParagraph2}
                        <ul>
                            {p2bullet1 ? <li>{p2bullet1}</li> : null}
                            {p2bullet2 ? <li>{p2bullet2}</li> : null}
                            {p2bullet3 ? <li>{p2bullet3}</li> : null}
                        </ul>
                    </Typography>
                    <Typography variant='body2' className={classes.moduleCardBody}>
                        {modalParagraph3}
                        <ul>
                            {p3bullet1 ? <li>{p3bullet1}</li> : null}
                            {p3bullet2 ? <li>{p3bullet2}</li> : null}
                            {p3bullet3 ? <li>{p3bullet3}</li> : null}
                            {p3bullet4 ? <li>{p3bullet4}</li> : null}
                        </ul>
                    </Typography>
                    <Typography variant='body2' className={classes.moduleCardBody}>
                        {modalParagraph4}
                    </Typography>
                    <Button onClick={handleClose} className={classes.button}>
                        Close
                    </Button>
                </Box>
            </Modal>

            {/* complex airtable modal */}
            <Modal
                open={airtableOpen}
                onClose={handleAirtableClose}
                aria-labelledby=''
                aria-describedby=''
                style={{ maxHeight: '100vh', overflowY: 'auto', position: 'absolute', top: 0 }}
            >
                <Box sx={modalStyle}>
                    <AirtableModal />
                    <Button onClick={handleAirtableClose} className={classes.button}>
                        Close
                    </Button>
                </Box>
            </Modal>

            {/* video airtable modal */}
            <Modal
                open={airtableVideoOpen}
                onClose={handleAirtableVideoClose}
                aria-labelledby=''
                aria-describedby=''
                style={{ maxHeight: '100vh', overflowY: 'auto', position: 'absolute', top: 0 }}
            >
                <Box sx={modalStyle}>
                    <AirtableVideoModal />
                    <Button onClick={handleAirtableVideoClose} className={classes.button}>
                        Close
                    </Button>
                </Box>
            </Modal>

            {/* complex slack modal */}
            <Modal
                open={slackOpen}
                onClose={handleSlackClose}
                aria-labelledby=''
                aria-describedby=''
                style={{ maxHeight: '100vh', overflowY: 'auto', position: 'absolute', top: 0 }}
            >
                <Box sx={modalStyle}>
                    <SlackModal />
                    <Button onClick={handleSlackClose} className={classes.button}>
                        Close
                    </Button>
                </Box>
            </Modal>

            {/* video slack modal */}
            <Modal
                open={slackVideoOpen}
                onClose={handleSlackVideoClose}
                aria-labelledby=''
                aria-describedby=''
                style={{ maxHeight: '100vh', overflowY: 'auto', position: 'absolute', top: 0 }}
            >
                <Box sx={modalStyle}>
                    <AirtableVideoModal />
                    <Button onClick={handleSlackVideoClose} className={classes.button}>
                        Close
                    </Button>
                </Box>
            </Modal>

        </div>
    );
};

export default ModuleContent;