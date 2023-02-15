import React from 'react';
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";


const mapStateToProps = (state) =>{
    return{
        dialogsPage: state.dialogsPage,
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

export default compose(
    connect(mapStateToProps,mapStateToDispatch),
    withAuthRedirect
)
(Dialogs)