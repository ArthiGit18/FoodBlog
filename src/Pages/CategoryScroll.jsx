import React from 'react';

const categories = [
    { title: 'Chicken Recipe', image: '/assets/banner/1.jpg' },
    { title: 'Mutton', image: '/assets/banner/2.jpg' },
    { title: 'Greens', image: '/assets/banner/3.jpg' },
    { title: 'Pancakes', image: '/assets/banner/4.jpg' },
    { title: 'Soups', image: '/assets/banner/1.jpg' },
    { title: 'Pizza', image: '/assets/banner/2.jpg' },
    { title: 'Juice', image: '/assets/banner/3.jpg' },
    { title: 'Noodles', image: '/assets/banner/4.jpg' },
    { title: 'Fried Rice', image: '/assets/banner/1.jpg' },
    { title: 'Vegetable Rice', image: '/assets/banner/2.jpg' },
    { title: 'Meat', image: '/assets/banner/3.jpg' },
    { title: 'Burger', image: '/assets/banner/4.jpg' },
    { title: 'Waffle', image: '/assets/banner/1.jpg' },
];

const CategoryScroll = () => {
    return (
        <section className="category-scroll">
            <div className="scroll-wrapper">
                <div className="scroll-track">
                    {categories.concat(categories).map((item, index) => (
                        <div className="scroll-card" key={index}>
                            <img src={item.image} alt={item.title} />
                            <div className="scroll-overlay">
                                <h3>{item.title}</h3>
                                <button>View</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryScroll;
