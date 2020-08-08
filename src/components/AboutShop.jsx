import React from "react";
import { Grid, Typography } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles'

const useStyles=makeStyles(theme=>({
    gridContainer: {
      padding: "50px 150px",
      [theme.breakpoints.down('sm')]: {
        padding: "25px 50px",
      },
    }
  }))
const AboutShop = () => {
    const classes = useStyles()
  return (
    <Grid container direction="column" className={classes.gridContainer} spacing={2} alignItems="center">
      <Grid item>
        <Typography variant="h4" color="secondary" align="center">
          About Your Shop
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1" color="secondary" align="center">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.{" "}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutShop
