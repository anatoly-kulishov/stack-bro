import {connect} from "react-redux";
import Messages from "./Messages";

const mapStateToProps = (state: any) => ({
    messages: state.dialogs.messages
})

const MessagesContainer = connect(mapStateToProps)(Messages);

export default MessagesContainer;