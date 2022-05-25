import React from 'react';
// import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { useModuleContentStyles } from '../../Styles/Onboarding/useModuleContentStyles';
import link from '../../Assets/Onboarding/link.svg';
// import Theme from './Theme';

function ModuleContent(props) {
    const classes = useModuleContentStyles();
    const { icon, title, title2, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6, paragraph7, centerParagraph1, linkTitle, linkTitle2, linkTitle3, linkIcon, linkIcon2, linkIcon3, linkLocation, linkLocation2, linkLocation3 } = props.content;
    return (
        <div className={classes.moduleContentCard}>
            <div className={classes.regularContainer}>
                
                <h1 className={classes.moduleCardHeading}>{title}</h1>
                <h3 className={classes.moduleCardHeading2}>{title2}</h3>
                <Typography variant="body2" className={classes.moduleCardBody2}>{centerParagraph1}</Typography>

                <Typography variant="body2" className={classes.moduleCardBody}>{paragraph1}</Typography>
                {paragraph2 ? <Typography variant="body2" className={classes.moduleCardBody}>{paragraph2}</Typography> : null}
                {paragraph3 ? <Typography variant="body2" className={classes.moduleCardBody}>{paragraph3}</Typography> : null}
                {paragraph4 ? <Typography variant="body2" className={classes.moduleCardBody}>{paragraph4}</Typography> : null}
                {paragraph5 ? <Typography variant="body2" className={classes.moduleCardBody}>{paragraph5}</Typography> : null}
                {paragraph6 ? <Typography variant="body2" className={classes.moduleCardBody}>{paragraph6}</Typography> : null}
                {paragraph7 ? <Typography variant="body2" className={classes.moduleCardBody}>{paragraph7}</Typography> : null}


                { linkTitle ? (
                    <div className={classes.moduleContentLink + ' ' + classes.firstBtn}>
                        <a href={linkLocation} target="_blank" rel="noreferrer"
                            style={{ textDecoration: "none", color: "#4e6c99", flex: 1 }}>
                        { linkIcon === "link" ? (
                            <div className={classes.linkContainer}>
                                <img src={link} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText} >{linkTitle}</p>
                            </div>
                        ) : (
                            <div className={classes.linkContainer}>
                                <img src={linkIcon} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText} >{linkTitle}</p>
                            </div>
                        ) }
                        </a>       
                    </div>
                ) : (
                    null
                )}

                { linkTitle2 ? (
                    <div className={classes.moduleContentLink}>
                        <a href={linkLocation2} target="_blank" rel="noreferrer"
                            style={{ textDecoration: "none", color: "#4e6c99", flex: 1 }}>
                            { linkIcon2 === "link" ? (
                                <div className={classes.linkContainer}>
                                    <img src={link} alt="" className={classes.linkIcon} />
                                    <p className={classes.linkText} >{linkTitle2}</p>
                                </div>
                            ) : (
                                <div className={classes.linkContainer}>
                                    <img src={linkIcon} alt="" className={classes.linkIcon} />
                                    <p className={classes.linkText} >{linkTitle2}</p>
                                </div>
                            ) }
                        </a>
                    </div>
                ) : (
                    null
                )}

                { linkTitle3 ? (
                    <div className={classes.moduleContentLink}>
                        <a href={linkLocation3} target="_blank" rel="noreferrer"
                            style={{ textDecoration: "none", color: "#4e6c99", flex: 1 }}>
                        { linkIcon3 === "link" ? (
                            <div className={classes.linkContainer}>
                                <img src={link} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText3} >{linkTitle3}</p>
                            </div>
                        ) : (
                            <div className={classes.linkContainer}>
                                <img src={linkIcon} alt="" className={classes.linkIcon} />
                                <p className={classes.linkText3} >{linkTitle3}</p>
                            </div>
                        ) }
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