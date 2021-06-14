import {connect} from "react-redux";
import ProfileStatus from "./ProfileStatus";
import {getStatus, updateStatus} from "../../store/actions/profileActions";

const mapStateToProps = (state: any) => ({
    profile: state.profile.profile,
    status: state.profile.status,
})

const HeaderContainer = connect(mapStateToProps, {getStatus, updateStatus})(ProfileStatus);

export default HeaderContainer;