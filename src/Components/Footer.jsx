import React from "react";
import { Grid, Box, Container } from "@material-ui/core";
import { List, ListItem } from "@material-ui/core";
import { Stack, Typography } from "@mui/material";
import { Divider } from "@mui/material";

import democracylabLogo from "../Assets/democracylab-logo.png";
import openseattleLogo from "../Assets/openseattle-logo.png";

const Footer = () => {
  return (
    <Container maxWidth="xl">
      <Stack direction="row" sx={{ display: "flex", padding: 5 }}>
        <Grid container columns={2} spacing={6} justifyContent="space-between">
          <Grid item>
            <List>
              <ListItem>
                <a href="/" style={{ color: "#000000" }}>
                  Home
                </a>
              </ListItem>
              <ListItem>
                <a href="/calculator" style={{ color: "#000000" }}>
                  Calculator
                </a>
              </ListItem>
              <ListItem>
                <a href="/" style={{ color: "#000000" }}>
                  Contact
                </a>
              </ListItem>
            </List>
          </Grid>

          <Grid item sx={{ float: "right", position: "relative" }}>
            <Stack direction="column">
              <img src={openseattleLogo} alt={"Open Seattle Logo"} />
              <img src={democracylabLogo} alt={"Democracy Lab Logo"} />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
      <Box justifyContent="center" marginBottom={1}>
        <Typography align="center" fontFamily={"sans-serif"} fontSize="14px">
          {" "}
          The information on this site is not, nor should it be, considered
          legal advice.
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
