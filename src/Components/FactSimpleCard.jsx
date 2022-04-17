import {
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  rootStyle: {
    minHeight: "14em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(2),
  },
}));

const FactSimpleCard = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <>
      <Card className={classes.rootStyle}>
        <CardContent>
          <Typography variant="body1" align="center">
            {children}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default FactSimpleCard;
