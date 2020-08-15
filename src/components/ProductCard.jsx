import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import {Typography} from "@material-ui/core"
import Rating from "@material-ui/lab/Rating";
const useStyles = makeStyles(theme=>({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
    mediaSmall: {
    width: "100%",
    height: '100px', 
    },
    rating: {
      float: "right",
      [theme.breakpoints.down('md')]:{
        float: "none"
      }
    }
}));



const ProductCard = ({ imageUrl, title, price, size, rating }) => {
  const classes = useStyles();
  const getSize= size=>{
    if(size==="s"){
      return classes.mediaSmall
    }else {
      return classes.media
    }
  }
  return (
    <Card>
      <CardActionArea>
        <CardMedia className={getSize(size)} image={imageUrl} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}<span className={classes.rating}> <Rating name="read-only" value={3} readOnly /></span>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;