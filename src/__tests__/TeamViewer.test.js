import React from 'react';
import ReactDOM from 'react-dom';
import TeamViewer from '../components/TeamViewer/TeamViewer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TeamViewer />, div);
});
