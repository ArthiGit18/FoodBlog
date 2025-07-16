import React from 'react';
import { useLocation, useSearchParams, NavLink } from 'react-router-dom';

const SearchResults = () => {
    const { state } = useLocation();
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    const results = state?.results || [];

    return (
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

                            <table className="ingredients-table">
                                <thead>
                                    <tr>
                                        <th>Ingredient</th>
                                        <th>Measure</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.from({ length: 20 }, (_, i) => {
                                        const ingredient = item[`strIngredient${i + 1}`];
                                        const measure = item[`strMeasure${i + 1}`];
                                        if (ingredient && ingredient.trim()) {
                                            return (
                                                <tr key={i}>
                                                    <td>{ingredient}</td>
                                                    <td>{measure || '-'}</td>
                                                </tr>
                                            );
                                        }
                                        return null;
                                    })}
                                </tbody>
                            </table>
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchResults;
