import {connect} from "react-redux";
import Users from "./Users";
import {userFollow} from "../../store/actions/userActions";

const mapStateToProps = (state: any) => ({
    users: state.users.users
})

const mapDispatchToProps = (dispatch: any) => ({
    userFollow: (id: number) => dispatch(userFollow(id)),
})

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserContainer;