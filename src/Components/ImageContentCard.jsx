import {
  Paper,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";
import { RedesignButtonPrimary } from "../ui-kit/RedesignButtonPrimary";

const useStyles = makeStyles((theme) => ({
  rootStyle: {
    height: 460,
    minWidth: 280,
  },
  cardTextSTyle: {
    padding: 34,
  },
  cardButtonBoxStyle: {
    marginTop: 64,
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
}));

const ImageContentCard = ({ content, image, buttonText, buttonHref }) => {
  const classes = useStyles();

  const retrieveImage = (bgImage) => {
    return `url(${bgImage})`;
  };

  return (
    <>
      <Box padding={1}>
        <Paper
          className={classes.rootStyle}
          style={{
            backgroundImage: retrieveImage(image),
            backgroundRepeat: "no-repeat",
            backgroundSize: "512px 564px",
            backgroundPosition: "40% -60%",
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
            <RedesignButtonPrimary href={buttonHref}>
              {buttonText}
            </RedesignButtonPrimary>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default ImageContentCard;
