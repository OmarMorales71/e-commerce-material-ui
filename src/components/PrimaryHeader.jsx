import React from "react";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";


const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  root: {
    maxWidth: 345,
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];
const PrimaryHeader = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Tagline describing your e-shop
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                style={{ height: 0, paddingTop: "56.25%" }}
                image="https://i0.wp.com/www.silocreativo.com/wp-content/uploads/2018/01/imagen-aleatoria-destacada.png?fit=666%2C370&quality=100&strip=all&ssl=1"
                title="lorem ipsum"
              />
            </Card>
            
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                style={{ height: 0, paddingTop: "56.25%" }}
                image="https://i0.wp.com/www.silocreativo.com/wp-content/uploads/2018/01/imagen-aleatoria-destacada.png?fit=666%2C370&quality=100&strip=all&ssl=1"
                title="lorem ipsum"
              />
            </Card>
            
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                style={{ height: 0, paddingTop: "56.25%" }}
                image="https://i0.wp.com/www.silocreativo.com/wp-content/uploads/2018/01/imagen-aleatoria-destacada.png?fit=666%2C370&quality=100&strip=all&ssl=1"
                title="lorem ipsum"
              />
            </Card>
            
          </Grid>
        </Grid>
      </Container>
      <div className={classes.heroButtons}>
        <Grid container spacing={1} justify="center">
          <Grid item>
            <Button variant="contained" color="secondary" size="large">
              Shop Now
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default PrimaryHeader;
