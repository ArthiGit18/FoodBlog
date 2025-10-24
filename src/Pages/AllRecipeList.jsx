import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import SubscriptionSection from "./Subscription";
import Footer from "./Footer";

const AllRecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage] = useState(8);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // ✅ Hook for navigation

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                setLoading(true);
                const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
                setRecipes(response.data.categories);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    // Pagination logic
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
    const totalPages = Math.ceil(recipes.length / recipesPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // ✅ Handle card click and navigate
    const handleCardClick = (category) => {
        navigate(`/search?query=${encodeURIComponent(category)}`);
    };

    return (

        <>
            <NavBar />
            <div className="recipe-container">
                <h2 className="recipe-title">All Recipe Categories</h2>

                {loading ? (
                    <p className="loading-text">Loading recipes...</p>
                ) : (
                    <>
                        <div className="recipe-grid">
                            {currentRecipes.map((recipe) => (
                                <div
                                    key={recipe.idCategory}
                                    className="recipe-card"
                                    onClick={() => handleCardClick(recipe.strCategory)} // 👈 navigate on click
                                >
                                    <img
                                        src={recipe.strCategoryThumb}
                                        alt={recipe.strCategory}
                                        className="recipe-image"
                                    />
                                    <div className="recipe-content">
                                        <h3 className="recipe-name">{recipe.strCategory}</h3>
                                        <p className="recipe-description">
                                            {recipe.strCategoryDescription.slice(0, 100)}...
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="pagination">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`page-button ${currentPage === index + 1 ? "active" : ""}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
            <SubscriptionSection />
            <Footer />
        </>
    );
};

export default AllRecipeList;
