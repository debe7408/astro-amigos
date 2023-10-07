import { Grid, Typography } from "@mui/material";

interface Props {}

const HowItWorks: React.FC<Props> = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h1" component="h2">
          Hello There
        </Typography>
        asd
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default HowItWorks;
