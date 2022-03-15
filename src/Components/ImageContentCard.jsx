import {
  Paper,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";
import { RedesignButtonSecondary } from "../ui-kit/RedesignButtonSecondary";
import { RedesignButtonPrimary } from "../ui-kit/RedesignButtonPrimary";

const useStyles = makeStyles({
  rootStyle: {},
  cardTextSTyle: {
    padding: 44,
  },
  cardButtonBoxStyle: {
    marginTop: 64,
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
});

const ImageContentCard = ({content, image, buttonText, buttonHref}) => {
  const classes = useStyles();

  const retrieveImage = (bgImage) => {
    return `url(${bgImage})`;
  };

  return (
    <>
      <Paper
        style={{
          height: 460,
          backgroundImage: retrieveImage(image),
          backgroundRepeat: "no-repeat",
          backgroundSize: "600px 600px",
          backgroundPosition: "25% -42%",
        }}
      >
        <Typography
          className={classes.cardTextSTyle}
          variant="subtitle1"
          align="center"
        >
          {content}
        </Typography>

        <Box className={classes.cardButtonBoxStyle}>
          <RedesignButtonPrimary href={buttonHref}>{buttonText}</RedesignButtonPrimary>
        </Box>
      </Paper>
    </>
  );
};

export default ImageContentCard;
