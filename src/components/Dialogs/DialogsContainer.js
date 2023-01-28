import React from 'react';
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {
    return <StoreContext.Consumer>
    {(store) =>
    {
        let state = store.getState().dialogsPage;

        let addMessage = () => {
            store.dispatch(addMessageActionCreator())
        }
        let onMessageChange = (body) => {
           store.dispatch(onMessageChangeActionCreator(body));
        }

        return <Dialogs sendMessage={addMessage}
                        updateNewMessage={onMessageChange}
                        dialogsPage={state}/>
        }
    }
    </StoreContext.Consumer>
};

export default DialogsContainer;