import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {compose} from "redux";
import {savePhoto} from "../../store/actions/profileActions";

const mapStateToProps = (state: any) => ({
    myProfile: state.auth.myProfile,
    profile: state.profile.profile,
    isLoading: state.profile.isLoading,
})

const ProfileContainer = compose(
    withRouter,
    connect(mapStateToProps, {savePhoto})
)(Profile);

export default ProfileContainer;