import React from "react";
import { Grid, Typography, Divider, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    padding: "50px",
  },
  itemContainer: {
    padding: "20px",
  },
  formControl: {
    marginTop: "-12px",
    minWidth: 120,
  },
}));
const ProductDetail = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/715P5PTbczL._AC_SL1000_.jpg"
          width="100%"
          height="500px"
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        container
        direction="column"
        className={classes.gridContainer}
      >
        <Grid item className={classes.itemContainer}>
          <Typography variant="h3" color="secondary">
            Product title
          </Typography>
          <Rating name="read-only" value={3} readOnly /> <span>5 reviews</span>
        </Grid>
        <Divider />
        <Grid item className={classes.itemContainer} container spacing={2}>
          <Grid item>
            <Typography variant="h4" style={{ display: "inline" }}>
              $1232
            </Typography>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">
                Select Model
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                placeholder="Select Model"
              >
                <MenuItem value={"Model 1"}>Model 1</MenuItem>
                <MenuItem value={"Model 2"}>Model 2</MenuItem>
                <MenuItem value={"Model 3"}>Model 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Divider />
        <Grid item>
          <Typography variant="subtitle2" color="secondary" className={classes.itemContainer}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </Grid>
        <Divider />
        <Grid item className={classes.itemContainer}>
        <Button variant="contained" color="secondary">
            Add To Cart
        </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
