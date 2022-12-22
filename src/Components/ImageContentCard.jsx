import { Paper, Typography, Box, Button } from "@mui/material";

const ImageContentCard = ({ content, image, buttonText, buttonHref }) => {
    const retrieveImage = bgImage => `url(${bgImage})`;

    return (
        <Box padding={1}>
            <Paper
                sx={{
                    height: 460,
                    minWidth: 280,
                    maxWidth: 324,
                    backgroundImage: retrieveImage(image),
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "130%",
                    backgroundPosition: "-40px 220px",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        px: 4,
                        py: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography variant="subtitle1" align="center" component="h2">
                        {content}
                    </Typography>

                    <Button variant="contained" sx={{ width: "100%" }} href={buttonHref}>
                        {buttonText}
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default ImageContentCard;
