/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './js/Container/App';
import mirageServer from './miragejs/index';

import * as serviceWorker from './serviceWorker';

mirageServer();

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />
      <Route path="/article/:article" component={App} />
      <Route path="/section/:section" component={App} />
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
