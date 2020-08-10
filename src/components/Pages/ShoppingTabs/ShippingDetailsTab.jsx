import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography,
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Divider,
    TextField,
    Checkbox,
    FormControlLabel
  } from "@material-ui/core";

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
  itemTotal:{
    padding: "10px 0"
}
});

const ShippingDetailsTap = () => {
  const classes = useStyles();

  const getSummaryCard = (product, price, imageUrl) => {
    return (
      <CardActionArea>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardMedia image={imageUrl} className={classes.media} />
          </div>

          <CardContent style={{ marginLeft: "0" }}>
            <Typography variant="h6">{product}</Typography>
            
            <Typography variant="subtitle2">{price}</Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    );
  };

  return (
    <Grid container className={classes.gridContainer} spacing={4}>
      <Grid item xs={12} sm={8} container direction="column">
        <Grid item xs={12}>
          <Typography variant="h4" color="initial" gutterBottom>
            Shipping Details
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="shipping address-line2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveAddress" value="yes" />
              }
              label="Use this address for payment details"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={4} container>
        
        <Typography variant="h4" gutterBottom>
              Summary
          </Typography>
          <Divider />
          <Grid item xs={12}>
          {getSummaryCard(
            "PRODUCT NAME",
            "$300",
            "https://pbs.twimg.com/profile_images/1062308294671376384/4GqTgUgc_400x400.jpg"
          )} 
          </Grid>
          
          
          
          <Divider />
          <table width="100%">
              <tr>
                  <td align="left" className={classes.itemTotal}>SUBTOTAL</td>
                  <td align="right" className={classes.itemTotal}>$600</td>
              </tr>
              <tr>
                  <td align="left" className={classes.itemTotal}>SHIPPING</td>
                  <td align="right" className={classes.itemTotal}>FREE</td>
              </tr>
              <tr>
                  <td align="left" className={classes.itemTotal}>TAXES</td>
                  <td align="right" className={classes.itemTotal}>$13</td>
              </tr>
          </table>
          <Divider />
          <table width="100%">
              <tr>
                  <td align="left" className={classes.itemTotal}>
                      <Typography variant="h5" component="p"> TOTAL</Typography>
                      </td>
                  <td align="right" className={classes.itemTotal}><Typography variant="h5" component="span"> $613</Typography></td>
              </tr>
              
          </table>
        </Grid>
     
    </Grid>
  );
};

export default ShippingDetailsTap;
