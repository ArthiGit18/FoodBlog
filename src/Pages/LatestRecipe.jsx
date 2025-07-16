import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const LatestRecipes = () => {
    const [latestRecipes, setLatestRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLatest = async () => {
            try {
                // fallback to category if latest doesn't work
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/latest.php');
                const meals = response.data?.meals;

                if (Array.isArray(meals) && meals.length > 0) {
                    setLatestRecipes(meals.slice(0, 6));
                } else {
                    // fallback to seafood category
                    const fallback = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
                    setLatestRecipes(fallback.data.meals.slice(0, 6));
                }
            } catch (error) {
                console.error('API fetch error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLatest();
    }, []);

    return (
        <section className="latest-recipes">
            <h2>Latest Recipes</h2>
            {loading ? (
                <p>Loading latest recipes...</p>
            ) : latestRecipes.length === 0 ? (
                <p>No recipes found.</p>
            ) : (
                <div className="recipe-grid">
                    {latestRecipes.map((item) => (
                        <div className="recipe-card" key={item.idMeal}>
                            <img src={item.strMealThumb} alt={item.strMeal} />
                            <div className="overlay">
                                <h3>{item.strMeal}</h3>
                                <NavLink to={`/recipe/${item.idMeal}`}>
                                    <button>View</button>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default LatestRecipes;
