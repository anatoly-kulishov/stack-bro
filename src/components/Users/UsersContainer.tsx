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

const mapStateToProps = (state: any) => ({
    users: state.users.users,
    isLoading: state.users.isLoading,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    followingInProgress: state.users.followingInProgress
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