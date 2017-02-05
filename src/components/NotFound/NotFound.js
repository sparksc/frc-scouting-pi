// src/components/NotFound/NotFound.js
import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

export default class NotFound extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div>
        <PageHeader>404 <small>Not Found :(</small></PageHeader>
      </div>
    );
  }
}