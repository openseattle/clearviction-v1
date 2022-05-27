import { Link } from 'react-router-dom';

import smallLogo from '../../Assets/Onboarding/smallLogo.svg';
import fb from '../../Assets/Onboarding/fb.svg';
import linkedIn from '../../Assets/Onboarding/linkedIn.svg';
import twitter from '../../Assets/Onboarding/twitter.svg';

import { Typography } from '@material-ui/core';
import { useHeaderStyles } from '../../Styles/Onboarding/useHeaderStyles';

function Header(props) {
    const classes = useHeaderStyles();
    const { title, description, information, information2, information3 } = props.text;

    return (
        <div className={classes.darkBlueBackground}>
            <Link to="/onboarding">
                <img src={smallLogo} className={classes.logoStyle} alt="CV logo" />
            </Link>
        
            <div className={classes.socialContainer}>
                <a href="" className={classes.socialIcons}>
                    <img src={twitter} alt="facebook" />
                </a>
                <a href="" className={classes.socialIcons}>
                    <img src={linkedIn} alt="facebook" />
                </a>
                <a href="" className={classes.socialIcons}>
                    <img src={fb} alt="facebook" />
                </a>
            </div>
            
            <div className={classes.regularContainer}>
                {title === "Welcome!" ? (
                    <div className={classes.welcome}>
                        <h1 style={{fontWeight: 400}}>{title}</h1>
                        <p className={classes.welcomePara}>{information}</p>
                    </div>
                ) : (
                    <div className={classes.modHeaderContainer}>
                        <h1 className={classes.title}>{title}</h1>
                        <h1 className={classes.subheading}>{description}</h1>
                    </div>
                )}
            </div>
        </div>   
    );      
};

export default Header;