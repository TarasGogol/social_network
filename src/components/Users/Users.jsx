import React from "react";
import styles from "./user.module.css"

let Users = (props) => {
    if(props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://images.pexels.com/photos/3378993/pexels-photo-3378993.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                fullName: 'Aliqa Macale',
                email: "support@gmail.com",
                followed: true,
                location: {city: "Ivano-Frankivsk", country: "Ukraine"}
            },
            {
                id: 2,
                photoUrl: "https://images.pexels.com/photos/3378993/pexels-photo-3378993.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                fullName: 'Taras Macale',
                email: "support@gmail.com",
                followed: false,
                location: {city: "Chernivtsi", country: "Ukraine"}
            },
            {
                id: 3,
                photoUrl: "https://images.pexels.com/photos/3378993/pexels-photo-3378993.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                fullName: 'Vasyl Macale',
                email: "support@gmail.com",
                followed: true,
                location: {city: "Ivano-Frankivsk", country: "Ukraine"}
            },
        ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.photoUser}/>
                    </div>
                     <div>
                    {u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follows(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.email}</div>
                    <div>{u.location.city},{u.location.country}</div>
                </span>
            </div>)
        }
    </div>
}
export default Users;