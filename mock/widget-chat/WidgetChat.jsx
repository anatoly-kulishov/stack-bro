/**
 *  External Imports
 */
import {
    arrayOf,
    bool,
    func,
    number,
    object,
    oneOfType,
    shape,
    string,
    instanceOf,
} from "prop-types";

import React, { useEffect, useMemo, useState } from "react";

import {useDispatch, useSelector} from 'react-redux'

import { useLocation } from "@reach/router";

/**
 *  Internal Imports
 */

import { useWSChatCommunication } from "./useWSChatCommunication";

import { useUserListFilter } from "../../../../utils/hooks";
import CommunityInlineSearch from "../../../controls/community-inline-search";

import WidgetChatsList from "../widget-chats-list";
import WidgetChatMessages from "../widget-chat-messages";
import WidgetChatMessageInput from "../widget-chat-message-input";
import CustomLoader from "../../../commons/custom-loader";
import CommunityEmptyState from "../../../controls/community-empty-state";

import {communityAPI} from "../../../../api/community-api";
import { getFileFormData, downloadFile } from "../../../../utils/file-download.helper";

import { setOpenedNotification } from '../../../../redux/actions/topNavBarActions';

import styles from "./index.module.css";

/**
 *  Component
 *
 *  @param props
 *
 *  @return {JSX.Element}
 *
 */
const WidgetChat = (props) => {
    // Variables - Common
    const {
        chatWS,
        chatUsersList,
        chatRecipientID,
        chatActiveMessages,
        chatUserListBubbles,
        chatUserListLastMessages,
    } = props;

    // Open and close WS chat
    const { onInitChatWS, onCloseChatWS } = props;
    // Init chat user list
    const { onInitChatUsersList } = props;
    // Receive new message chat
    const { onInitChatRecipientID } = props;
    // Chat messages handling
    const {
        onInitChatMsg,
        onAddRecipientChatMsg,
        onAddSenderChatMsg,
        onResetChatMsg,
    } = props;

    const location = useLocation();
    const dispatch = useDispatch()

    const activeUserChat = useMemo(() => {
        const userChatId = location.state ? location.state.userChatId : null;
        return chatUsersList.find((user) => user.userID === userChatId) || {};
    }, [chatUsersList]);

    // Variables - List Area
    const [searchTerm, setSearchTerm] = useState("");
    const [chatsList, setChatsList] = useState([]);

    // Variables - Message Area

    const [isActiveMsgArea, setIsActiveMsgArea] = useState(false);
    const [recipientName, setRecipientName] = useState("");
    const [recipientId, setRecipientId] = useState(null);
    const [chatMsg, setChatMsg] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [isChatLoading, setIsChatLoading]  = useState(false)

    const [iconLoading, setIconLoading] = useState()

    const {
        chatActivityTime,
        chatUserImage,
        chatRecipientImage,
        chatListLoaded,
        requestChatHistory,
        sendChatMessage,
        readNewMessages,
    } = useWSChatCommunication(
        chatWS,
        onInitChatWS,
        onCloseChatWS,
        onInitChatUsersList,
        onInitChatMsg,
        onAddRecipientChatMsg,
        onAddSenderChatMsg
    );

    const { filteredUserList } = useUserListFilter(searchTerm, chatUsersList);

    // Event Functions
    const onSearchChange = (value) => setSearchTerm(value);
    const onMessageChange = (event) => setChatMsg(event.target.value);

    const onChatItemClick = (userID, userName) => () => {
        setIsChatLoading(true)
        setIconLoading(true)
        onInitChatRecipientID(userID);
        setRecipientName(userName);
        onResetChatMsg();
        requestChatHistory(userID);
        setIsActiveMsgArea(true);
        setRecipientId(userID);
    };

    const onMessageSend = (isOnKeySend = false) => async (event) => {
        if ((!selectedFile && !chatMsg) || (isOnKeySend && event.key !== "Enter")) {
            return;
        }

        if (selectedFile) {
            const file = getFileFormData(selectedFile);
            await communityAPI.uploadMessageFile(chatRecipientID, file);
            setSelectedFile(null)
        }

        if(chatMsg.length > 0) {
            sendChatMessage(chatMsg, chatRecipientID);
            setChatMsg("");
        }
    };

    const onFileUploaded = (file) => {
        setSelectedFile(file);
    };

    const onFileDownload = async (messageId) => {
        const { file, fileTitle, fileType, error } = await communityAPI.downloadMessageFile(messageId);
        if (!error) {
            downloadFile(file, fileTitle, fileType);
        };
    };
    
    const name = useSelector(state => state?.topNavBar?.name)
    
    // Life Cycles
    
    useEffect(() => {
        if(Object.keys(chatWS).length !== 0 && chatsList.length !== 0 && !recipientName && name){
            const userObjectOnNotif = chatsList.filter(item => item.name === name)[0]
            onChatItemClick(userObjectOnNotif?.userID, userObjectOnNotif?.name)()
            dispatch(setOpenedNotification(null))
        }
    }, [name, chatsList])

    useEffect(() => {
        // Checking an exception
        if (!filteredUserList.length) {
            setChatsList([]);
            return;
        }

        // Changing an active flag
        for (let i = 0, chatItem; i < filteredUserList.length; i++) {
            chatItem = filteredUserList[i];

            filteredUserList[i].isActive = chatItem.userID === chatRecipientID;
        }

        // Set chats list data
        setChatsList(filteredUserList);
    }, [filteredUserList, chatRecipientID]);

    useEffect(() => {
        // Checking an exception
        if (!activeUserChat.userID) {
            return;
        }
        onChatItemClick(activeUserChat.userID, activeUserChat.name)();
    }, [activeUserChat.userID, activeUserChat.name]);

    useEffect(() => {
        const chatUnreadBubbles = chatUserListBubbles.get(recipientId) || 0;
        if (!chatActiveMessages.length || !chatUnreadBubbles) {
            return;
        }

        readNewMessages(recipientId);
    }, [chatActiveMessages, recipientId, chatUserListBubbles]);

    // Return
    return (
        <div className={styles.widgetChat}>
            <div className={styles.widgetChatList}>
                <CommunityInlineSearch
                    data-testid="searchInput"
                    inputPlaceholder={"Search Connections"}
                    handleUserInput={(value) => onSearchChange(value)}
                />
                {chatListLoaded ? (
                    chatsList && chatsList.length ? (
                        <WidgetChatsList
                            data-testid="widgetChatsList" 
                            chatList={chatsList}
                            onChatItemClick={onChatItemClick}
                            chatUserListBubbles={chatUserListBubbles}
                            chatUserListLastMessages={chatUserListLastMessages}
                        />
                    ) : (
                        <CommunityEmptyState text={"chats"} />
                    )
                ) : (
                    <div className={styles.widgetChatListLouder} data-testid="chatLoader">
                        <div className={styles.loaderWrap}>
                            <CustomLoader componentLoader />
                        </div>
                    </div>
                )}
            </div>
            <div className={styles.widgetChatMessages}>
                <WidgetChatMessages
                    data-testid="widgetChatMessages" 
                    isActiveMsgArea={isActiveMsgArea}
                    chatActiveMessages={chatActiveMessages}
                    recipientName={recipientName}
                    chatActivityTime={chatActivityTime}
                    recipientImage={chatRecipientImage}
                    userImage={chatUserImage}
                    downloadMessageFile={onFileDownload}
                    isChatLoading={isChatLoading}
                    setIsChatLoading={setIsChatLoading}
                    chatsList={chatsList}
                    recipientId={recipientId}
                    chatUserListLastMessages={chatUserListLastMessages}
                    iconLoading={iconLoading}
                    setIconLoading={setIconLoading}
                />
                {isActiveMsgArea && (
                    <WidgetChatMessageInput
                        data-testid="widgetChatMessageInput"
                        chatMsg={chatMsg}
                        selectedFile={selectedFile}
                        onFileUploaded={onFileUploaded}
                        onMessageChange={onMessageChange}
                        onMessageSend={onMessageSend}
                    />
                )}
            </div>
        </div>
    );
};

/**
 *  Properties
 */
WidgetChat.propTypes = {
    chatWS: object.isRequired,
    chatUserListBubbles: instanceOf(Map).isRequired,
    chatUserListLastMessages: instanceOf(Map).isRequired,
    chatUsersList: arrayOf(
        shape({
            userID: number.isRequired,
            userIcon: string.isRequired,
            name: string.isRequired,
            lastMessage: string.isRequired,
            time: string.isRequired,
            counter: number.isRequired,
            isActive: bool.isRequired,
            timestamp: number.isRequired,
        })
    ).isRequired,
    chatRecipientID: number, // number | null
    chatActiveMessages: arrayOf(
        shape({
            type: string.isRequired,
            messageID: oneOfType([number, string]).isRequired,
            recipientID: number, // number | null
            senderID: number, // number | null
            message: string.isRequired,
            fileName: string.isRequired,
            time: string.isRequired,
            timestamp: number.isRequired,
        })
    ).isRequired,

    onInitChatWS: func.isRequired,
    onCloseChatWS: func.isRequired,

    onInitChatUsersList: func.isRequired,

    onInitChatRecipientID: func.isRequired,

    onInitChatMsg: func.isRequired,
    onAddRecipientChatMsg: func.isRequired,
    onAddSenderChatMsg: func.isRequired,
    onResetChatMsg: func.isRequired,
};

/**
 *  Exports
 */
export default WidgetChat;
