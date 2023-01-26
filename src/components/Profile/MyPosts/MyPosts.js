import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let postElements = props.posts
        .map(p => <Post message = {p.message} likesCount = {p.likesCount}/>)

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = (onPostChangeActionCreator(text))
        props.dispatch(action);
    }

    return (
        <div className={style.content}>
            <div>About</div>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                {postElements}
            </div>

        </div>
    );
};

export default MyPosts;