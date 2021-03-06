import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme-superhero.css';
// import 'bootstrap/dist/css/bootstrap-theme-flatly.css';

import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './css/index.css';

import Routes from './routes';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Routes history={browserHistory} />,
  rootEl,
);

// Hot reloading
// source: https://medium.com/@sheepsteak/adding-hot-module-reloading-to-create-react-app-e053fadf569d#.ydo7ngetc
if (module.hot) {
  module.hot.accept();
}
