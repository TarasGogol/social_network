import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name = {d.name} id ={d.id}/>);

    let messagesElements = props.state.messages
        .map(m => <Message message = {m.message}/>)

    return (
        <div className={style.dialog}>
            <div className={style.dialogItem}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;