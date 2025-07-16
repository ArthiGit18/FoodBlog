// ListPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ListPage = () => {
    const { category } = useParams();
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
                setRecipes(response.data.meals || []);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };
        fetchRecipes();
    }, [category]);

    return (
        <div className="recipe-list-page">
            <h2 className="text-2xl font-bold mb-4 capitalize">{category} Recipes</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {recipes.length > 0 ? (
                    recipes.map((meal) => (
                        <div key={meal.idMeal} className="border rounded p-2 shadow">
                            <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded" />
                            <h4 className="mt-2 font-semibold">{meal.strMeal}</h4>
                        </div>
                    ))
                ) : (
                    <p>No recipes found for {category}</p>
                )}
            </div>
        </div>
    );
};

export default ListPage;
