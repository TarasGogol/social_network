import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 16},
            ],
            newPostText: 'sociala-network'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Ya'},
            ],
            dialogs: [
                {id: 1, name: 'Taras'},
                {id: 2, name: 'Vasyl'},
                {id: 3, name: 'Viktor'},
                {id: 4, name: 'Vika'},
                {id: 5, name: 'Valera'},
                {id: 6, name: 'Dima'},
            ],
            newMessage:"Hello"
        },
        sideBar:{}
    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log("rerender")
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)

        this._callSubscriber(this._state);
    }
}

export default store;