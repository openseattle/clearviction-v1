import { Box } from "@mui/material";

const DonationForm = () => {
    return (
        <iframe
            title="Clearviction Donation Form"
            src="https://donorbox.org/embed/clearviction"
            name="donorbox"
            seamless="seamless"
            frameBorder="0"
            height="900"
            width="fit-content"
            style={{
                maxWidth: "425px",
                minWidth: "250px",
                maxHeight: "none!important",
            }}
        />
    );
};

const DonationMeter = () => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <iframe
                title="Clearviction Donation Meter"
                src="https://donorbox.org/embed/clearviction"
                name="donorbox-meter"
                scrolling="no"
                seamless="seamless"
                frameBorder="0"
                height="93"
                width="100%"
                style={{
                    maxWidth: "425px",
                    minWidth: "250px",
                    maxHeight: "none!important",
                }}
            />
        </Box>
    );
};

export { DonationForm, DonationMeter };
