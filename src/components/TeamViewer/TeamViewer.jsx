// @flow
import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const options = {
  onRowClick(row) {
    alert(`You clicked team: ${row.number}`);
  },
  clearSearch: true,
};

class TeamViewer extends Component {
  render() {
    const teams = [
      {
        id: 1,
        number: '48',
        nickname: 'Delphi E.L.I.T.E.',
        location: 'Warren, OH',
        RookieYear: '1998',
      }, {
        id: 2,
        number: '379',
        nickname: 'RoboCats',
        location: 'Girard, OH',
        RookieYear: '2000',
      }, {
        id: 3,
        number: '2010',
        nickname: 'Lightning Bots',
        location: 'Champion, OH',
        RookieYear: '2007',
      }, {
        id: 4,
        number: '3193',
        nickname: 'Falco Tech',
        location: 'Austintown, OH',
        RookieYear: '2010',
      },
    ];

    return (
      <div className="container">
        <PageHeader>Team Viewer <small>View and compare teams based on collected data</small></PageHeader>
        <BootstrapTable data={teams} options={options} hover search multiColumnSearch>
          <TableHeaderColumn dataField="number" isKey dataSort>Number</TableHeaderColumn>
          <TableHeaderColumn dataField="nickname" dataSort>Team Name</TableHeaderColumn>
          <TableHeaderColumn dataField="location" dataSort>Hometown</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default TeamViewer;
