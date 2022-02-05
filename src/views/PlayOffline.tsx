import Grid from '@mui/material/Grid';

import { Table, 
         CardAnnounced } from '../components/index';

export const PlayOffline = () : JSX.Element => {
  return (
    <Grid container direction="row" style={{marginTop: '60px'}}>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Grid container justifyContent="center">
          <Table />
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid container alignItems={"stretch"}>
          <Grid item xs={8}>
              <CardAnnounced />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
