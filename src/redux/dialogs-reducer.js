const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

const dialogsReducer = (state,action) =>{
    switch (action.type) {
        case ADD_MESSAGE:
            let addMessage = {
                id: 5,
                message: state.newMessage
            };
            state.messages.push(addMessage)
            state.newMessage = "";
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.newMessage;
            return state;
        default:
            return state;
    }

}
export const addMessageActionCreator = () => ({type:ADD_MESSAGE})
export const onMessageChangeActionCreator = (text) => ({type:UPDATE_NEW_MESSAGE, newMessage: text})
export default dialogsReducer;