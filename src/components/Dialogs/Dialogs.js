import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let newPostElement = React.createRef();

    let dialogsElements = state.dialogs.map(d => <DialogItem name = {d.name} id ={d.id}/>);

    let messagesElements = state.messages.map(m => <Message message = {m.message}/>)

    let addMessage = () =>{
        props.sendMessage();
    }
    let onMessageChange = () => {
        let body = newPostElement.current.value;
        props.updateNewMessage(body);
    }

    return (
        <div className={style.dialog}>
            <div className={style.dialogItem}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newPostElement} onChange={onMessageChange} value={state.newMessage}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add post</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;