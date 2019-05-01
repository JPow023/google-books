import React from 'react';
import './NavBar.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div id="nav-bar">
            <h1>Google Book Thing</h1>
            <Link to="/">Search Books</Link> | <Link to="/savedbooks">Saved Books</Link>
        </div>
    )
}

export default NavBar;