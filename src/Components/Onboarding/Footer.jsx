import { useFooterStyles } from '../../Styles/Onboarding/useFooterStyles';
import PrimaryButton from './PrimaryButton';
import CompleteButton from './CompleteButton';

function Footer(props) {
    const classes = useFooterStyles();

    return (
        <>
            <div className={classes.footerContainer} style={{ justifyContent: "flex-end" }}>
                <CompleteButton />
            </div>
            <div className={classes.footerContainer}>
                <PrimaryButton button={props.button1} />
                <PrimaryButton button={props.button2} />
            </div>
        </>

    );
};

export default Footer;