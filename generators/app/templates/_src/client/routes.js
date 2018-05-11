import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AppContainer } from './containers/';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={AppContainer} />
    </Switch>
  </BrowserRouter>
);
