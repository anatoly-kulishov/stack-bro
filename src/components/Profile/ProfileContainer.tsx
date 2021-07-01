import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {compose} from "redux";
import {savePhoto, saveProfile} from "../../store/actions/profileActions";
import {AppStateType} from "../../store/reducers/rootReducer";

const mapStateToProps = (state: AppStateType) => ({
    myProfile: state.auth.myProfile,
    profile: state.profile.profile,
    isLoading: state.profile.isLoading,
    errorText: state.profile.error
})

const ProfileContainer = compose(
    withRouter,
    connect(mapStateToProps, {savePhoto, saveProfile})
)(Profile);

export default ProfileContainer;