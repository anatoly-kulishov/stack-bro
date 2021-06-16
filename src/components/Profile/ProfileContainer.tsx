import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {compose} from "redux";

const mapStateToProps = (state: any) => ({
    profile: state.profile.profile,
    isLoading: state.profile.isLoading,
})

const ProfileContainer = compose(
    withRouter,
    connect(mapStateToProps, null)
)(Profile);

export default ProfileContainer;