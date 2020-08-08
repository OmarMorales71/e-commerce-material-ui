import React from "react";
import { Grid, Typography, InputBase, Button } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles"

const useStyles=makeStyles(theme=>({
    gridContainer: {
      padding: "50px 150px",
      [theme.breakpoints.down('sm')]: {
        padding: "25px 50px",
      },
    }
  }))

const Subscribe = () => {
    const classes = useStyles()
  return (
    <Grid container className={classes.gridContainer} spacing={2} justify="center" alignItems="center">
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" color="secondary">
          Newsletter
        </Typography>
        <Typography variant="subtitle1" color="secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
          velit, vulputate eu pharetra nec, mattis ac neque.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} spacing={4} justify="center" alignItems="center" container>
          <Grid item xs={6} sm={6}>
            <InputBase fullWidth placeholder="Email Address"/>
          </Grid>
              
          <Grid item xs={6} sm={6}>
          <Button variant="contained" color="secondary">
                Subscribe
              </Button>
          </Grid>
           
      </Grid>
    </Grid>
  );
};

export default Subscribe;
