import React, { useEffect } from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from '../js/Container/App';

const history = createBrowserHistory();

export default function setUpApplication({ url = '/' }) {
  // useEffect(() => {
    if (url) history.push(url);
  // }, []);
  return render(
    <BrowserRouter history={[url]}>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/article/:article" component={App} />
        <Route path="/section/:section" component={App} />
      </Switch>
    </BrowserRouter>
  );
}
