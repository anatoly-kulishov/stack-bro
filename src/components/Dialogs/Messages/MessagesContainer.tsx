import {connect} from "react-redux";
import Messages from "./Messages";
import {AppStateType} from "../../../store/reducers/rootReducer";

const mapStateToProps = (state: AppStateType) => ({
    messages: state.dialogs.messages
})

// @ts-ignore
const MessagesContainer = connect(mapStateToProps)(Messages);

export default MessagesContainer;