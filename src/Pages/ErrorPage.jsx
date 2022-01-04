import { useEffect } from "react";
import { trackPageview } from "../trackingUtils";

/** MATERIAL UI IMPORTS */
import { Typography, Box, Container, Grid } from "@material-ui/core";

const ErrorPage = () => {
  useEffect(() => trackPageview("Error"), []);

  return (
    <Box
      sx={{
        padding: 20,
      }}
    >
      <Container maxWidth="xs" padding={10}>
        <Grid container direction="column" spacing={2}>
          <Typography variant="h5">Oops, page not found!</Typography>
        </Grid>
      </Container>
    </Box>
  );
};

export default ErrorPage;
