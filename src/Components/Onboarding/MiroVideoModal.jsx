import { Grid } from '@material-ui/core';

// styles
import { useModalStyles } from '../../Styles/Onboarding/useModalStyles';

export default function MiroVideoModal() {
  const classes = useModalStyles();

  const miro = "https://drive.google.com/file/d/1dPIDPah9GbxFhOwi25t_x8YgvPU_33LZ/preview";

  return (
    <Grid container style={{height: '100%'}}>
      
      <Grid item xs={7} md={8} lg={9} className={classes.contentStyle}>
          <div style={{ height: "100%", width: '90vw' }}>
            <iframe title="miro" src={miro} width="100%" height="90%" allow="autoplay"></iframe>
          </div>
      </Grid>
    </Grid>
  )
}
