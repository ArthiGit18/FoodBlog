import React from 'react';

const latestRecipes = [
    { title: 'Grilled Sandwich', image: '/assets/banner/1.jpg' },
    { title: 'Egg Fried Rice', image: '/assets/banner/2.jpg' },
    { title: 'Veg Soup', image: '/assets/banner/3.jpg' },
    { title: 'Banana Waffle', image: '/assets/banner/4.jpg' },
    { title: 'Mutton Curry', image: '/assets/banner/1.jpg' },
    { title: 'Spinach Salad', image: '/assets/banner/2.jpg' },
];

const LatestRecipes = () => {
    return (
        <section className="latest-recipes">
            <h2>Latest Recipes</h2>
            <div className="recipe-grid">
                {latestRecipes.map((item, index) => (
                    <div className="recipe-card" key={index}>
                        <img src={item.image} alt={item.title} />
                        <div className="overlay">
                            <h3>{item.title}</h3>
                            <button>View</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LatestRecipes;
