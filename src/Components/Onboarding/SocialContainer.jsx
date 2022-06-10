
import { useHeaderStyles } from '../../Styles/Onboarding/useHeaderStyles';

import fb from '../../Assets/Onboarding/fb.svg';
import linkedIn from '../../Assets/Onboarding/linkedIn.svg';
import twitter from '../../Assets/Onboarding/twitter.svg';


function SocialContainer(props) {

    const classes = useHeaderStyles();

    return (
        <div className={classes.menuStyle}>
            <a href="https://twitter.com/Clearviction"
                className={classes.socialIcons}
                target="_blank"
                rel="noreferrer">
                <img src={twitter} alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com/company/clearviction/"
                className={classes.socialIcons}
                target="_blank"
                rel="noreferrer">
                <img src={linkedIn} alt="LinkedIn" />
            </a>
            <a href="https://www.facebook.com/Clearviction-104011035539979/?ref=page_internal"
                className={classes.socialIcons}
                target="_blank"
                rel="noreferrer">
                <img src={fb} alt="facebook" />
            </a>
        </div>
    )
}

export default SocialContainer