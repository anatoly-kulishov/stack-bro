import {connect} from "react-redux";
import App from "./App";
import {authMe} from "../../store/actions/authActions";

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    isLoading: state.auth.isLoading
})

const AppContainer = connect(mapStateToProps, {authMe})(App);

export default AppContainer;