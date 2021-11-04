/**
 *  External Imports
 */
import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import moment from "moment";

/**
 *  Internal Imports
 */

import { getCognitoIdToken } from "../../../../api/utilityMethods";
import {
    WS_ENDPOINT,
    WS_INSTANCE_TYPE,
    WS_MESSAGE_TYPE,
    CHAT_MESSAGES_TYPE_KEYS,
    DEFAULT_AVATAR,
    getChatsListData,
    getChatMessageData,
    getChatMessagesList,
} from "../WidgetChat.helper";

import { COMMUNITY_MESSAGES_CHAT_LIST_TIMER_MS } from "../../../../constants/timers";

/**
 * @function useWSChatCommunication
 *
 * @param {Socket | object} chatWS WS chat
 * @param {function(object[]):void} onInitChatWS Action init WS chat
 * @param {function(object[]):void} onCloseChatWS Action close WS chat
 * @param {function(object[]):void} onInitChatUsersList Action init chat users list
 * @param {function(object[]):void} onInitChatMsg Action init chat message history
 * @param {function(object[]):void} onAddRecipientChatMsg Action add new message recipient
 * @param {function(object[]):void} onAddSenderChatMsg Action send new message
 *
 * @return {
 * {chatActivityTime: string, chatRecipientImage: string, chatUserImage: string, 
 * chatListLoaded: boolean, requestChatHistory: function(number):void, 
 * sendChatMessage: function(string, number):void, readNewMessages: function(number):void}}
 */
function useWSChatCommunication(
    chatWS,
    onInitChatWS,
    onCloseChatWS,
    onInitChatUsersList,
    onInitChatMsg,
    onAddRecipientChatMsg,
    onAddSenderChatMsg
) {
    const [currUserID, setCurrUserID] = useState(null);
    const [chatActivityTime, setChatActivityTime] = useState("");
    const [chatUserImage, setChatUserImage] = useState(DEFAULT_AVATAR);
    const [chatRecipientImage, setChatRecipientImage] = useState(DEFAULT_AVATAR);
    const [chatListLoaded, setChatListLoaded] = useState(false);

    const initWSCommunication = async () => {
        const cognitoToken = await getCognitoIdToken();

        const wsChatObj = socketIOClient(WS_ENDPOINT, {
            transports: ["websocket"],
        });

        wsChatObj.on(WS_INSTANCE_TYPE.CONNECT, () =>
            wsChatObj.emit(WS_MESSAGE_TYPE.NEW_CONNECT, {
                token: `Bearer ${cognitoToken}`,
            })
        );

        wsChatObj.on(WS_INSTANCE_TYPE.MESSAGE, (msg) => {
            switch (msg.type) {
                case WS_MESSAGE_TYPE.CHAT_LIST: {
                    const chatsListData = getChatsListData(msg.data);

                    setCurrUserID(msg.user_id);
                    onInitChatUsersList(chatsListData);
                    if (!chatListLoaded) {
                        setChatListLoaded(true);
                    }
                    break;
                }

                case WS_MESSAGE_TYPE.HISTORY: {
                    const messages = getChatMessagesList(msg.data);
                    
                    setChatRecipientImage(msg.recipient_image);
                    setChatUserImage((currentState) => msg.user_image ? msg.user_image : currentState);
                    setChatActivityTime(
                        msg.last_activity
                            ? moment.unix(msg.last_activity).fromNow()
                            : ""
                    );
                    onInitChatMsg(messages);
                    break;
                }

                case WS_MESSAGE_TYPE.MESSAGE: {
                    const message = getChatMessageData(CHAT_MESSAGES_TYPE_KEYS.RECIPIENT)(msg.data);

                    onAddRecipientChatMsg(message);
                    break;
                }

                case WS_MESSAGE_TYPE.RETURN_MESSAGE: {
                    const message = getChatMessageData(CHAT_MESSAGES_TYPE_KEYS.SENDER)(msg.data);

                    onAddSenderChatMsg(message);
                    break;
                }

                default:
                    break;
            }
        });

        onInitChatWS(wsChatObj);
    };

    const requestChatHistory = (userID) => {
        chatWS.emit(WS_MESSAGE_TYPE.HISTORY, {
            user_id: currUserID,
            recipient_id: userID,
            time_zone: moment().utcOffset(),
        });
    };

    const sendChatMessage = (chatMsg, chatRecipientID) => {
        chatWS.emit(WS_MESSAGE_TYPE.MESSAGE, {
            user_id: currUserID,
            recipient_id: chatRecipientID,
            text: chatMsg,
        });
    };

    const readNewMessages = (chatRecipientID) => {
        setTimeout(() => {
            chatWS.emit(WS_MESSAGE_TYPE.READ_MESSAGE, {
                user_id: currUserID,
                recipient_id: chatRecipientID,
            });
        }, COMMUNITY_MESSAGES_CHAT_LIST_TIMER_MS);
    };

    useEffect(() => {
        initWSCommunication();

        return () => onCloseChatWS();
    }, []);

    return {
        chatListLoaded,
        chatActivityTime,
        chatRecipientImage,
        chatUserImage,
        requestChatHistory,
        sendChatMessage,
        readNewMessages
    };
}

export { useWSChatCommunication };
