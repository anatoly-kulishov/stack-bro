import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {setProfile} from "../../store/actions/profileActions";

const mapStateToProps = (state: any) => ({
    profile: state.profile.profile,
    isLoading: state.profile.isLoading,
})

const ProfileContainer = connect(mapStateToProps, {setProfile})(withRouter(Profile));

export default ProfileContainer;