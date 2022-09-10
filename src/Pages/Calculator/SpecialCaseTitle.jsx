import { Grid, Typography, Link } from "@material-ui/core";
import { BodyType } from "../../data/calculatorPagesTypes";
import { BackButton } from "../../ui-kit/BackButton";
import PrimaryButton from "../../ui-kit/PrimaryButton";
import { SpecialCaseTitleStyles } from "./SpecialCaseTitleStyles";
import { ExternalLink } from "../../ui-kit/ExternalLink";

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
                                            <li className={classes.list} key={idx}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                );
                            case BodyType.LINK:
                                return (
                                    <ul key={b.type}>
                                        <li className={classes.list} key={idx}>
                                            <ExternalLink
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                role="link"
                                                href={b.href}
                                            >
                                                {b.linkText}
                                            </ExternalLink>
                                        </li>
                                    </ul>
                                );
                            // temporary placeholder for Blake vacation -- sprint 26, 6/27/22
                            case BodyType.BLAKELINK:
                                return (
                                    <span className={classes.blakeLink} key={b.type}>
                                        <ExternalLink
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            role="link"
                                            href={b.href}
                                        >
                                            {b.text}
                                        </ExternalLink>
                                    </span>
                                );
                        }
                    })}
            </Grid>
            <PrimaryButton
                className={classes.button}
                text={props.buttonText}
                href={props.buttonHref}
                header={props.header}
                body={props.body}
                onButtonClick={props.onButtonClick}
                origin="SpecialCaseTitle"
                pageId={props.pageId}
            />
        </Grid>
    );
};

export default SpecialCaseTitle;
