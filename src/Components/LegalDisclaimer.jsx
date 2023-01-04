import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    disclaimer: {
        margin: theme.spacing(2),
        fontSize: 14,
    },
}));

const LegalDisclaimer = ({ text }) => {
    const classes = useStyles();
    return (
        <Box justifyContent="center">
            <Typography className={classes.disclaimer} align="center" variant="subtitle2">
                {text}
            </Typography>
        </Box>
    );
};

export default LegalDisclaimer;

LegalDisclaimer.propTypes = {
    text: PropTypes.string.isRequired,
};
