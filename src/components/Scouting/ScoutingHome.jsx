// @flow
// src/components/Scouting/ScoutingHome.jsx
import React, { Component } from 'react';
import { Button, PageHeader } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import UnsubmittedPanel from './UnsubmittedPanel';
import ManageFormPanel from './ManageFormPanel';

class ScoutingHome extends Component {
  render() {
    return (
      <div>
        <PageHeader>FRC Scouting</PageHeader>
        <LinkContainer to={{ pathname: '/scoutinghome/scoutingform' }}>
          <Button bsStyle="primary" bsSize="large" block>Start Match Scouting</Button>
        </LinkContainer>
        <Button bsStyle="primary" bsSize="large" block>Start Team Scouting</Button>
        <Button bsSize="large" block>Form Settings</Button>
        <br />

        { /* Display User's unsubmitted forms so they can either delete or continue editing */ }
        <UnsubmittedPanel />


        { /* Below here are options strictly for Admin/Power users */ }
        <LinkContainer to={{ pathname: '/scoutinghome/scoutingformbuilder' }}>
          <Button bsStyle="success" bsSize="large" block>Create New Form</Button>
        </LinkContainer>
        <br />

        { /* Display Admin User's forms that are available for publishing to the team */ }
        <ManageFormPanel />
      </div>
    );
  }
}

export default ScoutingHome;
