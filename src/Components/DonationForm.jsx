import { Box } from "@mui/material";

const DonationForm = () => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <iframe
                title="Clearviction Donation Form"
                src="https://donorbox.org/embed/clearviction-givingtuesday"
                name="donorbox"
                // allowpaymentrequest="allowpaymentrequest"
                seamless="seamless"
                frameBorder="0"
                height="900"
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

export default DonationForm;
