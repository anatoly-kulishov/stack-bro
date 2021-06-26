import {connect} from "react-redux";
import ProfileDescription from "./ProfileDescription";

const mapStateToProps = (state: any) => ({
    profile: state.profile.profile
})

const ProfileDescriptionContainer = connect(mapStateToProps, null)(ProfileDescription);

export default ProfileDescriptionContainer;