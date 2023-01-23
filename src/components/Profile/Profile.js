import React from 'react';
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPosts posts = {props.profilePage.posts}
                     profilePage = {props.profilePage}
                     addPost = {props.addPost}
                    updatePost = {props.updatePost}/>
        </div>
    );
};

export default Profile;