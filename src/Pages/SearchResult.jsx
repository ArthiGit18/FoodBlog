import React from 'react';
import { useLocation, useSearchParams, NavLink } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const SearchResults = () => {
    const { state } = useLocation();
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    const results = state?.results || [];

    return (
        <>
            <NavBar />
            <div className="search-results">
                <h2 className="search-title">Search Results for "{query}"</h2>

                {results.length === 0 ? (
                    <p className="no-result">No recipes found.</p>
                ) : (
                    <div className="recipe-grid">
                        {results.map((item) => (
                            <NavLink
                                to={`/recipe/${item.idMeal}`}
                                className="recipe-card"
                                key={item.idMeal}
                            >
                                <img src={item.strMealThumb} alt={item.strMeal} />
                                <h3>{item.strMeal}</h3>

                            </NavLink>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default SearchResults;
