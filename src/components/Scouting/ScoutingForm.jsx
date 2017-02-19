// @flow
// src/components/Scouting/ScoutingForm.js
import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import Form from 'react-jsonschema-form';

const schema = {
  title: 'Todo',
  type: 'object',
  required: ['title'],
  properties: {
    title: { type: 'string', title: 'Title', default: 'A new task' },
    done: { type: 'boolean', title: 'Done?', default: false },
  },
};

const log = type => console.log.bind(console, type);

class ScoutingForm extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div>
        <PageHeader>ScoutingForm <small>placeholder for submitting scouting forms</small></PageHeader>
        <Form 
          schema={schema}
          onChange={log('changed')}
          onSubmit={log('submitted')}
          onError={log('errors')}
        />
      </div>
    );
  }
}

// ScoutingForm.propTypes = {
//   schema: PropTypes.object,
// };

export default ScoutingForm;
