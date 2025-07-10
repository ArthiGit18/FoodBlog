import React, { useEffect, useState } from 'react';

const dishes = [
    {
        title: 'Spicy Curry',
        imageSet: [
            '/assets/banner/1.jpg',
            '/assets/banner/2.jpg',
            '/assets/banner/3.jpg',
            '/assets/banner/4.jpg',
        ],
    },
    {
        title: 'Fruit Smoothy',
        imageSet: [
            '/assets/banner/2.jpg',
            '/assets/banner/3.jpg',
            '/assets/banner/4.jpg',
            '/assets/banner/1.jpg',
        ],
    },
    {
        title: 'Cheesy Burger',
        imageSet: [
            '/assets/banner/3.jpg',
            '/assets/banner/4.jpg',
            '/assets/banner/1.jpg',
            '/assets/banner/2.jpg',
        ],
    },
];

const DishBar = () => {
    const [indexes, setIndexes] = useState([0, 0, 0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndexes((prev) =>
                prev.map((val, i) => (val + 1) % dishes[i].imageSet.length)
            );
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="dishbar-container">
            {dishes.map((dish, i) => (
                <div className="dishbox blinking" key={i}>
                    <img src={dish.imageSet[indexes[i]]} alt={`dish-${i}`} />
                    <div className="dishbox-title">{dish.title}</div>
                </div>
            ))}
        </div>
    );
};

export default DishBar;
