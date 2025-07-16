import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h3>Epicure Eats</h3>
                    <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                </div>

                <div className="footer-links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/recipes">Recipes</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
