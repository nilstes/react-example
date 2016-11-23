import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import $ from 'jquery';

$.get("person", function(data) {
  ReactDOM.render(
    <App>{data}</App>,
    document.getElementById('root')
  );
});
