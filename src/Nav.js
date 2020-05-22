import React from 'react';
import './Nav.css';

const Nav = props => {     // functional component- has no state, is controlling no part of the UI
    return (
        <div className="navbar">
        <a href="#About">About</a>
        <a href="#clock2">Timer</a>
        <a href="#Chart">History</a>
        </div>

    );

};

export default Nav;
