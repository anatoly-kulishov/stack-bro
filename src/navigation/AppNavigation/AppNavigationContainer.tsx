import {connect} from "react-redux";
import AppNavigation from "./AppNavigation";
import {authMe} from "../../store/actions/authActions";

const ProfileContainer = connect(null, {authMe})(AppNavigation);

export default ProfileContainer;