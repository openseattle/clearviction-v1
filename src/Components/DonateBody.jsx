import PropTypes from "prop-types";
import { Box, Container, Grid, Typography } from "@mui/material";
import laptop from "../Assets/laptop.svg";
import startup from "../Assets/startup.svg";
import note from "../Assets/note_taking.svg";
import discovery from "../Assets/science_discovery.svg";
import chart from "../Assets/chart.svg";
import searchEngineer from "../Assets/search_enginer.svg";

import DonateFAQAccordion from "../Subpages/GetInvolved/DonateFAQAccordion";
import DonateLevelCard from "./DonateLevelCard";
import { RedesignButtonPrimary } from "../ui-kit/RedesignButtonPrimary";
import { useGetInvolvedStyles } from "../Styles/useGetInvolvedStyles";

const donationLevels = [
    {
        name: "level 1",
        amount: "",
        donationImage: startup,
        desc: (
            <>
                Fund the{" "}
                <Box component="span" fontWeight="bold">
                    technological and project management tools
                </Box>
                needed to grow our project.
            </>
        ),
        tueImage: startup,
    },
    {
        name: "level 2",
        amount: "",
        donationImage: discovery,
        desc: (
            <>
                Provide{" "}
                <Box component="span" fontWeight="bold">
                    vouchers for users who participate
                </Box>{" "}
                in our research.
            </>
        ),
        tueImage: discovery,
    },
    {
        name: "level 3",
        amount: "",
        donationImage: laptop,
        desc: (
            <>
                Support low-income individuals{" "}
                <Box component="span" fontWeight="bold">
                    in overcoming financial barriers
                </Box>{" "}
                blocking the vacation of their record.
            </>
        ),
        tueImage: chart,
    },
    {
        name: "level 4",
        amount: "",
        donationImage: note,
        desc: (
            <>
                Help people with convictions{" "}
                <Box component="span" fontWeight="bold">
                    learn about and access
                </Box>{" "}
                our Vacation Eligibiliity calculator."
            </>
        ),
        tueImage: searchEngineer,
    },
];

const DonateBody = ({ title, md }) => {
    const classes = useGetInvolvedStyles();
    return (
        <>
            <Container component="section" id="donate" className={classes.regularContainerStyle}>
                <Typography className={classes.headingStyle} variant="h2">
                    {title}
                </Typography>
                <Typography className={classes.volunteerTextStyle} variant="body1">
                    Here’s how your generosity can help us achieve our milestones and make it possible to connect our
                    project with more and more people who need it:
                </Typography>
                <Grid container spacing={3}>
                    {donationLevels.map(level => (
                        <Grid item key={level.name} xs={12} sm={6} md={md} lg={md}>
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
                <RedesignButtonPrimary href="https://donorbox.org/clearviction-givingtuesday">
                    donate
                </RedesignButtonPrimary>
            </Container>

            <Container className={classes.regularContainerStyle}>
                <Typography className={classes.headingStyle} variant="h3">
                    Donation FAQ
                </Typography>
                <DonateFAQAccordion />
            </Container>
        </>
    );
};

export default DonateBody;

DonateBody.propTypes = {
    title: PropTypes.string.isRequired,
    md: PropTypes.string.isRequired,
};
