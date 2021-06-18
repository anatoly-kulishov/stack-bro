import {connect} from "react-redux";
import Users from "./Users";
import {
    setCurrentPage,
    setCurrentUserFollower,
    setTotalUserCount,
    setUsers,
    userFollow,
    userUnfollow
} from "../../store/actions/usersActions";
import {
    getCurrentPage,
    getFollowingInProgress, getIsLoading,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../store/selectors/users-selectors";

// const mapStateToProps = (state: any) => ({
//     users: state.users.users,
//     isLoading: state.users.isLoading,
//     pageSize: state.users.pageSize,
//     totalUsersCount: state.users.totalUsersCount,
//     currentPage: state.users.currentPage,
//     followingInProgress: state.users.followingInProgress
// })

const mapStateToProps = (state: any) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    followingInProgress: getFollowingInProgress(state),
    isLoading: getIsLoading(state)
})

const UserContainer = connect(mapStateToProps, {
    setUsers,
    setCurrentUserFollower,
    userFollow,
    userUnfollow,
    setCurrentPage,
    setTotalUserCount,
})(Users);

export default UserContainer;