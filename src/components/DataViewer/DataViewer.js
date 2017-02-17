// @flow
// src/components/DataViewer/DataViewer.js
import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

import DataTable from './DataTable';

class DataViewer extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div>
        <PageHeader>DataViewer</PageHeader>
        <DataTable />
      </div>
    );
  }
}

export default DataViewer;
