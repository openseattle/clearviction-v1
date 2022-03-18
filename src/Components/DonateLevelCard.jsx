import { Box, Card, CardContent, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles( (theme) => ({
  rootCardStyle: {
    height: 384,
  },
  amountStyle: {
    padding: theme.spacing(3),
  },
  donationImageStyle: {
    width: 250,
    padding: theme.spacing(1),
  },

}))

const DonateLevelCard = ({amount, image, text}) => {
  const classes = useStyles();
  return (
    <>
    <Card className={classes.rootCardStyle} >
                <Typography className={classes.amountStyle} variant="h3" align="center">
                  {amount}
                </Typography>
                <Box display="flex" justifyContent="center">
                  <Box
                    className={classes.donationImageStyle}
                    component="img"
                    src={image}
                  />
                </Box>
                <CardContent>
                  <Typography variant="subtitle2"  align="center">
                    {text}
                  </Typography>
                </CardContent>
              </Card>
    </>
  )
}

export default DonateLevelCard;