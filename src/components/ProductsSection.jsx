import React from "react";
import { Grid } from "@material-ui/core";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  return (
    <Grid container spacing={0} justify="center" alignItems="center">
      <Grid item xs={12} sm={4} align="center">
      <ProductCard  
            title="PRODUCT NAME" 
            price="$300"
            imageUrl="https://icdn2.digitaltrends.com/image/digitaltrends_es/bonavita-connoiseur-768x768.jpg"
            size="m"
            />
      </Grid>
      <Grid item xs={12} sm={4} container direction="column" justify="center" alignItems="center" spacing={2}>
        <Grid item xs={12}><ProductCard  
            title="PRODUCT NAME" 
            price="$300"
            imageUrl="https://icdn2.digitaltrends.com/image/digitaltrends_es/bonavita-connoiseur-768x768.jpg"
            size="s"
            /></Grid>
        <Grid item xs={12}><ProductCard  
            title="PRODUCT NAME" 
            price="$300"
            imageUrl="https://icdn2.digitaltrends.com/image/digitaltrends_es/bonavita-connoiseur-768x768.jpg"
            size="s"
            /></Grid>
      </Grid>
      <Grid item xs={12} sm={4} container direction="column" justify="center" alignItems="center" spacing={2}>
        <Grid item><ProductCard  
            title="PRODUCT NAME" 
            price="$300"
            imageUrl="https://icdn2.digitaltrends.com/image/digitaltrends_es/bonavita-connoiseur-768x768.jpg"
            size="s"
            /></Grid>
        <Grid item><ProductCard  
            title="PRODUCT NAME" 
            price="$300"
            imageUrl="https://icdn2.digitaltrends.com/image/digitaltrends_es/bonavita-connoiseur-768x768.jpg"
            size="s"
            /></Grid>
      </Grid>
    </Grid>
  );
};

export default ProductsSection;
