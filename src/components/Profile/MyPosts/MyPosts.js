import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.posts
        .map(p => <Post message = {p.message} likesCount = {p.likesCount}/>)

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        props.updatePost(text);
    }

    return (
        <div className={style.content}>
            <div>About</div>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText}></textarea>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div>
                {postElements}
            </div>

        </div>
    );
};

export default MyPosts;