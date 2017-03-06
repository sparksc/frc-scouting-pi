import React from 'react';
import ReactDOM from 'react-dom';
import FormPanel from '../../components/Scouting/FormPanel1';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormPanel />, div);
});
