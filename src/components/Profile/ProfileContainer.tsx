import {ComponentType} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {compose} from "redux";
import {savePhoto, saveProfile, updateProfile} from "../../store/actions/profileActions";
import {AppStateType} from "../../store/reducers/rootReducer";
import {authMe} from "../../store/actions/authActions";

const mapStateToProps = (state: AppStateType) => ({
    myProfile: state.auth.myProfile,
    profile: state.profile.profile,
    isLoading: state.profile.isLoading,
    errorText: state.profile.error
})

const ProfileContainer = compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {savePhoto, saveProfile, updateProfile, authMe})
)(Profile);

export default ProfileContainer;