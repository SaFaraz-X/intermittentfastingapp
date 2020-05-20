import React, { Component } from 'react';
import './App.css';
import About from './About.js'
import Nav from './Nav.js'
import History from './History.js'

class App extends Component {
  render() {
    return (
<div>
      <Nav/>
      <About />
     <History />
      </div>
    );
  }
}


export default App;
