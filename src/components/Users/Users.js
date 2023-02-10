import React from "react";
import styles from "./user.module.css";
import photoUser from "../../assets/avatar.png";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL)

    return <div>
        <div>
            {slicedPages.map(p => {
                return <span className={props.currentPage === p && styles.selectedUser}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <NavLink to={"/profile/" + u.id}>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : photoUser} className={styles.photoUser}/>
                    </div>
                        </NavLink>
                     <div>
                    {u.followed
                        ? <button onClick={() => {
                            usersAPI.unfollow(u.id)
                                .then(data => {
                                    if(data.resultCode === 0){
                                        props.unfollow(u.id)
                                    }
                                })

                        }}>Unfollow</button>

                        : <button onClick={() => {
                            usersAPI.follow(u.id)
                                .then(data => {
                                    if(data.resultCode === 0){
                                        props.follow(u.id)
                                    }
                                })
                            }}>Follow</button>}
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
export default Users;