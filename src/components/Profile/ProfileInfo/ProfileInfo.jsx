import React from 'react';
import style from '../Profile.module.css'
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={style.content}>
            <div>
                <img src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img forest"/>
            </div>
            <div className={style.ava}>
                <img src={props.profile.photos.large}/>{props.profile.aboutMe}</div>
        </div>
    );
};

export default ProfileInfo;