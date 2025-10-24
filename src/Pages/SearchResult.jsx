import React, { useEffect, useState } from "react";
import { useSearchParams, NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage] = useState(8); // Items per page

    // Fetch recipes when query changes
    useEffect(() => {
        if (!query) return;

        const fetchResults = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(query)}`
                );
                setResults(response.data.meals || []);
            } catch (error) {
                console.error("Error fetching search results:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [query]);

    // Pagination logic
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = results.slice(indexOfFirstRecipe, indexOfLastRecipe);
    const totalPages = Math.ceil(results.length / recipesPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on page change
    };

    return (
        <>
            <NavBar />
            <div className="search-results">
                <h2 className="search-title">Search Results for "{query}"</h2>

                {loading ? (
                    <p className="loading-text">Loading recipes...</p>
                ) : results.length === 0 ? (
                    <p className="no-result">No recipes found.</p>
                ) : (
                    <>
                        <div className="recipe-grid">
                            {currentRecipes.map((item) => (
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

                        {/* Pagination */}
                        <div className="pagination">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`page-button ${currentPage === index + 1 ? "active" : ""
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};

export default SearchResults;
