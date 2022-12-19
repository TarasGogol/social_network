import React from 'react';
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <div className={style.item}>
            <NavLink to="/profile">Profile</NavLink>
            </div>
            <div>
                Message
            </div>
            <div>
                Stories
            </div>
            <div>
                News
            </div>
            <div>
                Settings
            </div>
        </nav>
    );
};

export default Navbar;