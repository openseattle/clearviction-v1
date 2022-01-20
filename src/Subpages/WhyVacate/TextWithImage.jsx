import {
    Box,
    Grid,
    Typography,
} from "@material-ui/core";
import { WhyVacateHousingStyles } from "../../Styles/WhyVacateHousingStyles";

export const TextWithImage = (props) => {
    const { img, header, text } = props;
    const textItems = text.map((t, idx) => (
        <Typography key={idx} variant="body1" align="center">
            {t}
        </Typography>
    ))

    const classes = WhyVacateHousingStyles();

    return (
        <Grid item xs={12} sm={6} md={6}>
            <Box display="flex" justifyContent="center">
                <Box component="img" src={img} className={classes.roleImage} />
            </Box>
            <Typography
                className={classes.headingRoles}
                variant="h3"
                align="center"
                >
                {header}
            </Typography>
            { textItems }
        </Grid>
    )
}