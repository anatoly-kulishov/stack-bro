import {ComponentType} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {compose} from "redux";
import {savePhoto, saveProfile, updateProfile} from "../../store/actions/profileActions";
import {AppStateType} from "../../store/reducers/rootReducer";
import {authMe} from "../../store/actions/authActions";
import {setCurrentUserFollower, userFollow, userUnfollow} from "../../store/actions/usersActions";

const mapStateToProps = (state: AppStateType) => ({
    myProfile: state.auth.myProfile,
    profile: state.profile.profile,
    isLoading: state.profile.isLoading,
    errorText: state.profile.error,
    followStatus: state.profile.followStatus,
    isOwner: state.profile.isOwner
})

const ProfileContainer = compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {
        savePhoto,
        saveProfile,
        updateProfile,
        authMe,
        userFollow,
        userUnfollow,
        setCurrentUserFollower
    })
)(Profile);

export default ProfileContainer;