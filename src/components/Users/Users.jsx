import React from "react";
import styles from "./user.module.css"
import axios from "axios";
import photoUser from "../../assets/avatar.png"

class Users extends React.Component{
    constructor(props) {
        super(props);
        alert("NEW")
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render(){
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : photoUser} className={styles.photoUser}/>
                    </div>
                     <div>
                    {u.followed
                        ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <div>{u.name}</div>
                    <div>{"u.email"}</div>
                    <div>{"u.location.city"},{"u.location.country"}</div>
                </span>
                </div>)
            }
        </div>
    }
}
export default Users;