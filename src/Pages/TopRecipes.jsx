import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const TopRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const requests = Array.from({ length: 4 }, () =>
                    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
                );
                const responses = await Promise.all(requests);
                const meals = responses.map((res) => res.data.meals[0]);
                setRecipes(meals);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <section className="top-recipes">
            <div className="top-heading">
                <h2>Top Recipes</h2>
                <NavLink to="/recipes" className="view-more">
                    View More →
                </NavLink>
            </div>

            {loading ? (
                <p>Loading recipes...</p>
            ) : (
                <div className="recipe-grid">
                    {recipes.map((recipe) => (
                        <div className="recipe-card" key={recipe.idMeal}>
                            <div className="image-container">
                                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                                <span className="like-icon">❤️</span>
                            </div>
                            <div className="recipe-info">
                                <h3>{recipe.strMeal}</h3>
                                <p>{recipe.strInstructions?.slice(0, 100)}...</p>
                                <div className="rating">
                                    <span>⭐ 4.{Math.floor(Math.random() * 5 + 5)}</span>
                                    <span>({Math.floor(Math.random() * 200 + 50)} reviews)</span>
                                </div>
                                <NavLink to={`/recipe/${recipe.idMeal}`}>
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

export default TopRecipes;
