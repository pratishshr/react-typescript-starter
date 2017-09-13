import * as React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import * as routes from '../constants/routes';

import Home from './home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.HOME} component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
