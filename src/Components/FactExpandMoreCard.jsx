import { Card, CardActionArea, CardActions, CardContent, Collapse, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";

const useStyles = makeStyles(() => ({
    rootStyle: {
        margin: 4,
    },
    contentStyle: {
        height: "9.5em",
    },
    summaryDetails: {
        marginTop: "1.2em",
        justifyContent: "space-between",
    },
}));

const FactExpandMoreCard = ({ summary, content, ariaLabel, contentID, summaryID, price, turnaround }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const classes = useStyles();
    return (
        <Card className={classes.rootStyle}>
            <CardActionArea
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label={ariaLabel}
                aria-controls={contentID}
            >
                <CardActions>
                    <CardContent className={classes.contentStyle}>
                        <Typography variant="subtitle2" align="left">
                            {summary}
                        </Typography>
                        <Grid className={classes.summaryDetails} container>
                            <Typography variant="p">
                                {" "}
                                <b> {price} </b>{" "}
                            </Typography>
                            <Typography variant="p">
                                {" "}
                                <b> {turnaround} </b>{" "}
                            </Typography>
                        </Grid>
                    </CardContent>

                    <ExpandMore style={{ marginLeft: "auto", marginRight: "1em" }} />
                </CardActions>
            </CardActionArea>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent aria-labelledby={summaryID}>{content}</CardContent>
            </Collapse>
        </Card>
    );
};

export default FactExpandMoreCard;
