import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js'
import Home from './Home.js'
import history from './history.js'


class App extends Component {

  render(){
    return(
      <div>
        <Nav/>
        <Home />
        <historyChart/>
      </div>
    );
  }

}

export default App;
