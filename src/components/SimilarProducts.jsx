import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles({
  gridContainer: {
    padding: "50px",
  },
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 0,
    
  },
  media: {
    height: "100%",
    width: "111px",
  },
});

const SimilarProduct = () => {
  const classes = useStyles();

  const getRegardingCard = (product, price, imageUrl) => {
    return (
      <CardActionArea>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardMedia image={imageUrl} className={classes.media} />
          </div>

          <CardContent style={{ marginLeft: "0" }}>
            <Typography variant="h6">{product}</Typography>
            <Rating name="read-only" value={3} readOnly />
            <Typography variant="subtitle2">{price}</Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    );
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.gridContainer}
    >
      <Grid item xs={12}>
        <Typography variant="h3" color="secondary" align="center">
          Similar Products
        </Typography>
      </Grid>
      <Grid item xs={12} container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          {getRegardingCard(
            "PRODUCT NAME",
            "$300",
            "https://pbs.twimg.com/profile_images/1062308294671376384/4GqTgUgc_400x400.jpg"
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {getRegardingCard(
            "PRODUCT NAME",
            "$300",
            "https://pbs.twimg.com/profile_images/1062308294671376384/4GqTgUgc_400x400.jpg"
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {getRegardingCard(
            "PRODUCT NAME",
            "$300",
            "https://pbs.twimg.com/profile_images/1062308294671376384/4GqTgUgc_400x400.jpg"
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SimilarProduct;
