// @flow
// src/components/Scouting/ManageFormPanel.jsx
import React, { Component } from 'react';
import { Col, ListGroup, ListGroupItem, Panel, PanelGroup, Row } from 'react-bootstrap';

class ManageFormPanel extends Component {
  constructor(props) {
    // Pass props to the parent component
    super(props);
    // Set initial state
    this.state = {
      forms: [],
    };
  }

  componentDidMount() {
    // Static data
    /* TODO: The list group items should be dynamically populated from the DB. This is only for the Admin user. */
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    const data = [
      {
        id: 1,
        name: '2017_MatchForm_v1',
        created: '2017-02-11T03:24:00',
        modified: '2017-02-12T05:30:00',
        author: 'Billy Bob',
        status: 'Live',
      },
      {
        id: 2,
        name: '2017_TeamForm_v1',
        created: '2017-02-04T03:29:00',
        modified: '2017-02-08T01:30:30',
        author: 'Jim Bob',
        status: 'Hidden',
      },
      {
        id: 3,
        name: '2017_TeamForm_v2',
        created: '2017-02-08T03:29:00',
        modified: '2017-02-09T01:30:30',
        author: 'Mary Beth',
        status: 'Live',
      },
    ];

    // Update state
    this.setState({ forms: data });
  }

  render() {
    // TODO: Function should query and open the selected form from the Database.
    function alertClicked() {
      alert('Open Selected Form');
    }

    // Map through forms and return linked forms
    const formNode = this.state.forms.map((form) => {
      return (
        <ListGroupItem key={form.id} onClick={alertClicked}>
          <Row className="show-grid">
            <Col xs={3} md={3}>{form.name}</Col>
            <Col xs={3} md={3}><strong>Last Modified: </strong>{form.modified}</Col>
            <Col xs={3} md={4}><strong>Author: </strong>{form.author}</Col>
            <Col xs={3} md={2}><strong>Status: </strong>{form.status}</Col>
          </Row>
        </ListGroupItem>
      );
    });

    return (
      <div>
        { /* Set the defaultActiveKey=1 so the panel is open by default, but can be collapsed by user. */ }
        <PanelGroup defaultActiveKey="1" accordion>
          <Panel header="Manage Team Forms" eventKey="1">
            <ListGroup>
              { formNode }
            </ListGroup>
          </Panel>
        </PanelGroup>
      </div>
    );
  }
}

export default ManageFormPanel;
