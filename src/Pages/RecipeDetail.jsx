import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar'
import Footer from './Footer'
import Subscription from './Subscription'

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                setRecipe(res.data.meals[0]);
            } catch (error) {
                console.error('Error fetching recipe detail:', error);
            }
        };

        fetchRecipe();
    }, [id]);

    if (!recipe) return <p>Loading recipe...</p>;

    return (

        <>
            <NavBar />
            <div className="recipe-detail">
                <NavLink to="/" className="back-btn">← Back</NavLink>
                <h2 className="text-2xl font-bold mb-4">{recipe.strMeal}</h2>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full max-w-md rounded mb-4" />

                <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
                <table className="ingredients-table">
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 20 }, (_, i) => {
                            const ingredient = recipe[`strIngredient${i + 1}`];
                            const measure = recipe[`strMeasure${i + 1}`];
                            if (ingredient && ingredient.trim() !== "") {
                                return (
                                    <tr key={i}>
                                        <td>{ingredient}</td>
                                        <td>{measure || "-"}</td>
                                    </tr>
                                );
                            }
                            return null;
                        })}
                    </tbody>
                </table>
                <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
                <p className="mb-4">{recipe.strInstructions}</p>

                <h4 className="text-lg font-semibold mb-2">Category: {recipe.strCategory}</h4>
                <h4 className="text-lg font-semibold mb-2">Area: {recipe.strArea}</h4>

                {recipe.strYoutube && (
                    <div className="mt-4">
                        <h4 className="font-semibold">Watch:</h4>
                        <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                            {recipe.strYoutube}
                        </a>
                    </div>
                )}
            </div>
            <Subscription />
            <Footer />
        </>
    );
};

export default RecipeDetail;
