// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router'

import App from './App';
import Dashboard from './components/Dashboard/Dashboard';
import DataViewer from './components/DataViewer/DataViewer';
import Login from './components/Login/Login';
import PickList from './components/PickList/PickList';
import ScoutingForm from './components/ScoutingForm/ScoutingForm';
import TeamViewer from './components/TeamViewer/TeamViewer';
import NotFound from './components/NotFound/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} >
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/scoutinghome" component={ScoutingForm} />
      <Route path="/teamviewer" component={TeamViewer} />
      <Route path="/picklist" component={PickList} />
      <Route path="/dataviewer" component={DataViewer} />
      <Route path="*" component={NotFound} />
    </Route>
    <Route path="/login" component={Login} />
  </Router>
);

export default Routes;
