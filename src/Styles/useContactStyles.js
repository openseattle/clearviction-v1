import { makeStyles } from "@material-ui/core";

export const useContactStyles = makeStyles((theme) => ({
  regularContainer: {
    padding: theme.spacing(8),
    margin: theme.spacing(6),
  },
  headingStyle: {
    marginBottom: theme.spacing(8),
    marginLeft: theme.spacing(8),
    color: theme.palette.primary.dark,
  },
  contentTextStyle: {
    marginLeft: theme.spacing(9),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    color: theme.palette.primary.dark,
  },
  formContainer: {
    paddingLeft: theme.spacing(7),
  },
  formStyle: {
    maxWidth: '510px',
    width: '100%',
    padding: theme.spacing(2),
  },
  labelStyle: {
    // width: '100%',
    
    
  },
  labelTextStyle: {
    paddingTop: '35px', 
    fontSize: '16px',
    textTransform: "uppercase",
    color: theme.palette.primary.main,
  },
  inputStyle: {
    //   width: '100%',
    //   color: theme.palette.primary.dark,
    // color:'#bbb'
    //   height: '20px'
  },
  inputTextStyle: {
    fontSize: '20px',
  },
  buttonBoxStyle: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(8),
  },
  iconStyle: {
    width: "100%",
    padding: theme.spacing(2)
  }
}));
