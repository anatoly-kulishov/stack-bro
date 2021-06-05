import {connect} from "react-redux";
import Header from "./Header";
import {authMe, logOut} from "../../store/actions/authActions";

const mapStateToProps = (state: any) => ({
    login: state.auth.login
})

const HeaderContainer = connect(mapStateToProps, {authMe, logOut})(Header);

export default HeaderContainer;