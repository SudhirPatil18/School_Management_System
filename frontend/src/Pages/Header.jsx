// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css'; // Importing CSS file

const Header = () => {
    return (
        <header className="header1">
            <div className="container1">
                <h1>School Management System</h1>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login" className="btn btn-signin">Sign In</Link></li>
                        <li><Link to="/register" className="btn btn-signup">Sign Up</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
