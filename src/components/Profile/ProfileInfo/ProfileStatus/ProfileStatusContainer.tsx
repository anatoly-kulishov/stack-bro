import {connect} from "react-redux";
import ProfileStatus from "./ProfileStatus";
import {getStatus, updateStatus} from "../../../../store/actions/profileActions";
import {AppStateType} from "../../../../store/reducers/rootReducer";

const mapStateToProps = (state: AppStateType) => ({
    myProfileId: state.auth.userId,
    profile: state.profile.profile,
    status: state.profile.status,
})

// @ts-ignore
const HeaderContainer = connect(mapStateToProps, {getStatus, updateStatus})(ProfileStatus);

export default HeaderContainer;