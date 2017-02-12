import React from 'react';
import ReactDOM from 'react-dom';
import ScoutingForm from '../components/ScoutingForm/ScoutingForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScoutingForm />, div);
});
