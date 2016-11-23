import React, { Component } from 'react';
import './App.css';
import MyList from './MyList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyList>{this.props.children}</MyList>
      </div>
    );
  }
}

export default App;
