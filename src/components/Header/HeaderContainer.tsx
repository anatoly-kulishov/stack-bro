import {connect} from "react-redux";
import Header from "./Header";
import {authMe} from "../../store/actions/authActions";

const mapStateToProps = (state: any) => ({
    login: state.auth.login
})

const HeaderContainer = connect(mapStateToProps, {authMe})(Header);

export default HeaderContainer;