import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postElements = props.posts
        .map(p => <Post message = {p.message} likesCount = {p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updatePost(text);
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