import React from 'react';
import "./Nav.css";

const Nav = props => {     // functional component- has no state, is controlling no part of the UI
    return (
        <div class="navbar">
        <a href="#History">History</a>
        <a href="#User">User</a>
        <a href="#Timer">Timer</a>

        </div>

    );

};

export default Nav;