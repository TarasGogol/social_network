import React from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={style.header}>
            <img src="https://media.istockphoto.com/id/1321507706/vector/letter-vf-outline-business-logo-design.jpg?s=612x612&w=0&k=20&c=lw4zjZuc7F6bYAeiruQ_IwhODElqnUt9g3jM7UUczsQ=" alt="description of image"/>

            <div className={style.loginBlock}>
                {props.isAuth ? props.login
                    :<NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;