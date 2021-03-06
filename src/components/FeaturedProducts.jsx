import React from "react";
import { Grid, Typography, TextareaAutosize } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles'
import FeaturedCard from "./FeaturedCard";

const useStyles=makeStyles({
  gridContainer: {
    paddingTop: "50px",
    paddingBottom: "50px",
  }
})
const FeaturedProducts = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} >
          <Typography variant="h3" color="initial" align="center" gutterBottom>
            Featured Products
          </Typography>
        </Grid>
        <Grid item container spacing={5} alignItems="center"  justify='center'>
          
          <Grid item xs={10} sm={5}>
            <FeaturedCard  
            title="PRODUCT NAME" 
            price="$300"
            imageUrl="https://icdn2.digitaltrends.com/image/digitaltrends_es/bonavita-connoiseur-768x768.jpg"
            />
          </Grid>
          <Grid item xs={10} sm={5}>
          <FeaturedCard 
            title="PRODUCT NAME" 
            price="$300"
            imageUrl="https://icdn2.digitaltrends.com/image/digitaltrends_es/bonavita-connoiseur-768x768.jpg"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FeaturedProducts;
