import {connect} from "react-redux";
import Header from "./Header";
import {logOut} from "../../store/actions/authActions";

const HeaderContainer = connect(null, {logOut})(Header);

export default HeaderContainer;