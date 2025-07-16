import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import menuData from '../assets/Data.json'

const NavMenu = () => {
    const [openMenuIndex, setOpenMenuIndex] = useState(null);

    return (
        <div className="navmenu-container">
            <div className="navbar-links">
                {menuData.map((item, index) => (
                    <div
                        className="menu-item"
                        key={index}
                        onMouseEnter={() => setOpenMenuIndex(index)}
                        onMouseLeave={() => setOpenMenuIndex(null)}
                    >
                        <NavLink to={item.link}>{item.title}</NavLink>

                        {item.subItems && openMenuIndex === index && (
                            <div className="mega-menu">
                                {item.subItems.map((subItem, subIndex) => (
                                    <NavLink to={subItem.link} key={subIndex}>
                                        {subItem.title}
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NavMenu;
