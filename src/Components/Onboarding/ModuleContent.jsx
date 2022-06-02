import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Typography, Modal, Button, Box } from '@material-ui/core';
import { useModuleContentStyles } from '../../Styles/Onboarding/useModuleContentStyles';
import link from '../../Assets/Onboarding/link.svg';
import doc from '../../Assets/Onboarding/doc.svg';
import video from '../../Assets/Onboarding/video.svg';

import AirtableModal from './AirtableModal';

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
        modalParagraph3,modalParagraph4,
    } = props.content;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const [airtableOpen, setAirtableOpen] = useState(false);
    const handleAirtableOpen = () => setAirtableOpen(true);
    const handleAirtableClose = () => setAirtableOpen(false);

    return (
        <div className={classes.moduleContentCard + " " + classes.regularContainer}>
            {/* <div className={classes.regularContainer}> */}

                { linkTitle ? (
                    <div className={classes.moduleContentLink}>
                        { linkIcon === "link" &&
                            <a href={linkLocation} target="_blank" rel="noreferrer"
                                style={{ textDecoration: "none", color: "#4e6c99", flex: 1 }}>
                                <div className={classes.linkContainer}>
                                    <img src={link} alt="" className={classes.linkIcon} />
                                    <p className={classes.linkText} >{linkTitle}</p>
                                </div>
                            </a>    
                        }
                        { linkIcon === "doc" && 
                            <Button onClick={handleOpen} style={{ textDecoration: "none", color: "#4e6c99"}} >
                                <div className={classes.linkContainer}>
                                    <img src={doc} alt="" className={classes.linkIcon} />
                                    <p className={classes.linkText} >{linkTitle}</p>
                                </div>
                            </Button>
                        }
                        { linkIcon === "docAirtable" && 
                            <Button onClick={handleAirtableOpen} style={{ textDecoration: "none", color: "#4e6c99"}} >
                                <div className={classes.linkContainer}>
                                    <img src={doc} alt="" className={classes.linkIcon} />
                                    <p className={classes.linkText} >{linkTitle}</p>
                                </div>
                            </Button>
                        }
                        { linkIcon === "video" && 
                            <Button style={{ textDecoration: "none", color: "#4e6c99" }} >
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

                { linkTitle2 ? (
                    <div className={classes.moduleContentLink}>
                            { linkIcon2 === "link" &&
                                <a href={linkLocation2} target="_blank" rel="noreferrer" 
                                    style={{ textDecoration: "none", color: "#4e6c99", flex: 1 }}
                                >
                                    <div className={classes.linkContainer}>
                                        <img src={link} alt="" className={classes.linkIcon} />
                                        <p className={classes.linkText} >{linkTitle2}</p>
                                    </div>
                                </a>
                            }
                            { linkIcon2 === "doc" && 
                                <Button onClick={handleOpen} style={{ textDecoration: "none", color: "#4e6c99"}} >
                                    <div className={classes.linkContainer}>
                                        <img src={doc} alt="" className={classes.linkIcon} />
                                        <p className={classes.linkText2} >{linkTitle2}</p>
                                    </div>
                                </Button>
                            }
                            { linkIcon2 === "docAirtable" && 
                                <Button onClick={handleAirtableOpen} style={{ textDecoration: "none", color: "#4e6c99"}} >
                                    <div className={classes.linkContainer}>
                                        <img src={doc} alt="" className={classes.linkIcon} />
                                        <p className={classes.linkText2} >{linkTitle2}</p>
                                    </div>
                                </Button>
                            }
                            { linkIcon2 === "video" && 
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

            {linkTitle2 ? (
                <div className={classes.moduleContentLink}>
                    {linkIcon2 === "link" &&
                        <a href={linkLocation2} target="_blank" rel="noreferrer"
                            style={{ textDecoration: "none", color: "#4e6c99", flex: 1 }}
                        >
                            <div className={classes.linkContainer}>
                                <img src={link} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText} >{linkTitle2}</p>
                            </div>
                        </a>
                    }
                    {linkIcon2 === "doc" &&
                        <Button onClick={handleOpen} style={{ textDecoration: "none", color: "#4e6c99" }} >
                            <div className={classes.linkContainer}>
                                <img src={doc} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText2} >{linkTitle2}</p>
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
                        <a href={linkLocation3} target="_blank" rel="noreferrer"
                            style={{ textDecoration: "none", color: "#4e6c99", flex: 1 }}>
                            <div className={classes.linkContainer}>
                                <img src={link} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText3} >{linkTitle3}</p>
                            </div>
                        </a>
                    }
                    {linkIcon3 === "doc" &&
                        <Button onClick={handleOpen} style={{ textDecoration: "none", color: "#4e6c99" }} >
                            <div className={classes.linkContainer}>
                                <img src={doc} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText3} >{linkTitle3}</p>
                            </div>
                        </Button>
                    }
                    {linkIcon3 === "video" &&
                        <Button style={{ textDecoration: "none", color: "#4e6c99" }} >
                            <div className={classes.linkContainer}>
                                <img src={video} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText3} >{linkTitle3}</p>
                            </div>
                        </Button>
                    }
                </div>

            ) : (
                null
            )}
            {/* </div> */}
            {/* {modalTitle ? */}
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
                    </Typography>
                    <Typography variant='body2' className={classes.moduleCardBody}>
                        {modalParagraph3}
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
                style={{maxHeight: '100vh', overflowY: 'auto', position: 'absolute', top: 0 }}
                // scroll={scroll}
                // style={{ overflow: 'scroll' }}
            >
                <Box sx={modalStyle}>
                    <AirtableModal />
                    <Button onClick={handleAirtableClose} className={classes.button}>
                        Close
                    </Button>
                </Box>
            </Modal>
            {/* <Modal>
                <SlackModal />
            </Modal> */}
        </div>   
    );      
};

export default ModuleContent;