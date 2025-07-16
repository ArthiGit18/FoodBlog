import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault();

        if (!searchTerm.trim()) return;

        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
            const results = response.data.meals || [];

            // navigate to search results page with data (via state or query param)
            navigate(`/search?query=${searchTerm}`, { state: { results } });
        } catch (error) {
            console.error('Search error:', error);
        }

        setSearchTerm('');
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/assets/logo.png" alt="Epicure Logo" />
                <span>Epicure</span>
            </div>

            <form className="navbar-search-auth" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="btn">Search</button>
                <button type="button" className="btn">Signup</button>
                <button type="button" className="btn login">Login</button>
            </form>
        </nav>
    );
};

export default NavBar;
