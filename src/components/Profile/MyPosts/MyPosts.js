import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={style.content}>
            <div>About</div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message = "What's on your mind?" like = "30"/>
                <Post message = "How are you?" like = "20"/>
            </div>

        </div>
    );
};

export default MyPosts;