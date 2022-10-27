import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    cardGroupStyle: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(8),
    },
    cardStyle: {
        width: "100%",
        minHeight: 172,
        [theme.breakpoints.down("md")]: {
            minHeight: 48,
        },
        borderRadius: 0,
        backgroundColor: theme.palette.primary.light,
        color: "white",
        "&:hover": {
            color: "black",
        },
    },
    cardStyleActive: {
        backgroundColor: theme.palette.primary.main,
        color: "white",
    },
    cardTitleStyle: {
        padding: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(1),
        },
    },
    cardTextStyle: {
        fontSize: 14,
        padding: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(1),
        },
    },
    gridStyle: {
        padding: 2,
    },
}));

function NavCardGroup(props) {
    const classes = useStyles();
    const { subPages, xs, sm, md } = props;
    return (
        <Box className={classes.cardGroupStyle}>
            <Grid container>
                {subPages.map(pageCard => (
                    <Grid
                        className={classes.gridStyle}
                        item
                        key={pageCard.name}
                        xs={xs}
                        sm={sm}
                        md={md}
                    >
                        <Button
                            className={classes.cardStyle}
                            activeClassName={classes.cardStyleActive}
                            component={NavLink}
                            to={pageCard.link}
                        >
                            <div>
                                <Typography className={classes.cardTitleStyle} variant="h4">
                                    {pageCard.name}
                                </Typography>
                                <Box display={{ xs: "none", sm: "none", md: "block" }}>
                                    {pageCard.desc && (
                                        <Typography
                                            className={classes.cardTextStyle}
                                            variant="subtitle2"
                                        >
                                            {pageCard.desc}
                                        </Typography>
                                    )}
                                </Box>
                            </div>
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default NavCardGroup;
