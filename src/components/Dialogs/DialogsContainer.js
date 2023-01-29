import React from 'react';
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) =>{
    return{
        dialogsPage: state
    }
}
const mapStateToDispatch = (dispatch) =>{
    return{
        sendMessage:() =>{
            dispatch(addMessageActionCreator())
        },
        updateNewMessage:(body) =>{
            dispatch(onMessageChangeActionCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapStateToDispatch)(Dialogs);

export default DialogsContainer;