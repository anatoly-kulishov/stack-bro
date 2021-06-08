import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {setProfile} from "../../store/actions/profileActions";
import {compose} from "redux";

const mapStateToProps = (state: any) => ({
    profile: state.profile.profile,
    isLoading: state.profile.isLoading,
})

const ProfileContainer = compose(
    withRouter,
    connect(mapStateToProps, {setProfile})
)(Profile);

export default ProfileContainer;