import {connect} from "react-redux";
import Users from "./Users";
import {setCurrentPage, setTotalUserCount, setUsers, userFollow} from "../../store/actions/userActions";

const mapStateToProps = (state: any) => ({
    users: state.users.users,
    isLoading: state.users.isLoading,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage
})

const UserContainer = connect(mapStateToProps, {setUsers, userFollow, setCurrentPage, setTotalUserCount})(Users);

export default UserContainer;