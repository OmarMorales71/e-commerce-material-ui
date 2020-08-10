import React from "react";
import {
  Typography,
  Grid,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";

import Rating from '@material-ui/lab/Rating';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 0,
    
  },
  itemContainer: {
    padding: "50px",
  },
  headerContent:{
      margin: "25px 15px"
  },
  media: {
    height: "100%",
    width: "111px",
  },
});

const RegardingProduct = () => {
  const classes = useStyles();

  const getRegardingCard = (product, price, imageUrl) => {
    return (
      
        <CardActionArea>
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardMedia image={imageUrl} className={classes.media} />
            </div>

            <CardContent style={{marginLeft: "0"}}>
              <Typography variant="h6">{product}</Typography>
              <Rating name="read-only" value={3} readOnly />
              <Typography variant="subtitle2">{price}</Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      
    );
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={4} className={classes.itemContainer}>
        <Typography variant="h4" color="secondary" gutterBottom className={classes.headerContent}>
          Header Regarding Your Product
        </Typography>
        <Typography variant="subtitle2" color="initial" gutterBottom className={classes.headerContent}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Typography>
        <Button variant="contained" color="secondary" className={classes.headerContent}>
          Browse All
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={8} className={classes.itemContainer} container spacing={1}justify="center" alignItems="center">
        <Grid item xs={12} sm={12} md={6} container >
          {getRegardingCard(
            "PRODUCT NAME",
            "$300",
            "https://pbs.twimg.com/profile_images/1062308294671376384/4GqTgUgc_400x400.jpg"
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} container>
          {getRegardingCard(
            "PRODUCT NAME",
            "$300",
            "https://pbs.twimg.com/profile_images/1062308294671376384/4GqTgUgc_400x400.jpg"
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} container>
          {getRegardingCard(
            "PRODUCT NAME",
            "$300",
            "https://pbs.twimg.com/profile_images/1062308294671376384/4GqTgUgc_400x400.jpg"
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} container>
          {getRegardingCard(
            "PRODUCT NAME",
            "$300",
            "https://pbs.twimg.com/profile_images/1062308294671376384/4GqTgUgc_400x400.jpg"
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} container>
          {getRegardingCard(
            "PRODUCT NAME",
            "$300",
            "https://pbs.twimg.com/profile_images/1062308294671376384/4GqTgUgc_400x400.jpg"
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} container>
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

export default RegardingProduct;
