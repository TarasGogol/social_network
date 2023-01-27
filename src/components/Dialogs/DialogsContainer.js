import React from 'react';
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let addMessage = () =>{
        props.store.dispatch(addMessageActionCreator())
    }
    let onMessageChange = (body) => {
        props.store.dispatch(onMessageChangeActionCreator(body));
    }

    return <Dialogs sendMessage={addMessage}
                    updateNewMessage={onMessageChange}
                    dialogsPage={state}/>
};

export default DialogsContainer;