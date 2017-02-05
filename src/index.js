import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import Routes from './routes';

import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme-superhero.css';
// import 'bootstrap/dist/css/bootstrap-theme-flatly.css';
import 'font-awesome/css/font-awesome.min.css';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Routes history={browserHistory} />,
  rootEl
);

// Hot reloading
// source: https://medium.com/@sheepsteak/adding-hot-module-reloading-to-create-react-app-e053fadf569d#.ydo7ngetc
if (module.hot) {
  module.hot.accept();
}
