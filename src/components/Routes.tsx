import * as React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import * as routeConstants from '../constants/routeConstants';

import Home from './home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path={routeConstants.HOME} component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
