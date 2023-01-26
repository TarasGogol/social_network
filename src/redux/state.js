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
        if(action.type === "ADD-POST"){
            let newPost ={
                id:5,
                message: this._state.profilePage.newPostText,
                likesCount:0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText= "";
            this._callSubscriber(this._state);
        }else if(action.type === "UPDATE-NEW-POST"){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }else if(action.type === "ADD-MESSAGE"){
            let addMessage ={
                id:5,
                message: this._state.dialogsPage.newMessage
            };
            this._state.dialogsPage.messages.push(addMessage)
            this._state.dialogsPage.newMessage= "";
            this._callSubscriber(this._state);
        }else if(action.type === "UPDATE-NEW-MESSAGE"){
            this._state.dialogsPage.messages = action.newText;
            this._callSubscriber(this._state);
        }
    }
}


export default store;