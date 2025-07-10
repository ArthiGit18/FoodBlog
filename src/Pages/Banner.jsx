import React, { useEffect, useState } from 'react';
import DishBar from './DishBar';

const banners = [
    {
        image: '/assets/banner/1.jpg',
        heading: 'Savor the Flavors of the World',
        description: 'Join us on a journey through cuisines from every corner of the globe.',
        button: 'Explore Recipes',
    },
    {
        image: '/assets/banner/2.jpg',
        heading: 'Homemade Goodness',
        description: 'Wholesome meals made with love and simple ingredients.',
        button: 'Start Cooking',
    },
    {
        image: '/assets/banner/3.jpg',
        heading: 'Street Food Diaries',
        description: 'Taste the vibrance of local eats and authentic flavors.',
        button: 'Discover Street Food',
    },
    {
        image: '/assets/banner/4.jpg',
        heading: 'Epicure Exclusives',
        description: 'Dive into our curated collection of gourmet dishes and fine dining.',
        button: 'See Gourmet Picks',
    },
];

const Banner = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const { image, heading, description, button } = banners[index];

    return (
        <div
            className="banner"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="banner-overlay">
                <div className="banner-content">
                    <h1>{heading}</h1>
                    <p>{description}</p>
                    <button>{button}</button>
                </div>
            </div>

            {/* DishBar at bottom of banner */}
            <div className="banner-dishbar">
                <DishBar />
            </div>
        </div>
    );
};

export default Banner;
