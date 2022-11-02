import { useState } from "react";

import { Box, Container, Grid, Typography } from "@mui/material";

import laptop from "../Assets/laptop.svg";
import startup from "../Assets/startup.svg";
import note from "../Assets/note_taking.svg";
import discovery from "../Assets/science_discovery.svg";

import DonateFAQAccordion from "../Subpages/GetInvolved/DonateFAQAccordion";
import DonateLevelCard from "../Components/DonateLevelCard";
import DonateDialog from "../Components/DonateDialog";
import { RedesignButtonPrimary } from "../ui-kit/RedesignButtonPrimary";
import { useGetInvolvedStyles } from "../Styles/useGetInvolvedStyles";

const donationLevels = [
    {
        name: "level 1",
        amount: "$10",
        donationImage: startup,
        desc: "pay for a monthly fee for one of our technological tools",
    },
    {
        name: "level 2",
        amount: "$15",
        donationImage: discovery,
        desc: "fund a research participant’s time ",
    },
    {
        name: "level 3",
        amount: "$30",
        donationImage: laptop,
        desc: "pay the filing fee for a low-income individual ",
    },
    {
        name: "level 4",
        amount: "Any $",
        donationImage: note,
        desc: "help support those with convictions start fresh",
    },
];

const DonatePage = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const classes = useGetInvolvedStyles();
    return (
        <>
            <Container component="section" id="donate" className={classes.regularContainerStyle} maxWidth="md">
                <Typography className={classes.headingStyle} variant="h2">
                    Your donations can go a long way to make the project grow.
                </Typography>
                <Typography className={classes.volunteerTextStyle} variant="body1">
                    Here’s how your generosity can help us achieve our milestones and make it possible to connect our
                    project with more and more people who need it:
                </Typography>
                <Grid container spacing={3}>
                    {donationLevels.map(level => (
                        <Grid item key={level.name} xs={12} sm={6} md={3} lg={3}>
                            <Box display="flex" justifyContent="center">
                                <DonateLevelCard
                                    amount={level.amount}
                                    text={level.desc}
                                    image={level.donationImage}
                                    alt=""
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Container className={classes.CTAButtonContainerStyle}>
                <RedesignButtonPrimary onClick={handleClickOpen}>donate</RedesignButtonPrimary>
                <DonateDialog open={open} onClose={handleClose} />
            </Container>

            <Container className={classes.regularContainerStyle} maxWidth="md">
                <Typography className={classes.headingStyle} variant="h3">
                    Frequently Asked Questions
                </Typography>
                <DonateFAQAccordion />
            </Container>
        </>
    );
};

export default DonatePage;
