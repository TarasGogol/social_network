import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let newPostElement = React.createRef();
    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name = {d.name} id ={d.id}/>);

    let messagesElements = props.state.messages
        .map(m => <Message message = {m.message}/>)

    let addMessage = () =>{
        props.dispatch({type:"ADD-MESSAGE"})
    }
    let onMessageChange = () => {
        let text = newPostElement.current.value;
        let action = ({type : 'UPDATE-NEW-MESSAGE' , newText : text})
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
                    <textarea ref={newPostElement} onChange={onMessageChange} value={props.newText}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add post</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;