// @flow
import React from 'react';
import { PageHeader } from 'react-bootstrap';

function TeamDetail(props) {
  return (
    <div>
      <PageHeader>Team {props.number} Details</PageHeader>
    </div>
  );
}

export default TeamDetail;
