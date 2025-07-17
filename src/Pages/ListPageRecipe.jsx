// ListPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';
import Footer from './Footer';

const ListPageRecipe = () => {
    const { category } = useParams(); // 'category' holds the area name (e.g., "Canadian")
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                // Fetch recipes by area instead of category
                const response = await axios.get(
                    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
                );
                setRecipes(response.data.meals || []);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };
        fetchRecipes();
    }, [category]);

    return (
        <>
            <NavBar />
            <div className="recipe-list-page px-4 py-6">
                <h2 className="text-2xl font-bold mb-6 capitalize text-center">{category} Recipes</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {recipes.length > 0 ? (
                        recipes.map((meal) => (
                            <NavLink
                                to={`/recipe/${meal.idMeal}`}
                                key={meal.idMeal}
                                className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition duration-300"
                            >
                                <img
                                    src={meal.strMealThumb}
                                    alt={meal.strMeal}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h4 className="text-lg font-semibold text-gray-800">{meal.strMeal}</h4>
                                </div>
                            </NavLink>
                        ))
                    ) : (
                        <p className="text-center col-span-full">No recipes found for {category}</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ListPageRecipe;
