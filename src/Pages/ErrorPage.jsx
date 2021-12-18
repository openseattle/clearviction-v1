import { useEffect } from "react";
import { trackPageview } from "../trackingUtils"

/** MATERIAL UI IMPORTS */
import { Typography } from "@mui/material";
import Box from "@material-ui/core/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

const ErrorPage = () => {
  useEffect(() => trackPageview("Error"), []);

  return (
    <Box
      sx={{
        padding: 20,
      }}
    >
      <Container maxWidth="xs" padding={10}>
        <Stack direction="column" spacing={2}>
          <Typography variant="h5">Oops, page not found!</Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default ErrorPage;
