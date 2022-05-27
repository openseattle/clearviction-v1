import React from 'react';
// import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { useModuleContentStyles } from '../../Styles/Onboarding/useModuleContentStyles';
import link from '../../Assets/Onboarding/link.svg';
import doc from '../../Assets/Onboarding/doc.svg';
import video from '../../Assets/Onboarding/video.svg';
// import Theme from './Theme';

function ModuleContent(props) {
    const classes = useModuleContentStyles();
    const { icon, title, subheading, paragraph1, paragraph2, paragraph3, paragraph4, linkTitle, linkTitle2, linkTitle3, linkIcon, linkIcon2, linkIcon3, linkLocation, linkLocation2, linkLocation3 } = props.content;
    return (
        <div className={classes.moduleContentCard}>
            <div className={classes.regularContainer}>
                
                <h1 className={classes.moduleCardHeading}>{title}</h1>
                <h3 className={classes.moduleCardHeading2}>{subheading}</h3>
                {paragraph1 ? <Typography variant="body2" className={classes.moduleCardBody}>{paragraph1}</Typography> : null}
                {paragraph2 ? <Typography variant="body2" className={classes.moduleCardBody}>{paragraph2}</Typography> : null}
                {paragraph3 ? <Typography variant="body2" className={classes.moduleCardBody}>{paragraph3}</Typography> : null}
                {paragraph4 ? <Typography variant="body2" className={classes.moduleCardBody}>{paragraph4}</Typography> : null}

                { linkTitle ? (
                    <div className={classes.moduleContentLink + ' ' + classes.firstBtn}>
                        <a href={linkLocation} target="_blank" rel="noreferrer"
                            style={{ textDecoration: "none", color: "#4e6c99", flex: 1 }}>
                            { linkIcon === "link" &&
                                <div className={classes.linkContainer}>
                                    <img src={link} alt="" className={classes.linkIcon} />
                                    <p className={classes.linkText} >{linkTitle}</p>
                                </div>
                            }
                            { linkIcon === "doc" && 
                                <div className={classes.linkContainer}>
                                    <img src={doc} alt="" className={classes.linkIcon} />
                                    <p className={classes.linkText} >{linkTitle}</p>
                                </div>
                            }
                            { linkIcon === "video" && 
                                <div className={classes.linkContainer}>
                                    <img src={video} alt="" className={classes.linkIcon} />
                                    <p className={classes.linkText} >{linkTitle}</p>
                                </div>
                            }
                        </a>       
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
            </div>
        </div>   
    );      
};

export default ModuleContent;