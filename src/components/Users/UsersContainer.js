import React from "react";
import {connect} from "react-redux";
import {
    follow, getUser, setCurrentPage, toggleFollowingProgress, toggleIsFetching, unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUser(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUser(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingProgress = {this.props.toggleFollowingProgress}/>

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
// let mapDispatchToProps = (dispatch) =>{
//     return{
//         follow: (userId) =>{
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) =>{
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) =>{
//             dispatch(setUserAC(users))
//         },
//         setCurrentPage: (currentPage) =>{
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setUsersTotalCount: (totalCount) =>{
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) =>{
//             dispatch(toggleIsFetchingAC(isFetching))
//         },
//     }
// }

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFetching,
    toggleFollowingProgress,
    getUser
})(UsersContainer);