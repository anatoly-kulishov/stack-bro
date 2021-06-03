import {connect} from "react-redux";
import Users from "./Users";
import {
    getCurrentUserFollower,
    setCurrentPage,
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
    currentPage: state.users.currentPage
})

const UserContainer = connect(mapStateToProps, {setUsers, getCurrentUserFollower, userFollow, userUnfollow, setCurrentPage, setTotalUserCount})(Users);

export default UserContainer;