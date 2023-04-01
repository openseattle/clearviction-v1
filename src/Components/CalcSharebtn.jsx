import * as React from 'react';
import { makeStyles } from '@mui/styles';
import ClipboardJS from 'clipboard';
import {
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    FacebookShareButton,
    FacebookIcon,
    EmailShareButton,
    EmailIcon,
    LivejournalIcon
} from "react-share";
import { IosShare} from '@mui/icons-material';

import {Popover, Button } from "@mui/material";

//added library to help with copying text
new ClipboardJS ('.btn');

const CalcSharebtn = () => {

    const useStyles = makeStyles(theme => ({
        root: {
            margin: "0 auto",
            textDecoration: "underline",
            color: theme.palette.primary.main,
            fontWeight: theme.typography.h4.fontWeight,
        }
    }),
    )
    
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    
    return (
        <div>
            <Button className={classes.root} aria-describedby={id}  onClick={handleClick}>
            
            <IosShare >
            
            </IosShare>
            Share The Calculator
            </Button>
            <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
         
            >
// Title value controls what appears in users share text

             <TwitterShareButton
        title="Got a minute? Check out Clearviction’s mission as they work to decrease consequences from criminal #convictions in #WashingtonState by helping determine eligibility to vacate.
        Email: Check out Clearviction’s mission as they work to decrease consequences from criminal convictions in Washington State by helping determine eligibility to vacate."
        url="http://www.clearviction.org/"
        source="http://www.clearviction.org/"
    >
        <TwitterIcon  round bgStyle={{ fill: "#FFD200" }} />
    </TwitterShareButton>
    <FacebookShareButton
        url="http://www.clearviction.org/"
        hashtag="#clearviction"
        title="Got a minute? Check out Clearviction’s mission as they work to decrease consequences from criminal #convictions in #WashingtonState by helping determine eligibility to vacate."
    >
        <FacebookIcon  round bgStyle={{ fill: "#FFD200" }} />
    </FacebookShareButton>
    <LinkedinShareButton url="http://www.clearviction.org/"
    title="Got a minute? Check out Clearviction’s mission as they work to decrease consequences from criminal #convictions in #WashingtonState by helping determine eligibility to vacate.">
        <LinkedinIcon  round bgStyle={{ fill: "#FFD200" }} />
    </LinkedinShareButton>
    // Subject body values control their respective values inside Email messages
    <EmailShareButton url="http://www.clearviction.org/" subject="Check out the Clearviction Calculator" body="Check out Clearviction’s mission as they work to decrease consequences from criminal convictions in Washington State by helping determine eligibility to vacate.">
            <EmailIcon round bgStyle={{ fill: "#FFD200" }} />
    </EmailShareButton>
    
    <LivejournalIcon
            
            class="btn" 
            data-clipboard-target="#hp" 
            round bgStyle={{ fill: "#FFD200" }}>
     </ LivejournalIcon>
     <input id="hp" value="https://www.clearviction.org"/>
    
     
            </Popover>
        </div>
        
        
        
        
        
        
    );
};

export default CalcSharebtn;


