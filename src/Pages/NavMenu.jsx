import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import menuData from '../assets/Data.json';
import axios from 'axios';

const NavMenu = () => {
    const [openMenuIndex, setOpenMenuIndex] = useState(null);
    const [categories, setCategories] = useState([]);
    const [areas, setAreas] = useState([]);
    const [starters, setStarters] = useState([]);

    useEffect(() => {
        // Categories
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((res) => setCategories(res.data.categories || []));

        // Get all meals then extract areas
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then((res) => {
                const meals = res.data.meals || [];
                const uniqueAreas = Array.from(new Set(meals.map(m => m.strArea))).filter(Boolean);
                setAreas(uniqueAreas);
            });

        // Get all meals then extract only "Starter" category meals
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then((res) => {
                const meals = res.data.meals || [];
                const startersOnly = meals.filter(m => m.strCategory === 'Starter');
                setStarters(startersOnly);
            });
    }, []);

    return (
        <div className="navmenu-container">
            <div className="navbar-links">
                {menuData.map((item, index) => {
                    let dynamicSubItems = null;

                    if (item.title === 'Categories') {
                        dynamicSubItems = categories.map(cat => ({
                            title: cat.strCategory,
                            link: `/categoryFood/${cat.strCategory.toLowerCase()}`
                        }));
                    }

                    if (item.title === 'Top Recipes') {
                        dynamicSubItems = areas.map(area => ({
                            title: area,
                            link: `/category/${area.toLowerCase()}`
                        }));
                    }

                    if (item.title === 'Starter') {
                        dynamicSubItems = starters.map(starter => ({
                            title: starter.strMeal,
                            link: `/recipe/${starter.idMeal}`
                        }));
                    }

                    const subItems = dynamicSubItems || item.subItems;

                    return (
                        <div
                            className="menu-item"
                            key={index}
                            onMouseEnter={() => setOpenMenuIndex(index)}
                            onMouseLeave={() => setOpenMenuIndex(null)}
                        >
                            <NavLink to={item.link} className="main-link">
                                {item.title === 'Top Recipes' ? 'Areas' : item.title}
                            </NavLink>

                            {subItems && openMenuIndex === index && (
                                <div className="mega-menu">
                                    {subItems.map((subItem, subIndex) => (
                                        <NavLink to={subItem.link} key={subIndex}>
                                            {subItem.title}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default NavMenu;
