import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (text) => {
        let action = (onPostChangeActionCreator(text))
        props.store.dispatch(action);
    }

    return <MyPosts updatePost={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
    />;
};

export default MyPostsContainer;