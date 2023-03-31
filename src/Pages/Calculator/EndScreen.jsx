/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import { Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { BackButton } from "../../ui-kit/BackButton";
import PrimaryButton from "../../ui-kit/PrimaryButton";
import { EndScreenStyles } from "./EndScreenStyles";
import RestartButton from "../../Components/RestartButton";
import { BodyType } from "../../data/calculatorPagesTypes.ts";
import ProgressBar from "../../Components/ProgressBar";
import { ExternalLink } from "../../ui-kit/ExternalLink";
import CalcSharebtn from "../../Components/CalcSharebtn";

const EndScreen = ({ showProgressBar, currentSectionName, header, body, buttons, showRestartButton, disclaimer }) => {
    const classes = EndScreenStyles();

    return (
        <Grid data-testid="end-screen" container className={classes.grid}>
            {showProgressBar && (
                <Grid container>
                    <ProgressBar currentSectionName={currentSectionName} />
                </Grid>
            )}

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
                                return null;
                        }
                    })}
            </Grid>
            <Grid item className={classes.buttonGrid}>
                {buttons.map((b, idx) => (
                    <PrimaryButton
                        key={idx}
                        role="button"
                        className={classes.button}
                        text={b.text}
                        href={b.href}
                        target={b.target}
                    />
                ))}
                <CalcSharebtn />
            </Grid>
            <Grid item className={classes.restartButton}>
                {showRestartButton && <RestartButton className={classes.button} />}
            </Grid>
            <Grid item className={classes.restartButton}>
                {disclaimer && (
                    <Typography variant="caption" className={classes.body}>
                        {disclaimer}
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
    showProgressBar: PropTypes.bool,
};

EndScreen.defaultProps = {
    disclaimer: "",
    showProgressBar: false,
};

export default EndScreen;
