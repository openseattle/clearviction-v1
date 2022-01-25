import { makeStyles } from "@material-ui/core"

export const ResourcesStyles = makeStyles((theme) => ({
  darkBlueBackground: {
    backgroundColor: theme.palette.primary.dark,
    color: "white",
  },
  headingStyle: {
    padding: theme.spacing(3),
  }
}))
