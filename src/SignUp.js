import React from 'react';
import './SignUp.css';
import UserInfo from './Users.json';
//import User from './User.js';

//import Person from './Person'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myName: '',
            myGender: 'Male',
            myHeight: 0,
            myWeight: 0,
            myAge: 0,
            myPlan: 0
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
    }
 
    handleSubmit(event) {
        // let x = UserInfo.map((userInfo, index) =>{
        //     console.log(userInfo.age)
        //     return (
        //         userInfo.name
        //     )
        // })

        let x = UserInfo.map(x=> x.name = "Matt")

        alert(x)

        event.preventDefault();
    }

    render() {

        return(
            <div className = 'dim'>
            <div className='popup'>  
                <form onSubmit={this.handleSubmit}>
                        <h1>Sign Up!</h1>
                        <section className = "name">
                            <label>
                                Name: 
                                <input name = "myName" type="text" value = {this.state.myName} onChange = {this.handleInputChange} required />
                            </label>
                        </section>
                        <br />
                        <section className = "gender">
                            <label>
                                Gender: 
                            <select name = "myGender" value = {this.state.myGender} onChange = {this.handleInputChange} required>
                                <option value = "Male">Male</option>
                                <option value = "Female">Female</option>
                                </select>
                                </label>
                            </section>
                            <br />
                        <section className = "height">
                            <label>
                                Height (inches): 
                                <input type="number" name = "myHeight" value = {this.state.myHeight} onChange = {this.handleInputChange} required />
                            </label>
                        </section>
                        <br />
                        <section className = "weight">
                            <label>
                                Weight (pounds): 
                                <input type="number" name="myWeight" value = {this.state.myWeight} onChange = {this.handleInputChange} required />
                            </label>
                        </section>
                        <br />
                        <section className = "age">
                            <label>
                                Age (years): 
                                <input type="number" name="myAge" value = {this.state.myAge} onChange = {this.handleInputChange} required />
                            </label>
                        </section>
            
                        <br /><br />
                
                        <section className = "next">
                            <input type="submit" value="Submit" />
                        </section>
                    </form>

                    <button onClick={this.props.closePopup}>Cancel</button>  
            </div>
            </div>
         );
    }
}

export default SignUp;