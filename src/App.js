import React, { Component } from 'react';
import './App.css';
import Home from './Home.js'
import Nav from './Nav.js'
import History from './History.js'

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Home />
        <History />
      </div>
    );
  }
}


export default App;
