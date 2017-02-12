// @flow
import React, { Component } from 'react';
import { Col, ListGroup, ListGroupItem, PageHeader, Row } from 'react-bootstrap';

class PickListHome extends Component {
  constructor(props) {
    // Pass props to the parent component
    super(props);
    // Set initial state
    this.state = {
      picklists: [],
    };
  }

  componentDidMount() {
    // Static data
    /* TODO: The list group items should be dynamically populated from the DB. */
    const data = [
      {
        id: 1,
        name: '2017_Buckeye_PickList_Billy_1',
        created: '2017-02-11T03:24:00',
        modified: '2017-02-12T05:30:00',
        modifiedBy: 'Jane Doe',
        author: 'Billy Bob',
        season: '2017',
        regional: 'Buckeye',
      },
      {
        id: 2,
        name: '2017_Buckeye_PickList_Jim_2',
        created: '2017-02-04T03:29:00',
        modified: '2017-02-08T01:30:30',
        modifiedBy: 'Jim Bob',
        author: 'Jim Bob',
        season: '2017',
        regional: 'Buckeye',
      },
      {
        id: 3,
        name: '2016_Pittsburgh_PickList_Mary_1',
        created: '2016-02-08T03:29:00',
        modified: '2016-02-09T01:30:30',
        modifiedBy: 'Mary Beth',
        author: 'Mary Beth',
        season: '2016',
        regional: 'Pittsburgh',
      },
    ];

    // Update state
    this.setState({ picklists: data });
  }

  render() {
    // Map through pick lists and return linked pick lists
    const pickListNode = this.state.picklists.map((picklist) => {
      return (
        <ListGroupItem key={picklist.id} header={picklist.name} href="#">
          <Row className="show-grid">
            <Col xs={3} md={2}><strong>Season: </strong>{picklist.season}</Col>
            <Col xs={3} md={4}><strong>Regional: </strong>{picklist.regional}</Col>
            <Col xs={3} md={3}><strong>Last Modified: </strong>{picklist.modified}</Col>
            <Col xs={3} md={3}><strong>Modified By: </strong>{picklist.modifiedBy}</Col>
          </Row>
        </ListGroupItem>
      );
    });

    return (
      <div>
        <PageHeader>Pick Lists</PageHeader>

        <ListGroup>
          { pickListNode }
        </ListGroup>
      </div>
    );
  }
}

export default PickListHome;
