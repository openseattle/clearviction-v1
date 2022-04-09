import { Grid, Typography } from "@material-ui/core";
import { BodyType } from "../../data/calculatorPagesTypes";
import { BackButton } from "../../ui-kit/BackButton";
import PrimaryButton from "../../ui-kit/PrimaryButton";
import { SpecialCaseTitleStyles } from "./SpecialCaseTitleStyles";

const SpecialCaseTitle = (props) => {
  const classes = SpecialCaseTitleStyles();
  return (
    <Grid container className={classes.grid}>
      <Grid container className={classes.backButton}>
        <BackButton />
      </Grid>
      <Typography variant="h5" className={classes.header}>
        {props.header}
      </Typography>
      <Grid item className={classes.bodyGrid}>
        {props.body &&
          props.body.map((b, idx) => {
            switch (b.type) {
              default:
                return (
                  <Typography
                    key={idx}
                    variant="body2"
                    className={classes.body}
                  >
                    {b.text}
                  </Typography>
                );
              case BodyType.LIST:
                return (
                  <ul>
                    {b.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                );
              case BodyType.LINK:
                return (
                  <ul>
                    <li key={idx}>
                      <a href={b.href}>{b.text}</a>
                    </li>
                  </ul>
                );
            }
          })}
      </Grid>
      <PrimaryButton
        className={classes.button}
        text={props.buttonText}
        href={props.buttonHref}
      />
    </Grid>
  );
};

export default SpecialCaseTitle;
