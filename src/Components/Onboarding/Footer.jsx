import { useFooterStyles } from '../../Styles/Onboarding/useFooterStyles';
import PrimaryButton from './PrimaryButton';
import CompleteButton from './CompleteButton';

function Footer(props) {
    const classes = useFooterStyles();

    return (
        <>
            <div className={classes.completeContainer}>
                <CompleteButton />
            </div>
            <div className={classes.footerContainer}>
                <PrimaryButton button={props.button1} className={classes.button} />
                <PrimaryButton button={props.button2} />
            </div>
        </>

    );
};

export default Footer;