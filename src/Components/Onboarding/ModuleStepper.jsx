// components
import { Grid, useMediaQuery } from "@mui/material";
import ModuleCard from "./ModuleCard";

// icons
import circleCheck from "../../Assets/Onboarding/circleCheck.png";

// styles
import { useHomeStyles } from "../../Styles/Onboarding/useHomeStyles";

const modules = [
    {
        link: "/onboarding-mod1",
        number: "module 1",
        subheading: "About Clearviction",
        text: "What is Clearviction and why does this project matter?",
    },
    {
        link: "/onboarding-mod2",
        number: "module 2",
        subheading: "Lets get your tools in order",
        text: "See what tools we use and how we use them to make the team run smooth and efficiently.",
    },
    {
        link: "/onboarding-mod3",
        number: "module 3",
        subheading: "Our team expectations",
        text: "We all want to be good teammembers. Learn how we can make that happen.",
    },
    {
        link: "/onboarding-mod4",
        number: "module 4",
        subheading: "Now what?",
        text: "Now that you know our practices and expectations, lets see what is happening within our teams.",
    },
];

const styles = {
    img: {
        height: "30px",
        alignSelf: "center",
    },
};

const VerticalLinearStepper = () => {
    const classes = useHomeStyles();

    const isLargeScreen = useMediaQuery("(min-width:600px)");

    return (
        <>
            {modules.map((module, index) => (
                <Grid
                    container
                    key={index}
                    justifyContent="center"
                    direction="row"
                    alignItems="center"
                    className="gridContainer"
                >
                    {isLargeScreen ? (
                        <Grid>
                            {index > 0 ? (
                                <div className={classes.connectorLine} />
                            ) : (
                                <div className={classes.spacerLine} />
                            )}
                            {localStorage.getItem(module.link) ? (
                                <img src={circleCheck} style={styles.img} alt="" />
                            ) : (
                                <div className={classes.openCircle} />
                            )}
                            {index < modules.length - 1 ? (
                                <div className={classes.connectorLine} />
                            ) : (
                                <div className={classes.spacerLine} />
                            )}
                        </Grid>
                    ) : (
                        ""
                    )}
                    <Grid item xs={10} md={8} sm={8} lg={8}>
                        <ModuleCard module={module} />
                    </Grid>
                </Grid>
            ))}
        </>
    );
};

export default VerticalLinearStepper;
