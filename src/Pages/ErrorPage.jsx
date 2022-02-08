import { useEffect } from "react";
import { trackPageview } from "../trackingUtils";

/** MATERIAL UI IMPORTS */
import { Typography, Container, Grid } from "@material-ui/core";

const ErrorPage = () => {
  useEffect(() => trackPageview("Error"), []);

  return (
    <Container maxWidth="xs" padding={10}>
      <Grid container direction="column" justifyContent="center">
        <Grid item>
          <Typography variant="h5" align="center">
            Oops, page not found!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ErrorPage;
