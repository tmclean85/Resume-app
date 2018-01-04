import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../containers/Home';

const Routes = () => (
  <Router>
    <Switch>
      <Route component={Home} />
    </Switch>
  </Router>
);

export default Routes;
