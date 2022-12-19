import React from 'react';
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <div className={style.item}>
            <NavLink className={navData => navData.isActive ? style.activeLink : style.item} to="/profile">Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={navData => navData.isActive ? style.activeLink : style.item} to="/dialogs">Message</NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={navData => navData.isActive ? style.activeLink : style.item} to="/stories">Stories</NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={navData => navData.isActive ? style.activeLink : style.item} to="/news"> News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={navData => navData.isActive ? style.activeLink : style.item} to="/settings">Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;