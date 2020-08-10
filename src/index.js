import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import {ThemeProvider} from '@material-ui/core'
import theme from './themeConfig';
import {Router} from "react-router-dom"
import {createBrowserHistory} from 'history'

const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Router history={history}>
    <App />
    </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

