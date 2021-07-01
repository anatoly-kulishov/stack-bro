import {connect} from "react-redux";
import Login from "./Login";
import {signIn} from "../../store/actions/authActions";
import {AppStateType} from "../../store/reducers/rootReducer";

const mapStateToProps = (state: AppStateType) => ({
    isValidAuth: state.auth.isValid,
    errorText: state.auth.error,
    captchaUrl: state.auth.captchaUrl,
})

// @ts-ignore
const LoginContainer = connect(mapStateToProps, {signIn})(Login);

export default LoginContainer;