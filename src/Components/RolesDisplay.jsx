import { Grid, Card,Typography } from "@material-ui/core";

const roles = [
  "User Research",
  "Front-End Development",
  "UX Design",
  "Copywriting",
  "Back-End Development",
  "Marketing",
  "Subject Matter Expert",
  "Grant Writing",
];

const RolesDisplay = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {roles.map((role) => (
        <Grid item key={role} >
          <Card style={{ width: 100, height: 100,}}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              style={{height: "100px"}}
            >
                <Typography variant="body1" align="center" >
                  {role}
                </Typography>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RolesDisplay;
