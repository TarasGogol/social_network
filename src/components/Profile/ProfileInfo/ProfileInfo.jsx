import React from 'react';
import style from '../Profile.module.css'


const ProfileInfo = () => {
    return (
        <div className={style.content}>
            <div>
                <img src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img forest"/>
            </div>
            <div>Ava + description</div>
        </div>
    );
};

export default ProfileInfo;