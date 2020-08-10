import React from "react";
import {
  Card,
  CardActionArea,
  CardHeader,
  CardContent,
  Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  avatar: {
    backgroundColor: red[500],
  },
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

const ReviewComment = () => {
  const classes = useStyles();
  return (
    
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardHeader
            avatar={
              <Avatar aria-label="profile" className={classes.avatar}>
                R
              </Avatar>
            }
            title="JOHN DOE"
            subheader="September 14, 2016"
          />
        </div>
       
        <CardContent>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>
        </CardContent>
      </Card>
    
  );
};

export default ReviewComment;
