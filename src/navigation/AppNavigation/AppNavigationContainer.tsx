import {connect} from "react-redux";
import AppNavigation from "./AppNavigation";
import {setProfile} from "../../store/actions/profileActions";

const ProfileContainer = connect(null, {setProfile})(AppNavigation);

export default ProfileContainer;