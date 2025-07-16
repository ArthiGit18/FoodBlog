import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DishBar = () => {
    const [dishGroups, setDishGroups] = useState([[], [], []]); // 3 boxes
    const [indexes, setIndexes] = useState([0, 0, 0]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const [res1, res2, res3] = await Promise.all([
                    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken'),
                    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert'),
                    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'),
                ]);

                // Get first 3 from each
                setDishGroups([
                    res1.data.meals.slice(0, 3),
                    res2.data.meals.slice(0, 3),
                    res3.data.meals.slice(0, 3),
                ]);
            } catch (error) {
                console.error('Failed to fetch dishes:', error);
            }
        };

        fetchDishes();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndexes((prev) =>
                prev.map((val, i) =>
                    dishGroups[i].length ? (val + 1) % dishGroups[i].length : 0
                )
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [dishGroups]);

    const handleClick = (mealId) => {
        navigate(`/recipe/${mealId}`);
    };

    const titles = ['Chicken', 'Dessert', 'Seafood'];

    return (
        <div className="dishbar-container">
            {dishGroups.map((group, i) => {
                const current = group[indexes[i]];
                return (
                    <div
                        className="dishbox"
                        key={i}
                        onClick={() => current && handleClick(current.idMeal)}
                        style={{ cursor: 'pointer' }}
                    >
                        {current && (
                            <>
                                <img src={current.strMealThumb} alt={current.strMeal} />
                                <div className="dishbox-title">
                                    <strong>{titles[i]}</strong>
                                    <p>{current.strMeal}</p>
                                </div>
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default DishBar;
