import {connect} from "react-redux";
import Users from "./Users";
import {setCurrentPageAC, setTotalUserCountAC, setUsersAC, userFollowAC} from "../../store/actions/userActions";

const mapStateToProps = (state: any) => ({
    users: state.users.users,
    loading: state.users.loading,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage
})

const mapDispatchToProps = (dispatch: any) => ({
    setUsers: (currentPage: number, pageSize: number) => dispatch(setUsersAC(currentPage, pageSize)),
    userFollow: (id: number) => dispatch(userFollowAC(id)),
    setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
    setTotalUserCount: (totalUserCount: number) => dispatch(setTotalUserCountAC(totalUserCount))
})

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserContainer;