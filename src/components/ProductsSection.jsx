import React from "react";
import { Grid } from "@material-ui/core";
import ProductCard from "./ProductCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    padding: "50px",
  }
});

const ProductsSection = () => {
  const classes=useStyles()
  return (
    <Grid container className={classes.gridContainer} spacing={2} justify="center" alignItems="center">
      <Grid item xs={12} sm ={6} md={4}>
        <ProductCard
          title="PRODUCT NAME"
          price="$300"
          imageUrl="https://icdn2.digitaltrends.com/image/digitaltrends_es/bonavita-connoiseur-768x768.jpg"
          size="m"
          rating={true}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={8} container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <ProductCard
            title="PRODUCT NAME"
            price="$300"
            imageUrl="https://icdn2.digitaltrends.com/image/digitaltrends_es/bonavita-connoiseur-768x768.jpg"
            size="s"
            rating={true}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <ProductCard
            title="PRODUCT NAME"
            price="$300"
            imageUrl="https://icdn2.digitaltrends.com/image/digitaltrends_es/bonavita-connoiseur-768x768.jpg"
            size="s"
            rating={true}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <ProductCard
            title="PRODUCT NAME"
            price="$300"
            imageUrl="https://icdn2.digitaltrends.com/image/digitaltrends_es/bonavita-connoiseur-768x768.jpg"
            size="s"
            rating={true}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <ProductCard
            title="PRODUCT NAME"
            price="$300"
            imageUrl="https://icdn2.digitaltrends.com/image/digitaltrends_es/bonavita-connoiseur-768x768.jpg"
            size="s"
            rating={true}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductsSection;
