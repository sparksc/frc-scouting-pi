import React from 'react';
import ReactDOM from 'react-dom';
import ScoutingFormBuilder from '../components/Scouting/ScoutingFormBuilder';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScoutingFormBuilder />, div);
});
