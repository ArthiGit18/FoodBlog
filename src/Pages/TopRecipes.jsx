import React from 'react';

const recipes = [
    {
        title: 'Creamy Mushroom Pasta',
        description: 'A rich and creamy mushroom pasta that’s quick to prepare and delicious to eat. Perfect for dinner nights.',
        image: '/assets/banner/1.jpg',
        rating: 4.5,
        reviews: 122,
    },
    {
        title: 'Avocado Smoothie',
        description: 'A healthy and refreshing smoothie made with ripe avocados and natural sweeteners. Great for summer!',
        image: '/assets/banner/2.jpg',
        rating: 4.8,
        reviews: 89,
    },
    {
        title: 'Classic Cheeseburger',
        description: 'Juicy beef patty, melted cheese, and fresh buns make this burger a timeless favorite.',
        image: '/assets/banner/3.jpg',
        rating: 4.7,
        reviews: 156,
    },
    {
        title: 'Spicy Tandoori Chicken',
        description: 'Marinated in yogurt and spices, this grilled tandoori chicken is bursting with flavor.',
        image: '/assets/banner/4.jpg',
        rating: 4.9,
        reviews: 210,
    },
];

const TopRecipes = () => {
    return (
        <section className="top-recipes">
            <div className="top-heading">
                <h2>Top Recipes</h2>
                <a href="/recipes" className="view-more">
                    View More →
                </a>
            </div>

            <div className="recipe-grid">
                {recipes.map((recipe, index) => (
                    <div className="recipe-card" key={index}>
                        <div className="image-container">
                            <img src={recipe.image} alt={recipe.title} />
                            <span className="like-icon">❤️</span>
                        </div>
                        <div className="recipe-info">
                            <h3>{recipe.title}</h3>
                            <p>{recipe.description}</p>
                            <div className="rating">
                                <span>⭐ {recipe.rating}</span>
                                <span>({recipe.reviews} reviews)</span>
                            </div>
                            <button>View</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopRecipes;
