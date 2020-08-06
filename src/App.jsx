import React from 'react';
import {ThemeProvider, makeStyles} from '@material-ui/core/styles'
import theme from './themeConfig'
import PrimarySearchNavBar from './components/PrimarySearchNavBar';
import PrimaryHeader from './components/PrimaryHeader'
import FeaturedProducts from './components/FeaturedProducts';

const useStyles=makeStyles(theme=>({
  comp:{
    marginBottom: 500
  }
}))

function App() {
  const classes= useStyles()
  return (
    <ThemeProvider theme={theme}>
      <PrimarySearchNavBar disableElevation/>
      <PrimaryHeader gutterBottom/>
      <br /><br />
      <FeaturedProducts className={classes.comp}/>
    </ThemeProvider>
  );
}

export default App;
