import React from 'react';
import './SignUp.css';
//import Person from './Person'


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myName: '',
            myGender: 'Male',
            myHeight: null,
            myWeight: null,
            myAge: null,
            myPlan: null
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
        //alert(this.state.myAge);
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
                            <label for='myHeight'>
                                Height (inches): 
                                <input type="number" name = "myHeight" value = {this.state.myHeight} onChange = {this.handleInputChange} required />
                            </label>
                        </section>
                        <br />
                        <section className = "weight">
                            <label for='myWeight'>
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
                
                        <section class = "next">
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