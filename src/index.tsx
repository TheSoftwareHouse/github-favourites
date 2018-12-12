import '@babel/polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import { Global as GlobalStyles } from './theme/Global.styles';
import { Theme } from './theme/Theme';

import { App } from './app/App';

ReactDOM.render(
  <Router>
    <ThemeProvider theme={Theme}>
      <Global styles={GlobalStyles} />
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('github-favourites')
);

serviceWorker.unregister();
