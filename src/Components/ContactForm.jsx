import React from "react";
import {
  Box,
  FormControl,
  Grid,
  Container,
  List,
  ListItem,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";

import SecondaryButton from "../ui-kit/SecondaryButton";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputStyle: {
    width: "100%",
  },
  formStyle: {
    maxWidth: "300px",
  },
});

const ContactForm = () => {
  const classes = useStyles();
  const [contactType, setContactType] = React.useState("");

  const handleChange = (event) => setContactType(event.target.value);

  return (
    <Box className={classes.root}>
      <form className={classes.formStyle}>
        <label>Name</label>
        <input
          className={classes.inputStyle}
          type="text"
          name="name"
          defaultValue="Enter Your Full Name"
        />
        <label>Email</label>
        <input
          className={classes.inputStyle}
          type="email"
          name="email"
          defaultValue="Enter Your E-Mail Address"
        />
        <label className={classes.inputStyle}>I am a(n):</label>

        <select className={classes.inputStyle}>
          <option>Please Select Who You Are</option>
          <option>Prospective Volunteer</option>
          <option>Prospective Benefactor</option>
          <option>Attorney</option>
          <option>Prosepective Partner</option>
          <option>Other Individual/Organization</option>
        </select>
        <textarea
          className={classes.inputStyle}
          defaultValue="Type your message here."
          type="text"
          name="message"
        />
        <SecondaryButton text={"Send Message"} href="#" />
      </form>
    </Box>
  );
};

export default ContactForm;
