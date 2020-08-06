import React from 'react'
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";

const useStyle=makeStyles(theme=>({
    mediaCard:{
        height: 0,
        paddingTop: "56.25%"
    }
}))


const FeaturedProducts = () =>{
    const classes = useStyle()
    return(
        <>
        <Typography variant="h4" color="initial" align="center" gutterBottom>
            Featured Products
        </Typography>
        <Container maxWidth="md" component="main">
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                style={{ height: 0, paddingTop: "70%" }}
                image="https://i0.wp.com/www.silocreativo.com/wp-content/uploads/2018/01/imagen-aleatoria-destacada.png?fit=666%2C370&quality=100&strip=all&ssl=1"
                title="lorem ipsum"
              />
            </Card>
            
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                style={{ height: 0, paddingTop: "70%" }}
                image="https://i0.wp.com/www.silocreativo.com/wp-content/uploads/2018/01/imagen-aleatoria-destacada.png?fit=666%2C370&quality=100&strip=all&ssl=1"
                title="lorem ipsum"
              />
            </Card>
            
          </Grid>
          
        </Grid>
      </Container>
        </>
    )
}

export default FeaturedProducts