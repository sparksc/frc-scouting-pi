// @flow
// src/components/Dashboard/Dashboard.js
import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

class Dashboard extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div>
        <PageHeader>Dashboard <small>A place to administrate the app</small></PageHeader>
      </div>
    );
  }
}

export default Dashboard;
