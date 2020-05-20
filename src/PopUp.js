import React from 'react';
import SignUp from './SignUp'

class PopUp extends React.Component {
    constructor(props){  
        super(props);  
        this.state = { showPopup: false };  
        }  
        
    togglePopup() {  
        this.setState({  
             showPopup: !this.state.showPopup  
        });  
    }

    render() {
        return (
            <div>  
              <button className = 'Signup' onClick={this.togglePopup.bind(this)}>Sign Up</button>  
              {this.state.showPopup ?  
                <SignUp closePopup={this.togglePopup.bind(this)} /> : null  
              }  
            </div>  
        );
    }
}

export default PopUp;