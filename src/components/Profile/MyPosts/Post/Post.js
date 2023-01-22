import React from 'react';
import style from './Post.module.css'


const Post = (props) => {
    return (
        <div className={style.item}>
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="logo"/>
            {props.message}
            <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>
    );
};

export default Post;