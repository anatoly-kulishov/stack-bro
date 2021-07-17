import {connect} from "react-redux";
import Users from "./Users";
import {
    setCurrentUserFollower,
    setUsers,
    userFollow,
    userUnfollow
} from "../../store/actions/usersActions/usersActions";
import {actions} from "../../store/actions/usersActions/usersActions";
import {
    getCurrentPage,
    getFollowingInProgress, getIsLoading,
    getPageSize,
    getTotalUsersCount,
    getUsers, getUsersFilter
} from "../../store/selectors/users-selectors";
import {AppStateType} from "../../store/reducers/rootReducer";

const mapStateToProps = (state: AppStateType) => ({
    users: getUsers(state),
    isLoading: getIsLoading(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    followingInProgress: getFollowingInProgress(state),
    filter: getUsersFilter(state)
})

const UserContainer = connect(mapStateToProps, {
    setUsers,
    setCurrentUserFollower,
    userFollow,
    userUnfollow,
    setCurrentPage: actions.setCurrentPage,
    setTotalUserCount: actions.setTotalUserCount,
})(Users);

export default UserContainer;
