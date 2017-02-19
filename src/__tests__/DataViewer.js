import React from 'react';
import ReactDOM from 'react-dom';
import DataViewer from '../components/DataViewer/DataViewer';

describe('DataViewer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DataViewer />, div);
  });
});
