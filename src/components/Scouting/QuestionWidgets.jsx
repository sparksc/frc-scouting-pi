// @flow
import React, { Component } from 'react';
import { Button, Row } from 'react-bootstrap';

class QuestionWidgets extends Component {
  render() {
    return (
      <div>
        <Row>
          <Button block><span className="pull-left"><i className="material-icons md-18">short_text</i> Short Answer</span></Button>
        </Row>
        <Row>
          <Button block><span className="pull-left"><i className="material-icons md-18">subject</i> Paragraph</span></Button>
        </Row>
        <Row>
          <Button block><span className="pull-left"><i className="material-icons md-18">radio_button_checked</i> Multiple Choice</span></Button>
        </Row>
        <Row>
          <Button block><span className="pull-left"><i className="material-icons md-18">check_box</i> Checkboxes</span></Button>
        </Row>
        <Row>
          <Button block><span className="pull-left"><i className="material-icons md-18">arrow_drop_down_circle</i> Dropdown</span></Button>
        </Row>
        <Row>
          <Button block><span className="pull-left"><i className="material-icons md-18">linear_scale</i> Scale</span></Button>
        </Row>
        <Row>
          <Button block><span className="pull-left"><i className="material-icons">insert_invitation</i> Date</span></Button>
        </Row>
        <Row>
          <Button block><span className="pull-left"><i className="material-icons">access_time</i> Time</span></Button>
        </Row>
      </div>
    );
  }
}

export default QuestionWidgets;
