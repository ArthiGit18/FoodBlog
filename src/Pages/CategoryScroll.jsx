// CategoryScroll.jsx or .tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
    { title: 'Chicken', image: '/assets/banner/1.jpg' },
    { title: 'Potato', image: '/assets/banner/2.jpg' },
    { title: 'Fish', image: '/assets/banner/3.jpg' },
    { title: 'Beef', image: '/assets/banner/4.jpg' },
    { title: 'Cheese', image: '/assets/banner/1.jpg' },
    { title: 'Chocolate', image: '/assets/banner/2.jpg' },
    { title: 'Pudding', image: '/assets/banner/3.jpg' },
    { title: 'Egg', image: '/assets/banner/4.jpg' },
    { title: 'Japanese ', image: '/assets/banner/1.jpg' },
    { title: 'French ', image: '/assets/banner/2.jpg' },
    { title: 'Lamb ', image: '/assets/banner/3.jpg' },
    { title: 'Pasta', image: '/assets/banner/4.jpg' },
    { title: 'Burgers', image: '/assets/banner/1.jpg' },
    { title: 'Pizzas', image: '/assets/banner/1.jpg' },
    { title: 'Mushroom', image: '/assets/banner/1.jpg' },
];

const CategoryScroll = () => {
    const navigate = useNavigate();

    const handleClick = (title) => {
        navigate(`/category/${title.toLowerCase()}`);
    };

    return (
        <section className="category-scroll">
            <div className="scroll-wrapper">
                <div className="scroll-track">
                    {categories.concat(categories).map((item, index) => (
                        <div className="scroll-card" key={index}>
                            <img src={item.image} alt={item.title} />
                            <div className="scroll-overlay">
                                <h3>{item.title}</h3>
                                <button onClick={() => handleClick(item.title)}>View</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryScroll;
