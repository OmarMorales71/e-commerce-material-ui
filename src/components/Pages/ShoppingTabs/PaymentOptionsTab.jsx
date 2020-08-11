import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Divider,
  CardHeader,
  TextField,
  Radio
} from "@material-ui/core";


const useStyles = makeStyles({
  gridContainer: {
    padding: "50px",
  },
  paymentGrid:{
      maxHeight: "500px"
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
  itemTotal: {
    padding: "10px 0",
  },
});


const PaymentOptionsTab = () => {
  const classes = useStyles();
  const [payment, setPayment] = useState("Card")

  const handleChange = (event) => {
    setPayment(event.target.value);
  };

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
    <Grid
      container
      className={classes.gridContainer}
      spacing={2}
    >
      <Grid className={classes.paymentGrid} item xs={12} sm={8} container spacing={2} alignItems="flex-start" justify="flex-start">
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Payment method
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12} container direction="column">
          <Card>
            <CardHeader
              avatar={
                <Radio
                  checked={payment === "Card"}
                  onChange={handleChange}
                  value="Card"
                  name="paymentMethod"
                  inputProps={{ "aria-label": "A" }}
                />
              }
              title="Credit Card"
              subheader="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
            />
            <CardContent>
              <Grid item xs={12} container spacing={2}>
                <Grid item xs={12} sm={8}>
                  <TextField
                    required
                    id="cardNumber"
                    name="cardNumber"
                    label="Card number"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6} sm={2}>
                  <TextField
                    required
                    id="expiryDate"
                    name="expiryDate"
                    label="MM/YY"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6} sm={2}>
                  <TextField
                    required
                    id="cvv"
                    name="cvv"
                    label="CVV"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id="cardHolderName"
                    name="cardHolderName"
                    label="Card Holder Name"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} container direction="column">
          <Card>
            <CardHeader
              avatar={
                <Radio
                  checked={payment === "PayPal"}
                  onChange={handleChange}
                  value="PayPal"
                  name="paymentMethod"
                  inputProps={{ "aria-label": "PayPal" }}
                />
              }
              title="Paypal"
              subheader="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
            />
            
          </Card>
        </Grid>

      </Grid>

      <Grid item xs={12} sm={4} container spacing={1}>
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
        <Grid item xs={12}>
          {getSummaryCard(
            "PRODUCT NAME",
            "$300",
            "https://pbs.twimg.com/profile_images/1062308294671376384/4GqTgUgc_400x400.jpg"
          )}
        </Grid>
        <Grid item xs={12}>
          {getSummaryCard(
            "PRODUCT NAME",
            "$300",
            "https://pbs.twimg.com/profile_images/1062308294671376384/4GqTgUgc_400x400.jpg"
          )}
        </Grid>
        <Grid item xs={12}>
          {getSummaryCard(
            "PRODUCT NAME",
            "$300",
            "https://pbs.twimg.com/profile_images/1062308294671376384/4GqTgUgc_400x400.jpg"
          )}
        </Grid>
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
            <td align="left" className={classes.itemTotal}>
              SUBTOTAL
            </td>
            <td align="right" className={classes.itemTotal}>
              $600
            </td>
          </tr>
          <tr>
            <td align="left" className={classes.itemTotal}>
              SHIPPING
            </td>
            <td align="right" className={classes.itemTotal}>
              FREE
            </td>
          </tr>
          <tr>
            <td align="left" className={classes.itemTotal}>
              TAXES
            </td>
            <td align="right" className={classes.itemTotal}>
              $13
            </td>
          </tr>
        </table>
        <Divider />
        <table width="100%">
          <tr>
            <td align="left" className={classes.itemTotal}>
              <Typography variant="h5" component="p">
                {" "}
                TOTAL
              </Typography>
            </td>
            <td align="right" className={classes.itemTotal}>
              <Typography variant="h5" component="span">
                {" "}
                $613
              </Typography>
            </td>
          </tr>
        </table>
      </Grid>
    </Grid>
  );
};

export default PaymentOptionsTab;
