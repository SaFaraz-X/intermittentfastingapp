import React from 'react';
import './Home.css';
import logo from './logo.svg'
import PopUp from './PopUp'


const home = () => {
    let userNum = 0;
    let welcomeString;
    if(userNum === null){
      welcomeString = 'This is what happens when tech meets wellness.'
    } else {
      welcomeString = 'Welcome, Matt.'
    }

    return(
      <div>
      <div className="Home">
        <h1 className='Welcome' >{welcomeString}</h1>
        <PopUp />
      </div>
      <div>
        <img src={logo} className='logo'/>
        <p className='logoName'>SmartFast</p>
      </div>
      </div>
    );
}

export default home;
