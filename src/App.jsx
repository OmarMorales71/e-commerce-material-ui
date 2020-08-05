import React from 'react';
import {Button, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './themeConfig'
import PrimarySearchNavBar from './components/PrimarySearchNavBar';
const useStyle = makeStyles({
  custom:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  }
})

function App() {
  const {custom}=useStyle()
  return (
    <ThemeProvider theme={theme}>
      <PrimarySearchNavBar />
      
    </ThemeProvider>
  );
}

export default App;
