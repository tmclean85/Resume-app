import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';

const Routes = () => (
  <Router>
    <Switch>
      <Route component={Home} />
    </Switch>
  </Router>
);

export default Routes;
