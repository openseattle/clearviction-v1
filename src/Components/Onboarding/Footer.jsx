import { useFooterStyles } from "../../Styles/Onboarding/useFooterStyles";
import PrimaryButton from "./PrimaryButton";
import CompleteButton from "./CompleteButton";

function Footer({ button1, button2 }) {
    const classes = useFooterStyles();

    return (
        <>
            <div className={classes.completeContainer}>
                <CompleteButton />
            </div>
            <div className={classes.footerContainer}>
                <PrimaryButton button={button1} className={classes.button} />
                <PrimaryButton button={button2} />
            </div>
        </>
    );
}

export default Footer;
