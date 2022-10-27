import { Container, Paper, Typography } from "@mui/material";
import { useHomeStyles } from "../Styles/useHomeStyles";

function ContentSection(props) {
    const { sectionId, sectionSize, sectionTitle, children } = props;
    const classes = useHomeStyles();

    return (
        <Container id={sectionId} className={classes.regularContainer} maxWidth={sectionSize}>
            <Paper className={classes.paperStyle}>
                {sectionTitle && (
                    <Typography
                        className={classes.headingStyle}
                        variant="h3"
                        align="center"
                        component="h2"
                    >
                        {sectionTitle}
                    </Typography>
                )}
                {children}
            </Paper>
        </Container>
    );
}

export default ContentSection;
