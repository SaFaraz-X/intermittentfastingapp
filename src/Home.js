import React from 'react';
import './Home.css';
import logo from './logo.svg'
import PopUp from './PopUp'
import UserInfo from './Users.json';
import { render } from '@testing-library/react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        welcomeText: 'This is what happens when tech meets wellness.',
    };

    this.signIn = this.signIn.bind(this);
}

  signIn(event) {
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

      this.setState({
        ['welcomeText']: welcomeString
      });
      
    }

    render(){
      return(
        <div>
        <div className="Home">
          <h1 className='Welcome' >{this.state.welcomeText}</h1>
          <button className = 'Signup' onClick={this.signIn}>Sign In</button>
          <PopUp />
        </div>
        <div>
          <img src={logo} className='logo'/>
          <p className='logoName'>SmartFast</p>
        </div>
        </div>
      );
    }
}

export default Home;
