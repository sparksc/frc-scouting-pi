// @flow
import React, { Component } from 'react';
import { Col, Grid, PageHeader, Panel } from 'react-bootstrap';
import FormPanel from './FormPanel1';
import QuestionWidgets from './QuestionWidgets';

class ScoutingFormBuilder extends Component {
  render() {
    return (
      <div className="container">
        <PageHeader>Scouting Form Builder</PageHeader>
        <Grid>
          <Col xs={12} md={10}>
            <FormPanel />
          </Col>
          <Col xs={6} md={2}>
            <Panel header={<h3 className="text-center"><i className="material-icons">add</i> Question</h3>}>
              <QuestionWidgets />
            </Panel>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default ScoutingFormBuilder;
