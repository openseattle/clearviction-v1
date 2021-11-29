import Button from '@mui/material/Button';

export default function SecondaryButton({ text }) {
    return (
        <Button 
            sx={{
            backgroundColor: 'var(--light-blue)',
            color: 'white',
            width: '327px',
            padding: '10px',
            margin: '10px'
        }}>
            {text}
        </Button>        
    );
  }