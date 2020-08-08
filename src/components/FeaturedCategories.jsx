import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import FeaturedCard from './FeaturedCard'
import {makeStyles} from '@material-ui/core/styles'
import Category from './Category'

const useStyles = makeStyles(theme=>({
    gridContainer:{
        padding: "50px"
    },
    buttonStyle:{
        [theme.breakpoints.up('sm')]:{
            height:"444px"
        }
        
    }
}))
const FeaturedCategories = () =>{
     const classes = useStyles()
    return (
        <Grid container className={classes.gridContainer} direccion="column" spacing={2} justify="center" alignItems="center">
            <Grid item xs={12} >
                <Typography variant="h3" align="center" color="secondary">
                Featured Categories
                </Typography>
                <Typography variant="subtitle1" align="center" color="secondary">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                </Typography>
            </Grid> 

            <Grid item xs={12} container spacing={2} justify="center" alignItems="flex-start"> 
                <Grid item xs={12} sm={3}>
                    <Category 
                    imageUrl="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    title="Category" />
                </Grid>
                <Grid item xs={12} sm={3}>
                <Category 
                    imageUrl="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    title="Category" />
                </Grid>
                <Grid item xs={12} sm={3}>
                <Category 
                    imageUrl="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    title="Category" />
                </Grid>
                <Grid item xs={12} sm={3} >
                <Button variant="contained" color="secondary" fullWidth className={classes.buttonStyle}>Shop Now</Button>
                </Grid>

            </Grid>

        </Grid>     
        )
}

export default FeaturedCategories