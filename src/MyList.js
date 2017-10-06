import React, { Component } from 'react';
import './App.css';

class MyList extends Component {
  render() {
    return (
      <table>
		<thead><tr><th>Navn</th><th>Adresse</th><th>Alder</th></tr></thead>
		<tbody>
        {
          this.props.children.map(function(item) {
            return <tr><td>{item.navn}</td><td>{item.adresse}</td><td>{item.alder}</td></tr>
          })
        }
	    </tbody>
      </table>
    )  
  }
}

export default MyList;
