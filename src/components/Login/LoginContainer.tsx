import {connect} from "react-redux";
import Login from "./Login";
import {signIn} from "../../store/actions/authActions";

const mapStateToProps = (state: any) => ({
    isValidAuth: state.auth.isValid,
    errorText: state.auth.error,
    captchaUrl: state.auth.captchaUrl,
})

const UserContainer = connect(mapStateToProps, {signIn})(Login);

export default UserContainer;