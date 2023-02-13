import {usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 16},
    ],
    newPostText: 'sociala-network',
    profile:null
}
const profileReducer = (state = initialState,action) =>{
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newPost;
            return stateCopy;
        }
        case SET_USER_PROFILE:
        return {
            ...state,
            profile:action.profile
        }
        default:
            return state;
    }

}
export const addPostActionCreator = () => ({type:ADD_POST})
export const onPostChangeActionCreator = (text) => ({type:UPDATE_NEW_POST, newPost: text})
const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => {
    return (dispatch) =>{

        usersAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export default profileReducer;