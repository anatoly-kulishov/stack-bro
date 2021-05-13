import {connect} from "react-redux";
import DialogsList from "./DialogsList";

const mapStateToProps = (state: any) => ({
    dialogs: state.dialogs.dialogs
})

const DialogsListContainer = connect(mapStateToProps)(DialogsList);

export default DialogsListContainer;