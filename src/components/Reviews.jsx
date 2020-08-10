import React from 'react'
import { Grid, Typography, Divider } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import ReviewComment from './ReviewComment'

const useStyles = makeStyles({
    gridContainer:{
        padding: "50px"
    }
})
const Reviews =()=>{
    const classes = useStyles()
    return(
        <Grid container direction="column" className={classes.gridContainer}>
            <Grid item>
                <Typography variant="h3" color="secondary" gutterBottom>
                    Reviews
                </Typography>
            </Grid>
            <Grid item xs={12} container direction="column" justify="center" alignItems="center" spacing={2}>
                <Grid item>
                <ReviewComment className={classes.reviewContainer}/>
                </Grid>

                <Grid item>
                <ReviewComment className={classes.reviewContainer}/>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Reviews