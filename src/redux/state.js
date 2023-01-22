import {rerenderEntireTree} from "../render";


let state = {
    profilePage:{
        posts:[
            {id:1, message:'Hi, how are you?', likesCount: 12},
            {id:2, message:'It\'s my first post', likesCount: 16},
        ],
    },
    dialogsPage:{
        messages:[
            {id:1, message:'Hello'},
            {id:2, message:'How are you?'},
            {id:3, message:'Yo'},
            {id:4, message:'Yo'},
            {id:5, message:'Ya'},
        ],
        dialogs:[
            {id:1, name:'Taras'},
            {id:2, name:'Vasyl'},
            {id:3, name:'Viktor'},
            {id:4, name:'Vika'},
            {id:5, name:'Valera'},
            {id:6, name:'Dima'},
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost ={
        id:5,
        message: postMessage,
        likesCount:0
    };
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state);
}

export default state;