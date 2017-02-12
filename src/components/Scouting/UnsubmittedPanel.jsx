// @flow
// src/components/Scouting/UnsubmittedPanel.jsx
import React, { Component } from 'react';
import { Col, ListGroup, ListGroupItem, Panel, PanelGroup, Row } from 'react-bootstrap';

class UnsubmittedPanel extends Component {
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
        regional: 'Buckeye',
        created: '2017-02-11T03:24:00',
        modified: '2017-02-11T05:30:00',
        author: 'Billy Bob',
        match: 4,
      },
      {
        id: 2,
        regional: 'Pittsburgh',
        created: '2017-03-04T03:29:00',
        modified: '2017-03-04T03:40:30',
        author: 'Billy Bob',
        match: 12,
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
            <Col xs={4} md={4}><strong>Created: </strong>{form.created}</Col>
            <Col xs={6} md={6}><strong>Regional: </strong>{form.regional}</Col>
            <Col xs={2} md={2}><strong>Match: </strong>{form.match}</Col>
          </Row>
        </ListGroupItem>
      );
    });

    return (
      <div>
        { /* Set the defaultActiveKey=1 so the panel is open by default, but can be collapsed by user. */ }
        <PanelGroup defaultActiveKey="1" accordion>
          <Panel header="My Unsubmitted Forms" eventKey="1">
            <ListGroup>
              { formNode }
            </ListGroup>
          </Panel>
        </PanelGroup>
      </div>
    );
  }
}

export default UnsubmittedPanel;
