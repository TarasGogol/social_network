import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return <div className={style.dialog + ' ' + style.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={style.message}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={style.dialog}>
            <div className={style.dialogItem}>
                <DialogItem name = "Taras" id = "1"/>
                <DialogItem name = "Viktor" id = "2"/>
                <DialogItem name = "Vika" id = "3"/>
                <DialogItem name = "Vasyl" id = "4"/>
                <DialogItem name = "Oleh" id = "5"/>
            </div>
            <div className={style.messages}>
                <Message message = "Hello"/>
                <Message message = "How are you"/>
                <Message message = "Where are you from"/>
            </div>
        </div>
    );
};

export default Dialogs;