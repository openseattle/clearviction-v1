import { Grid, Typography } from "@mui/material";
import { BackButton } from "../../ui-kit/BackButton";
import PrimaryButton from "../../ui-kit/PrimaryButton";
import { EndScreenStyles } from "./EndScreenStyles";
import RestartButton from "../../Components/RestartButton";
import { CVPListItem } from "../../ui-kit/ListItem";
import { BodyType } from "../../data/calculatorPagesTypes";
import ProgressBar from "../../Components/ProgressBar";
import { ExternalLink } from "../../ui-kit/ExternalLink";
import PropTypes from "prop-types";

const EndScreen = props => {
    const classes = EndScreenStyles();

    return (
        <Grid data-testid="end-screen" container className={classes.grid}>
            {props.progressBar && (
                <Grid container>
                    <ProgressBar currentSectionName={props.currentSectionName} />
                </Grid>
            )}

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
                            case BodyType.LIST: {
                                return (
                                    <ul key={idx}>
                                        {b.items.map((item, itemIdx) => (
                                            <li className={classes.list} key={itemIdx}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                );
                            }
                            case BodyType.PARAGRAPH:
                                return (
                                    <Typography key={idx} variant="body2" className={classes.body}>
                                        {b.text}
                                    </Typography>
                                );
                            case BodyType.HEADING:
                                return (
                                    <Typography key={idx} variant="h5" className={classes.body}>
                                        {b.text}
                                    </Typography>
                                );
                            case BodyType.LINK:
                                return (
                                    <ul key={idx}>
                                        <li className={classes.list} key={idx}>
                                            {b.textBeforeLink && <span>{b.textBeforeLink}</span>}
                                            <ExternalLink target="_blank" rel="noopener noreferrer" href={b.href}>
                                                {b.linkText}
                                            </ExternalLink>
                                            {b.textAfterLink && <span>{b.textAfterLink}</span>}
                                        </li>
                                    </ul>
                                );
                            default:
                                break;
                        }
                    })}
            </Grid>
            <Grid item className={classes.buttonGrid}>
                {props.buttons.map((b, idx) => {
                    return (
                        <PrimaryButton
                            key={idx}
                            role="button"
                            className={classes.button}
                            text={b.text}
                            href={b.href}
                            target={b.target}
                        />
                    );
                })}
            </Grid>
            <Grid item className={classes.restartButton}>
                {props.showRestartButton && <RestartButton className={classes.button} />}
            </Grid>
            <Grid item className={classes.restartButton}>
                {props.disclaimer && (
                    <Typography variant="caption" className={classes.body}>
                        {props.disclaimer}
                    </Typography>
                )}
            </Grid>
        </Grid>
    );
};

EndScreen.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.arrayOf(PropTypes.object).isRequired,
    buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
    showRestartButton: PropTypes.bool.isRequired,
    disclaimer: PropTypes.string,
    progressBar: PropTypes.object,
};

export default EndScreen;
