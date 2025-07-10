import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/assets/logo.png" alt="Epicure Logo" />
                <span>Epicure</span>
            </div>
{/* 
            <div className="navbar-links">
                <a href="#home">Home</a>
                <a href="#recipe">Recipe</a>
                <a href="#recipe">Categories </a>
                <a href="#recipe">Top Recipes </a>
                <a href="#recipe">Smoothies  </a>
                <a href="#smoothy">Quick Bites</a>
                <a href="#fastfood">About </a>
                <a href="#fastfood">Contact</a>
            </div> */}

            <div className="navbar-search-auth">
                <input type="text" placeholder="Search..." />
                <button className="btn">Signup</button>
                <button className="btn login">Login</button>
            </div>
        </nav>
    );
};

export default NavBar;
