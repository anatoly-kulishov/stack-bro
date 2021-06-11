import {connect} from "react-redux";
import NavBar from "./NavBar";

const mapStateToProps = (state: any) => ({
    profile: state.profile.profile
})

const NavBarContainer = connect(mapStateToProps, null)(NavBar);

export default NavBarContainer;