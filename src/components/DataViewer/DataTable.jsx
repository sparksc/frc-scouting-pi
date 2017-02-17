// @flow
import React, { Component } from 'react';
import Griddle from 'griddle-react';

class DataTable extends Component {
  render() {
    const data = [
      {
        id: '1',
        eventKey: '2016oh',
        name: 'Buckeye Regional',
        shortName: 'Buckeye',
        year: '2016',
        location: 'Cleveland, OH',
        event_type_string: 'Regional',
      }, {
        id: 2,
        eventKey: '2017tn',
        name: 'Smoky Mountains Regional',
        shortName: 'Smoky Mountains',
        year: '2017',
        location: 'Knoxville, TN',
        event_type_string: 'Regional',
      }, {
        id: 3,
        eventKey: '2017pa',
        name: 'Pittsburgh Regional',
        shortName: 'Pittsburgh',
        year: '2017',
        location: 'Pittsburgh, PA',
        event_type_string: 'Regional',
      },
    ];

    return (
      <div>
        <Griddle results={data} showFilter showSettings responsive />
      </div>
    );
  }
}

export default DataTable;
