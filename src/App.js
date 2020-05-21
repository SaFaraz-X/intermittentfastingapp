import React, { Component } from 'react';
import './Home.css';
import Home from './Home.js'
import Nav from './Nav.js'
import About from './About.js'
//import History from './history.js'

import History from './History.js';
import Clock from './Clock.js';
import Timer from './Timer.js';






class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Home />
        <About />
        {/* <History /> */}
        <Clock />
        <History />
        <Timer
        githubURL="https://github.com/completejavascript/pomodoro-clock" 
        defaultBreakLength='8' 
        defaultSessionLength='16' />
      </div>
    );
  }
}


export default App;
