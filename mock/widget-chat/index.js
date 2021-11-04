/**
 *  External Imports
 */
import {connect} from "react-redux";

/**
 *  Internal Imports
 */
import {
	addRecipientMessagesChatMsgAction,
	addSenderMessagesChatMsgAction,
	closeMessagesChatWSAction,
	initMessagesChatMsgAction,
	initMessagesChatRecipientIDAction,
	initMessagesChatUsersListAction,
	initMessagesChatWSAction,
	resetMessagesChatMsgAction,
} from "../../../../redux/actions/communityActions";

import WidgetChat from "./WidgetChat";

/**
 *  Functions
 */
const mapStateToProps = ({community: {chatWS, chatUsersList, chatRecipientID, chatActiveMessages, chatUserListBubbles, chatUserListLastMessages}}) => ({
	chatWS,
	chatUsersList,
	chatRecipientID,
	chatActiveMessages,
	chatUserListBubbles,
	chatUserListLastMessages
});

const mapDispatchToProps = (dispatch) => ({
	onInitChatWS: (ws) => dispatch(initMessagesChatWSAction(ws)),
	onCloseChatWS: () => dispatch(closeMessagesChatWSAction()),
	
	onInitChatUsersList: (usersList) => dispatch(initMessagesChatUsersListAction(usersList)),
	
	onInitChatRecipientID: (id) => dispatch(initMessagesChatRecipientIDAction(id)),
	
	onInitChatMsg: (messages) => dispatch(initMessagesChatMsgAction(messages)),
	onAddRecipientChatMsg: (message) => dispatch(addRecipientMessagesChatMsgAction(message)),
	onAddSenderChatMsg: (message) => dispatch(addSenderMessagesChatMsgAction(message)),
	onResetChatMsg: () => dispatch(resetMessagesChatMsgAction()),
});

/**
 *  Exports
 */
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(WidgetChat);
