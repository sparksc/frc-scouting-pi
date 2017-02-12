import React from 'react';
import ReactDOM from 'react-dom';
import PickListHome from '../components/PickList/PickListHome';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PickListHome />, div);
});
