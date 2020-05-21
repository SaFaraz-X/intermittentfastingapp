import React, { Component } from 'react';
import './Home.css';
import Home from './Home.js';
import Nav from './Nav.js';
import History from './History.js';
import Clock from './Clock.js';


class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Home />
        <Clock />
        <History />
      </div>
    );
  }
}


export default App;
