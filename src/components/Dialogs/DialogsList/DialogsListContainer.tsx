import {connect} from "react-redux";
import DialogsList from "./DialogsList";
import {AppStateType} from "../../../store/reducers/rootReducer";

const mapStateToProps = (state: AppStateType) => ({
    dialogs: state.dialogs.dialogs
})

const DialogsListContainer = connect(mapStateToProps)(DialogsList);

export default DialogsListContainer;