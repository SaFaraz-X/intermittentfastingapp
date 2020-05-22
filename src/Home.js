import React from 'react';
import './Home.css';
import logo from './logo.svg'
import PopUp from './PopUp'
import UserInfo from './Users.json';

const home = () => {
    let userName;
    let welcomeString;
    let myName = null;

    let x = UserInfo.map((userInfo, index) =>{
      return (
          userInfo.name
      )
    })

    userName = window.prompt("Please enter your name: ");

     for(var i = 0; i < x.length; i++){
       if(userName === x[i]){
         myName = x[i];
      }
    }

    if(myName === null){
      welcomeString = 'This is what happens when tech meets wellness.'
    } else {
      welcomeString = 'Welcome, ' + myName + '.'
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
