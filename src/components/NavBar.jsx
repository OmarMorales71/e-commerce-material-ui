import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme=>({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
      toolbar: {
        flexWrap: 'wrap',
      },
      toolbarTitle: {
        flexGrow: 1,
      },
    link: {
        margin: theme.spacing(1, 1.5),
      },

}))

const NavBar=()=>{
    const classes = useStyles()
    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Company name
          </Typography>
          <nav>
          <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Home
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              About
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Shop
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Help
            </Link>
          </nav>
          <Button href="#" color="primary" variant="contained" className={classes.link}>
            Your Cart
          </Button>
        </Toolbar>
      </AppBar>
    )
}

export default NavBar