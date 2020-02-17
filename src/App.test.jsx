import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './js/Container/App';

test('renders learn react link', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>);
  const linkElement = getByText(/Not the Washington Post/i);
  expect(linkElement).toBeInTheDocument();
});
