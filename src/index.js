import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var data = [
  {"navn":"Hei heisen", "adresse":"Gata 1"},
  {"navn":"Hei heisen2", "adresse":"Gata 2"}
];
ReactDOM.render(
  <App>{data}</App>,
  document.getElementById('root')
);
