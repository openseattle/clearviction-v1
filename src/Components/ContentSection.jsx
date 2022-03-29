import { Container, Paper, Typography } from "@material-ui/core";
import { useHomeStyles } from "../Styles/useHomeStyles";

const ContentSection = (props) => {
  const { sectionId, sectionSize, sectionTitle, children } = props;
  const classes = useHomeStyles();

  return (
    <>
      <Container
        id={sectionId}
        className={classes.regularContainer}
        maxWidth={sectionSize}
      >
        <Paper className={classes.paperStyle}>
          <Typography
            className={classes.headingStyle}
            variant="h3"
            align="center"
          >
            {sectionTitle}
          </Typography>
          {children}
        </Paper>
      </Container>
    </>
  );
};

export default ContentSection;
