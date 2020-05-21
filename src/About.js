import React from 'react';
import './Home.css';
import logo from './logo.svg'
import Sa from './Sa.png'
import MattT from './MattT.png'
import Amatullah from './Amatullah.png'
import Matt from './Matt.png'


const about = () => {
    return(
        <div>
          <div>
      <div className="About" id="About">
          <div className='What'>
            <h1>What is SmartFast?</h1>
            <p>Smartfast is an application that allows users to take control of their fasting. Users can track their remaining fasting time with the SmartTimer and track their previous fasting sessions with SmartHistory.</p>
          </div>
          <div className='Why'>
            <h1>Why Should I Fast?</h1>
            <p>Intermittent fasting is a popular strategy used to control calorie intake, reduce blood sugar levels, and improve mental clarity. The most common intermittent fasting plan is the 16:8 plan, where 16 hours per day are spent fasting. 16:8, the most common plan, has been linked to weight loss and fat loss, as well as the prevention of type 2 diabetes and other obesity-associated conditions.  </p>
         </div>
      </div>
      <div className="BigLogo">
          <img src={logo} className='logo2'/>
        <p className='smartfast'>SmartFast</p>
      </div>
      <div className='pics'>
        <img src={Sa}/>
        <img src={MattT}/>
        <img src={Amatullah}/>
        <img src={Matt}/>
      </div>
      <div className='team'>
        <h1>The Team</h1>
      </div>
      <div>
        <ul className='names'>
          <li className='Sa'>Sa</li>
          <li className='MattT'>Matt T</li>
          <li className='Amatullah'>Amatullah</li>
          <li className='MattM'>Matt M</li>
        </ul>
      </div>
      </div>
      </div>
    );
}

export default about;