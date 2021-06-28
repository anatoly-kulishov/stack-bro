import {connect} from "react-redux";
import ProfileData from "./ProfileData";

const mapStateToProps = (state: any) => ({
    profile: state.profile.profile
})

const ProfileDataContainer = connect(mapStateToProps, null)(ProfileData);

export default ProfileDataContainer;