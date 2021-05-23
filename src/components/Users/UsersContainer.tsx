import {connect} from "react-redux";
import Users from "./Users";
import {setUsers, userFollow} from "../../store/actions/userActions";

const mapStateToProps = (state: any) => ({
    users: state.users.users,
    loading: state.users.loading,
})

const mapDispatchToProps = (dispatch: any) => ({
    setUsers: () => dispatch(setUsers()),
    userFollow: (id: number) => dispatch(userFollow(id)),
})

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserContainer;