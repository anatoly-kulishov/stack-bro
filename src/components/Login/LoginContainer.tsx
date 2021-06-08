import {connect} from "react-redux";
import Login from "./Login";
import {signIn} from "../../store/actions/authActions";

const UserContainer = connect(null, {signIn})(Login);

export default UserContainer;