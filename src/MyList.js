import React, { Component } from 'react';
import './App.css';

class MyList extends Component {
  render() {
    return (
      <table>
      {
        this.props.children.map(function(item) {
          return <tr><td>{item.navn}</td><td>{item.adresse}</td></tr>
        })
      }
      </table>
    )  
  }
}

export default MyList;
