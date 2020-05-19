import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js'
import About from './About.js'
import history from './history.js'


class App extends Component {

  render(){
    return(
<div>
      <Nav/>
      <About />
     <historyChart/>
      </div>
    );
  }

}

export default App;
