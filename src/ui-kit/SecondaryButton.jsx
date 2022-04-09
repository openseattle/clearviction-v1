import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  flexGrow: {
    flex: "1",
  },
  button: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
    textTransform: "uppercase",
    width: "248px",
    height: "48px",
    fontSize: "18px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
    border: `${theme.palette.primary.main} solid`,
    borderRadius: "30px",
    padding: "10px",
    margin: "10px",
    "&:hover": {
      border: `${theme.palette.primary.dark} solid`,
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
    },
  },
}));

export default function SecondaryButton({
  text,
  type,
  linkTo,
  externalLink,
  onClick,
}) {
  const classes = useStyles();
  return externalLink ? (
    <Button
      rel="noopener noreferrer"
      href={linkTo}
      type={type}
      className={classes.button}
      target={"_blank"}
    >
      {text}
    </Button>
  ) : (
    <Button
      href={linkTo}
      onClick={onClick}
      type={type}
      className={classes.button}
    >
      {text}
    </Button>
  );
}
