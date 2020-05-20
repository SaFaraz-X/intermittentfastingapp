import React from 'react';
import './Nav.css';

const Nav = props => {     // functional component- has no state, is controlling no part of the UI
    return (
        <div class="navbar">
        <a href="#About">About</a>
        <a href="#Timer">Timer</a>
        <a href="#History">History</a>
        </div>

    );

};

export default Nav;
