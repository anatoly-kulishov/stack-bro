import {connect} from "react-redux";
import AppNavigation from "./AppNavigation";
import {authMe} from "../../store/actions/authActions";
import {setProfile} from "../../store/actions/profileActions";

const ProfileContainer = connect(null, {authMe, setProfile})(AppNavigation);

export default ProfileContainer;