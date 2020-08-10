import React from 'react'
import {
    Typography,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
  } from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles({
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
  
const ProductVerticalCard = (product, price, imageUrl) => {
    const classes = useStyles();
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

  export default ProductVerticalCard