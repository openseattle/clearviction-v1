import { Grid, Typography, Link } from "@material-ui/core";
import { BodyType } from "../../data/calculatorPagesTypes";
import { BackButton } from "../../ui-kit/BackButton";
import PrimaryButton from "../../ui-kit/PrimaryButton";
import { SpecialCaseTitleStyles } from "./SpecialCaseTitleStyles";

const SpecialCaseTitle = props => {
    const classes = SpecialCaseTitleStyles();
    return (
        <Grid container className={classes.grid}>
            <Grid container className={classes.backButton}>
                <BackButton />
            </Grid>
            <Typography variant="h5" component="h1" className={classes.header}>
                {props.header}
            </Typography>
            <Grid item className={classes.bodyGrid}>
                {props.body &&
                    props.body.map((b, idx) => {
                        switch (b.type) {
                            default:
                                return (
                                    <Typography key={idx} variant="body2" className={classes.body}>
                                        {b.text}
                                    </Typography>
                                );
                            case BodyType.LIST:
                                return (
                                    <ul>
                                        {b.items.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                );
                            // temporary placeholder for Blake vacation -- sprint 26, 6/27/22
                            case BodyType.LINK:
                                return (
                                    <ul key={b.type}>
                                        <li key={idx}>
                                            <Link target="_blank" rel="noopener noreferrer" role="button" href={b.href}>
                                                {b.text}
                                            </Link>
                                        </li>
                                    </ul>
                                );
                            case BodyType.BLAKELINK:
                                return (
                                    <span key={b.type}>
                                        <Link
                                            className={classes.blakeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            role="link"
                                            href={b.href}
                                        >
                                            {b.text}
                                        </Link>
                                    </span>
                                );
                        }
                    })}
            </Grid>
            <PrimaryButton className={classes.button} text={props.buttonText} href={props.buttonHref} />
        </Grid>
    );
};

export default SpecialCaseTitle;
