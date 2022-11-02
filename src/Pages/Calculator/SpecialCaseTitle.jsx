import { Grid, Typography } from "@mui/material";
import { BodyType } from "../../data/calculatorPagesTypes.ts";
import { BackButton } from "../../ui-kit/BackButton";
import PrimaryButton from "../../ui-kit/PrimaryButton";
import { SpecialCaseTitleStyles } from "./SpecialCaseTitleStyles";
import { ExternalLink } from "../../ui-kit/ExternalLink";

const SpecialCaseTitle = ({ header, body, buttonText, buttonHref }) => {
    const classes = SpecialCaseTitleStyles();
    return (
        <Grid container className={classes.grid}>
            <Grid container className={classes.backButton}>
                <BackButton />
            </Grid>
            <Typography variant="h5" component="h1" className={classes.header}>
                {header}
            </Typography>
            <Grid item className={classes.bodyGrid}>
                {body &&
                    body.map((b, idx) => {
                        switch (b.type) {
                            case BodyType.LIST:
                                return (
                                    <ul>
                                        {b.items.map((item, itemIdx) => (
                                            <li className={classes.list} key={itemIdx}>
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
                            default:
                                return (
                                    <Typography key={idx} variant="body2" className={classes.body}>
                                        {b.text}
                                    </Typography>
                                );
                        }
                    })}
            </Grid>
            <PrimaryButton className={classes.button} text={buttonText} href={buttonHref} />
        </Grid>
    );
};

export default SpecialCaseTitle;
