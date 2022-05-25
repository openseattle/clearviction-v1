import { useFooterStyles } from '../Styles/useFooterStyles';
import Button from '../Button';

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