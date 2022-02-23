import { Button, makeStyles } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  backButtonStyle: {
    fontWeight: "lighter",
  },
});

export const BackButton = (props) => {
  const classes = useStyles();
  let history = useHistory();
  return (
    <>
      <Button
        className={classes.backButtonStyle}
        onClick={() => history.goBack()}
        {...props}
      >
        <ArrowBackIos /> Previous Question{" "}
      </Button>
    </>
  );
};
