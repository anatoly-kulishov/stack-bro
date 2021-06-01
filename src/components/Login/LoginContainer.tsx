import {connect} from "react-redux";
import Login from "./Login";
import {signIn} from "../../store/actions/authActions";

const mapStateToProps = (state: any) => ({})

const UserContainer = connect(mapStateToProps, {signIn})(Login);

export default UserContainer;