import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    let newPostElement = React.createRef();
    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name = {d.name} id ={d.id}/>);

    let messagesElements = props.state.messages
        .map(m => <Message message = {m.message}/>)

    let addMessage = () =>{
        props.dispatch(addMessageActionCreator())
    }
    let onMessageChange = () => {
        let text = newPostElement.current.value;
        let action = (onMessageChangeActionCreator(text))
        props.dispatch(action);
    }

    return (
        <div className={style.dialog}>
            <div className={style.dialogItem}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newPostElement} onChange={onMessageChange} value={props.newText}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add post</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;