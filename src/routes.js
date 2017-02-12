// src/routes.js
import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import App from './App';
import Dashboard from './components/Dashboard/Dashboard';
import DataViewer from './components/DataViewer/DataViewer';
import Login from './components/Login/Login';
import PickListHome from './components/PickList/PickListHome';
import ScoutingHome from './components/Scouting/ScoutingHome';
import ScoutingForm from './components/Scouting/ScoutingForm';
import ScoutingFormBuilder from './components/Scouting/ScoutingFormBuilder';
import TeamViewer from './components/TeamViewer/TeamViewer';
import NotFound from './components/NotFound/NotFound';

const Routes = props => (
  <Router {...props}>
    <Route path="/" component={App} >
      {/* Show the dashboard at / */}
      <IndexRoute component={Dashboard} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/scoutinghome" component={ScoutingHome} />
      <Route path="/scoutinghome/scoutingform" component={ScoutingForm} />
      <Route path="/scoutinghome/scoutingformbuilder" component={ScoutingFormBuilder} />
      <Route path="/teamviewer" component={TeamViewer} />
      <Route path="/picklist" component={PickListHome} />
      <Route path="/dataviewer" component={DataViewer} />
      <Route path="*" component={NotFound} />
    </Route>
    <Route path="/login" component={Login} />
  </Router>
);

export default Routes;
