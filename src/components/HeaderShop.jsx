import React from 'react'
import { Grid, Typography, Input, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme=>({
    gridContainer: {
        padding: "50px 50px 50px 30px"
    },
    title: {
        [theme.breakpoints.down('sm')]: {
            fontSize: "25px",
          }
    }
}))
const HeaderShop=()=>{
    const classes = useStyles()
    return (
        <Grid container className={classes.gridContainer} direction ="column" justify="center" alignItems="center" spacing={8}> 
            <Grid item xs={12}>
                <Typography variant="h2" color="secondary" className={classes.title}>
                Tagline describing your e-shop
                    </Typography>             
                </Grid>
                <Grid item xs={12}>
                <Input placeholder="Search..." />
                <Button variant="contained" color="secondary">
                    Submit
                    </Button>          
                </Grid>
        </Grid>
    )
}

export default HeaderShop