import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from "@material-ui/core";

import { useModuleCardStyles } from '../Styles/useModuleCardStyles';

function ModuleCard(props) {
    const classes = useModuleCardStyles();
    const { number, link, text, icon, subheading } = props.module;
    
    return (
        <div className={classes.moduleCard}>
            <Link style={{ textDecoration: "none"}} to={link}>
                <div>
                    <div className={classes.cardHeading}>
                        <Typography variant="body1">{number}</Typography>
                    </div>
                    <div className={classes.cardBody}>
       
                        {console.log(icon)        
                        }

                        <div>
                            <Typography variant="h5" className={classes.cardSubheading}>{subheading}</Typography>
                            <Typography variant="body2">{text}</Typography>
                        </div>
                        
                    </div>
                </div>    
            </Link> 
        </div>   
    );      
};

export default ModuleCard;