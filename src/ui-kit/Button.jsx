import Button from '@mui/material/Button';

export default function PrimaryButton({ text, href }) {
    return (
        <Button 
            href={href}
            sx={{
            backgroundColor: 'var(--light-gray)',
            color: 'black',
            width: '327px',
            padding: '10px',
            margin: '10px',
            fontSize: '16px',
        }}>
            {text}
        </Button>        
    );
  }