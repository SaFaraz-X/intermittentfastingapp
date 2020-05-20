import React from 'react';
import './Home.css';
import logo from './logo.svg'


const home = () => {
    return(
      <div>
      <div className="Home">
        <h1 className='Welcome' >This is what happens when tech meets wellness.</h1>
        <button className='Signup'>Sign up</button>
      </div>
      <div>
        <img src={logo} className='logo'/>
        <p className='logoName'>SmartFast</p>
      </div>
      </div>
    );
}

export default home;
