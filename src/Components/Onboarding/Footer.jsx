import { useFooterStyles } from '../../Styles/Onboarding/useFooterStyles';
import Button from '../Onboarding/Button';

function Footer(props) {
    const classes = useFooterStyles();

    return (            
        <div className={classes.footerContainer}>
            <Button button={props.button1} />
            <Button button={props.button2} />
        </div>  
        
    );      
};

export default Footer;