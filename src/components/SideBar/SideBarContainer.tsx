import {connect} from "react-redux";
import SideBar from "./SideBar";

const mapStateToProps = (state: any) => ({
    profile: state.profile.profile
})

const SideBarContainer = connect(mapStateToProps, null)(SideBar);

export default SideBarContainer;