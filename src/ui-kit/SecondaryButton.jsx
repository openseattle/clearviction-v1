import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    flexGrow: {
      flex: '1',
    },
    button: {
      backgroundColor: 'var(--light-blue)',
      color: '#ffffff',
      width: '327px',
      padding: '10px',
      margin: '10px',
      fontSize: '16px',
      '&:hover': {
        backgroundColor: 'var(--gray)',
        color: '#000000',
    },
  }})

export default function SecondaryButton({ text }) {
    const classes = useStyles()

    return (
        <Button 
          className={classes.button}
        >
          {text}
        </Button>        
    );
  }