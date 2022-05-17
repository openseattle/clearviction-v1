import { useState, useEffect } from "react";
import { TextField, MenuItem, FormControl, FormGroup, FormLabel, Box } from "@material-ui/core";
import { RedesignButtonPrimary } from "../ui-kit/RedesignButtonPrimary";
import { send } from "@emailjs/browser";
import { useContactStyles } from "../Styles/useContactStyles";
import { Typography } from "@material-ui/core";

const ContactForm = () => {
    const classes = useContactStyles();

    const [toSend, setToSend] = useState({
        from_name: "",
        reply_to: "",
        contact_type: "",
        message: "",
    });

    const [emailError, setEmailError] = useState({
        errorStatus: false,
        errorMessage: "",
    });

    useEffect(() => {
        const storedSender = JSON.parse(sessionStorage.getItem('toSend'));
        if (storedSender) {
            setToSend(storedSender);
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem('toSend', JSON.stringify(toSend))
    }, [toSend])

    // TODO
    // Create a proper email validation service with formik + yup
    // https://formik.org/docs/guides/validation
    //

    // TODO short term
    // add unit tests to this simple validation
    // move it to a util

    /**
     * Validates emails entered by the user onChange
     * This a fast and simple way to do this but only covers most, but not all cases.
     * Regex sourced from https://www.w3resource.com/javascript/form/email-validation.php
     *
     * Follows personal_info@domain where:
     * Personal_info rules:
     *  - Uppercase + Lowercase (A-z)
     *  - Digits (0-9)
     *  - Chars ! # $ % & ' * + - / = ? ^ _ ` { | } ~
     *  - Char . provided its not the first or last char or next to itself
     *
     * Domain rules:
     * The domain name [for example com, org, net, in, us, info] part contains letters, digits, hyphens,
     *  and dots.
     *
     * Examples of valid emails:
     * mysite@ourearth.com
     * my.ownsite@ourearth.org
     * mysite@you.me.net
     *
     * Example of invalid email id
     * mysite.ourearth.com [@ is not present]
     * mysite@.com.my [ tld (Top Level domain) can not start with dot "." ]
     * @you.me.net [ No character before @ ]
     * mysite123@gmail.b [ ".b" is not a valid tld ]
     * mysite@.org.org [ tld can not start with dot "." ]
     * .mysite@mysite.org [ an email should not be start with "." ]
     * mysite()*@gmail.com [ here the regular expression only allows character, digit, underscore,
     *  and dash ]
     * mysite..1234@yahoo.com [double dots are not allowed]
     *
     * @param {*} email
     *
     */
    const validateEmail = email => {
        const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (validEmail.test(email)) {
            setEmailError({ errorStatus: false, errorMessage: "" });
        } else {
            setEmailError({
                errorStatus: true,
                errorMessage: "Please enter a valid email",
            });
        }
    };


    const handleChange = e => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
        if (e.target.name === "reply_to") {
            validateEmail(e.target.value);
        };
    };

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_USER_ID;

    const handleFormSubmit = e => {
        e.preventDefault();
        send(SERVICE_ID, TEMPLATE_ID, toSend, USER_ID)
            .then(response => {
                console.log("success", response.status, response.text);
                // TODO: create custom pop up alert
                alert("Email Sent Successfully");
                localStorage.removeItem('toSend', toSend);
            })
            .catch(error => {
                console.log("failed", error);
                // TODO: create custom pop up alert
                alert("ERROR. Please try again.");
            });
    };

    const contactTypes = [
        {
            value: "volunteer",
            label: "Prospective Volunteer",
        },
        {
            value: "benefactor",
            label: "Prospective Benefactor",
        },
        {
            value: "attorney",
            label: "Attorney",
        },
        {
            value: "partner",
            label: "Prospective Partner",
        },
        {
            value: "other",
            label: "Other Individual/Organization",
        },
    ];

    return (
        <Box className={classes.formContainer}>
            <form onSubmit={handleFormSubmit}>
                <FormControl required component="fieldset" className={classes.formStyle}>
                    <FormGroup>
                        <FormLabel className={classes.labelStyle} component="legend">
                            <Typography variant="body2" className={classes.labelTextStyle}>
                                Name
                            </Typography>
                        </FormLabel>
                        <TextField
                            id="name"
                            className={classes.inputStyle}
                            placeholder="Enter Your Full Name"
                            required
                            name="from_name"
                            value={toSend.from_name}
                            onChange={handleChange}
                            variant="standard"
                            fullWidth
                            color="primary"
                        />
                        <FormLabel className={classes.labelStyle} component="legend">
                            <Typography variant="body2" className={classes.labelTextStyle}>
                                Email
                            </Typography>
                        </FormLabel>

                        <TextField
                            id="email"
                            className={classes.inputStyle}
                            placeholder="Enter Your Email Address"
                            type="email"
                            color="primary"
                            fullWidth
                            error={emailError.errorStatus}
                            helperText={emailError.errorMessage}
                            required
                            name="reply_to"
                            value={toSend.reply_to}
                            onChange={handleChange}
                            variant="standard"
                        />
                        <FormLabel className={classes.labelStyle} component="legend">
                            <Typography variant="body2" className={classes.labelTextStyle}>
                                I am a(n)
                            </Typography>
                        </FormLabel>
                        <TextField
                            id="who"
                            className={classes.inputStyle}
                            select
                            placeholder="Please Select An Option"
                            required
                            fullWidth
                            name="contact_type"
                            value={toSend.contact_type}
                            onChange={handleChange}
                            variant="standard"
                            color="primary"
                        >
                            {contactTypes.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <FormLabel className={classes.labelStyle} component="legend">
                            <Typography variant="body2" className={classes.labelTextStyle}>
                                Your Message
                            </Typography>
                        </FormLabel>
                        <TextField
                            id="message"
                            placeholder="Type Your Message Here"
                            className={classes.inputStyle}
                            multiline
                            minRows={4}
                            maxRows={10}
                            value={toSend.message}
                            required
                            fullWidth
                            name="message"
                            onChange={handleChange}
                            variant="standard"
                            color="primary"
                        />
                        <Box className={classes.buttonBoxStyle}>
                            <RedesignButtonPrimary type={"submit"}>Send message</RedesignButtonPrimary>
                        </Box>
                    </FormGroup>
                </FormControl>
            </form>
        </Box>
    );
};

export default ContactForm;
