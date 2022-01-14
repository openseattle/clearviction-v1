import React from "react";
import { TextField, Grid, MenuItem, makeStyles, FormControl, FormGroup, FormLabel } from "@material-ui/core";
import SecondaryButton from "../ui-kit/SecondaryButton";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputStyle: {
    width: "100%",
    color: "#000000",
    padding: "10px"
  },
  labelStyle: {
    width: "100%",
    padding: "10px",
    fontSize: "1em",
    color: "var(--black)"
  },
  multilineInputStyle: {
    backgroundColor: "var(--dark-blue)",
    color: "var(--white)"
  },
  formStyle: {
    maxWidth: "363px",
    padding: "10px"
  },
});

const ContactForm = () => {
  const classes = useStyles();
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [contactType, setContactType] = React.useState("");
  const [message, setMessage] = React.useState("")

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log(name, email, contactType, message);
  };

  const contactTypes = [
    {
      value: 'volunteer',
      label: 'Prospective Volunteer',
    },
    {
      value: 'benefactor',
      label: 'Prospective Benefactor',
    },
    {
      value: 'attorney',
      label: 'Attorney',
    },
    {
      value: 'partner',
      label: 'Prospective Partner',
    },
    {
      value: 'other',
      label: 'Other Individual/Organization',
    },
  ];
   
  return (
    <Grid
      container
      spacing={1}
      direction="column"
    >
      <form onSubmit={handleFormSubmit}>
        <FormControl  required  component="fieldset" className={classes.formStyle}>
          <FormLabel className={classes.labelStyle} component="legend">Name</FormLabel>
          <FormGroup>
            <TextField 
              id="standard-basic" 
              className={classes.inputStyle}
              label="Enter Your Full Name" 
              required
              value={name}
              onChange={e => setName(e.target.value)}
              variant="outlined" 
            />
            <FormLabel className={classes.labelStyle} component="legend">Email</FormLabel>
            <TextField 
              id="standard-basic"
              className={classes.inputStyle}
              label="Enter Your Email Address" 
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              variant="outlined" 
            />
            <FormLabel className={classes.labelStyle} component="legend">I am a(n)</FormLabel>
            <TextField
              id="outlined-select-currency"
              className={classes.inputStyle}
              select
              label="Please Select An Option"
              required
              value={contactType}
              onChange={e => setContactType(e.target.value)}
              variant="outlined"
            >
              {contactTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <FormLabel className={classes.labelStyle} component="legend">Your Message</FormLabel>
            <TextField
              id="outlined-multiline-flexible"
              label="Type Your Message Here"
              className={classes.inputStyle}
              multiline
              minRows={4}
              maxRows={10}
              value={message}
              required
              onChange={e => setMessage(e.target.value)}
              variant="outlined"
            />
            <SecondaryButton type={"submit"} text={"Send Message"}/>
          </FormGroup>
        </FormControl>
      </form>
    </Grid>
  );
};

export default ContactForm;
