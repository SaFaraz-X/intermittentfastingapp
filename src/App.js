import React, { Component } from 'react';
import './Home.css';
import Home from './Home.js'
import Nav from './Nav.js'
import About from './About.js'
//import History from './history.js'

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Home />
        <About />
        {/* <History /> */}
      </div>
    );
  }
}


export default App;
