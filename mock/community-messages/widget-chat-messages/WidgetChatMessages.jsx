/**
 *  External Imports
 */
import React, { useRef, useEffect, useState } from "react";

import { arrayOf, bool, number, shape, string, oneOfType, func } from "prop-types";

/**
 *  Internal Imports
 */
import iconChat from "../../../../assets/icons/icon-chat.svg";
import iconFile from "../../../../assets/icons/icon-file.svg";
import { CHAT_MESSAGES_TYPE_KEYS, isSenderMsgType } from "../WidgetChat.helper";
import UserAvatar from "../../../commons/user-avatar";

import styles from "./index.module.css";
import BlockPreloader from "../../../commons/block-preloader/BlockPreloader";
import CustomLoader from "../../../commons/custom-loader";

/**
 *  Component
 *
 *  @param props
 *
 *  @return {JSX.Element}
 *
 */
const WidgetChatMessages = (props) => {
    const {
        chatActiveMessages,
        isActiveMsgArea,
        recipientName,
        chatActivityTime,
        recipientImage,
        userImage,
        isChatLoading,
        setIsChatLoading,
        iconLoading,
        setIconLoading
    } = props;
    const { downloadMessageFile } = props;
    const chatMsgEndRef = useRef(null);


    const scrollMsgChatToEnd = () => {
        if (chatMsgEndRef.current === null) {
            return;
        }

        chatMsgEndRef.current.scrollIntoView(false);
    };

    useEffect(() => {
        scrollMsgChatToEnd();
    }, [chatActiveMessages]);

    useEffect(() => {
        if(chatActiveMessages.length > 0 && iconLoading === false){
            setIsChatLoading(false)
        }
        props.chatsList.map(({userID}) => {
            if(userID === props.recipientId && props.chatUserListLastMessages.get(userID).message === "" && iconLoading === false) {
           
                setIsChatLoading(false)
              
            } 

        })

    }, [chatActiveMessages, iconLoading])

    return (
        <>
            {!!(isChatLoading & isActiveMsgArea) && <BlockPreloader/>}
            {isActiveMsgArea ? (
                <div className={styles.messageArea} style={{visibility: isChatLoading ? 'hidden' : 'visible'}}>
                <div className={styles.chatMessagesTopArea}>
                    <div className={styles.chatMessagesInfoArea}>
                        <UserAvatar
                            data-testid="userIcon" 
                            userIcon={recipientImage}
                            smallIcon={true}
                            setIconLoading={setIconLoading}
                            ></UserAvatar>

                        <div className={styles.chatMessagesUserName} data-testid="userName" >
                            {recipientName}
                        </div>
                        {chatActivityTime && (
                            <div data-testid="chatActivityTime"
                                className={
                                    styles.chatMessagesUserActiveTime
                                }>
                                {chatActivityTime}
                            </div>
                        )}
                    </div>
                    {/* <div className={styles.chatMessagesMenuArea}>
                            
                            <div className={styles.chatMessagesMenu}>
                                ...
                            </div>
                        </div> */}
                </div>

                <div className={styles.chatMessagesMiddleArea}>
                    {chatActiveMessages.map(
                        ({
                            type,
                            messageID,
                            recipientID,
                            senderID,
                            message,
                            fileName,
                            time,
                            timestamp,
                        }) => (
                            <div data-testid="chatMessages"
                                className={styles.chatMessagesGroupArea}
                                key={messageID}>
                                {type ===
                                    CHAT_MESSAGES_TYPE_KEYS.SEPARATOR && (
                                    <div
                                        className={
                                            styles.chatMessagesSeparator
                                        }>
                                        {time}
                                    </div>
                                )}

                                {(type === CHAT_MESSAGES_TYPE_KEYS.SENDER ||
                                    type ===
                                        CHAT_MESSAGES_TYPE_KEYS.RECIPIENT) && (
                                    <div
                                        className={
                                            isSenderMsgType(type)
                                                ? `${styles.chatMessagesUserArea} ${styles.chatMessagesUserAreaRight}`
                                                : `${styles.chatMessagesUserArea} ${styles.chatMessagesUserAreaLeft}`
                                        }>
                                        <div
                                            className={
                                                isSenderMsgType(type)
                                                    ? `${styles.chatMessagesContentArea} ${styles.chatMessagesContentAreaRight}`
                                                    : `${styles.chatMessagesContentArea} ${styles.chatMessagesContentAreaLeft}`
                                            }>
                                            <UserAvatar
                                                data-testid="chatMessageIcon"
                                                userIcon={
                                                    isSenderMsgType(type)
                                                        ? userImage
                                                        : recipientImage
                                                }
                                                smallIcon={true}
                                                >
                                            </UserAvatar>

                                            <div
                                                className={
                                                    isSenderMsgType(type)
                                                        ? `${styles.chatMessagesPayloadArea} ${styles.chatMessagesPayloadAreaRight}`
                                                        : `${styles.chatMessagesPayloadArea} ${styles.chatMessagesPayloadAreaLeft}`
                                                }>
                                                {message.length > 0 && (
                                                    <div
                                                    data-testid="chatMessageText"   
                                                        className={
                                                            isSenderMsgType(
                                                                type
                                                            )
                                                                ? `${styles.chatMessagesUserMsg} ${styles.chatMessagesUserMsgRight}`
                                                                : `${styles.chatMessagesUserMsg} ${styles.chatMessagesUserMsgLeft}`
                                                        }>
                                                        {message}
                                                    </div>
                                                )}

                                                {fileName.length > 0 && (
                                                    <div
                                                        onClick={() => downloadMessageFile(messageID)}
                                                        className={
                                                            styles.chatMessagesUserFileArea
                                                        }>
                                                        <img
                                                            className={
                                                                styles.chatMessagesUserFileIcon
                                                            }
                                                            src={iconFile}
                                                            alt="Icon File"
                                                        />

                                                        <div
                                                            className={
                                                                styles.chatMessagesUserFileName
                                                            }>
                                                            {fileName}
                                                        </div>
                                                    </div>
                                                )}

                                                <div
                                                    className={
                                                        isSenderMsgType(
                                                            type
                                                        )
                                                            ? `${styles.chatMessagesUserTime} ${styles.chatMessagesUserTimeRight}`
                                                            : `${styles.chatMessagesUserTime} ${styles.chatMessagesUserTimeLeft}`
                                                    }>
                                                    {time}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    )}

                    <div ref={chatMsgEndRef} />
                </div>
            </div>
            ) : (
                <div
                    className={`${styles.messageArea} ${styles.messageAreaEmpty}`}>
                    <div className={styles.chatEmptyArea} data-testid="chatEmptyArea">
                        <img data-testid="emptyIcon"
                            className={styles.chatEmptyIcon}
                            src={iconChat}
                            alt="Icon Select a Chat"
                        />

                        <div className={styles.chatEmptyText} data-testid="emptyText">
                            Select a chat
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

WidgetChatMessages.propTypes = {
    isActiveMsgArea: bool.isRequired,
    recipientName: string.isRequired,
    chatActivityTime: string.isRequired,
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
    recipientImage: string,
    userImage: string.isRequired,
    downloadMessageFile: func.isRequired
};

/**
 *  Exports
 */
export default WidgetChatMessages;
