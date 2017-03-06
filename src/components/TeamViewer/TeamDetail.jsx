// @flow
import React from 'react';
import { PageHeader } from 'react-bootstrap';

function TeamDetail(props) {
  return (
    <div>
      <PageHeader>Team {this.props.params.number} Details</PageHeader>
    </div>
  );
}

export default TeamDetail;
