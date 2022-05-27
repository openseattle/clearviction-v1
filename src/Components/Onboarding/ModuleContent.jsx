import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Typography, Modal, Button, Box } from '@material-ui/core';
import { useModuleContentStyles } from '../../Styles/Onboarding/useModuleContentStyles';
import link from '../../Assets/Onboarding/link.svg';
import doc from '../../Assets/Onboarding/doc.svg';
import video from '../../Assets/Onboarding/video.svg';

import PrimaryButton from './PrimaryButton';
// import Theme from './Theme';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    padding: "90px"
}

function ModuleContent(props) {
    const classes = useModuleContentStyles();
    const { title, 
        subheading,
        paragraph1, 
        paragraph2, 
        paragraph3,
        paragraph4, 
        linkTitle, 
        linkTitle2, 
        linkTitle3, 
        linkIcon, 
        linkIcon2, 
        linkIcon3, 
        linkLocation, 
        linkLocation2, 
        linkLocation3, 
        modalParagraph1, 
        modalTitle,
        modalParagraph2,
        modalParagraph3,
    } = props.content;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className={classes.moduleContentCard + " " + classes.regularContainer }>
            {/* <div className={classes.regularContainer}> */}
                
                <h1 className={classes.moduleCardHeading}>{title}</h1>
                <Typography variant="body2" className={classes.bold}>{subheading}</Typography>
                {paragraph1 ? <Typography variant="body2" className={classes.moduleCardBody}>{paragraph1}</Typography> : null}
                {paragraph2 ? <Typography variant="body2" className={classes.moduleCardBody}>{paragraph2}</Typography> : null}
                {paragraph3 ? <Typography variant="body2" className={classes.moduleCardBody}>{paragraph3}</Typography> : null}
                {paragraph4 ? <Typography variant="body2" className={classes.moduleCardBody}>{paragraph4}</Typography> : null}

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
                            { linkIcon === "video" && 
                                <div className={classes.linkContainer}>
                                    <img src={video} alt="" className={classes.linkIcon} />
                                    <p className={classes.linkText} >{linkTitle}</p>
                                </div>
                            }       
                    </div>
                ) : (
                    null
                )}

                { linkTitle2 ? (
                    <div className={classes.moduleContentLink}>
                        <a href={linkLocation2} target="_blank" rel="noreferrer"
                            style={{ textDecoration: "none", color: "#4e6c99", flex: 1 }}>
                            { linkIcon2 === "link" &&
                                <div className={classes.linkContainer}>
                                    <img src={link} alt="" className={classes.linkIcon} />
                                    <p className={classes.linkText} >{linkTitle2}</p>
                                </div>
                            }
                            { linkIcon2 === "doc" && 
                                <div className={classes.linkContainer}>
                                    <img src={doc} alt="" className={classes.linkIcon} />
                                    <p className={classes.linkText2} >{linkTitle2}</p>
                                </div>
                            }
                            { linkIcon2 === "video" && 
                                <div className={classes.linkContainer}>
                                    <img src={video} alt="" className={classes.linkIcon} />
                                    <p className={classes.linkText2} >{linkTitle2}</p>
                                </div>
                            }
                        </a>
                    </div>
                ) : (
                    null
                )}

                { linkTitle3 ? (
                    <div className={classes.moduleContentLink}>
                        <a href={linkLocation3} target="_blank" rel="noreferrer"
                            style={{ textDecoration: "none", color: "#4e6c99", flex: 1 }}>
                        { linkIcon3 === "link" && 
                            <div className={classes.linkContainer}>
                                <img src={link} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText3} >{linkTitle3}</p>
                            </div>
                         }
                         { linkIcon3 === "doc" && 
                            <div className={classes.linkContainer}>
                                <img src={doc} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText3} >{linkTitle3}</p>
                            </div>
                         }
                         { linkIcon3 === "video" && 
                            <div className={classes.linkContainer}>
                                <img src={video} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText3} >{linkTitle3}</p>
                            </div>
                         }
                        </a>       
                    </div>
                    
                ) : (
                    null
                )}
            {/* </div> */}
            <Modal 
                open={open}
                onClose={handleClose}
                aria-labelledby=''
                aria-describedby=''
            >
                <Box sx={style}>
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
                    <Button onClick={handleClose} className={classes.button}>
                        Close
                    </Button>
                </Box>
            </Modal>
        </div>   
    );      
};

export default ModuleContent;