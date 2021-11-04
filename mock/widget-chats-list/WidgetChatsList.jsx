/**
 *  External Imports
 */
import React, {useEffect} from "react";

import {
    arrayOf,
    bool,
    func,
    number,
    shape,
    string,
    instanceOf,
} from "prop-types";

/**
 *  Internal Imports
 */
import styles from "./index.module.css";
import UserAvatar from "../../../commons/user-avatar";

/**
 *  Component
 *
 *  @param props
 *
 *  @return {JSX.Element}
 *
 */
const WidgetChatsList = (props) => {
    const {
        chatList,
        chatUserListBubbles,
        chatUserListLastMessages,
    } = props;
    const { onChatItemClick } = props;

    const hasBubbles = (userID) => {
        if (chatUserListBubbles.size) {
            return chatUserListBubbles.get(userID) !== 0;
        }
        return false;
    };

    const getCurrentBubble = (userID) => {
        return chatUserListBubbles.get(userID);
    };

    const getLastMessage = (userId) => {
        return chatUserListLastMessages.get(userId)?.message;
    };

    const getLastMessageTime = (userId) => {
        return chatUserListLastMessages.get(userId)?.time;
    };
    
    return (
        <div className={styles.listArea}>
            {chatList && (
                <div className={styles.chatListArea}>
                    {chatList.map(
                        ({
                            userID,
                            userIcon,
                            name,
                            lastMessage,
                            time,
                            counter,
                            isActive,
                        }) => (
                            <div data-testid="widgetChatItem" 
                                className={
                                    isActive
                                        ? `${styles.chatItem} ${styles.chatItemActive}`
                                        : `${styles.chatItem}`
                                }
                                key={userID}
                                onClick={onChatItemClick(userID, name)}>
                                    
                                <UserAvatar
                                    data-testid="userIcon" 
                                    userIcon={userIcon}
                                ></UserAvatar>

                                <div className={styles.chatInfoArea}>
                                    <div className={styles.chatInfoTopArea}>
                                        <div className={styles.chatName} data-testid="userName" >
                                            {name}
                                        </div>

                                        <div data-testid="userTime" className={styles.chatDate}>
                                            {getLastMessageTime(userID)}
                                        </div>
                                    </div>

                                    <div className={styles.chatInfoBottomArea}>
                                        <div data-testid="userLastMessage" className={styles.chatMessage}>
                                            {getLastMessage(userID)}
                                        </div>
                                        {hasBubbles(userID) && (
                                            <div className={styles.chatCounter}>
                                                {getCurrentBubble(userID)}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            )}
        </div>
    );
};

/**
 *  Properties
 */
WidgetChatsList.propTypes = {
    chatList: arrayOf(
        shape({
            userID: number.isRequired,
            userIcon: string.isRequired,
            name: string.isRequired,
            lastMessage: string.isRequired,
            time: string.isRequired,
            timestamp: number.isRequired,
            counter: number.isRequired,
            isActive: bool.isRequired,
        })
    ).isRequired,
    chatUserListBubbles: instanceOf(Map).isRequired,
    chatUserListLastMessages: instanceOf(Map).isRequired,
    onChatItemClick: func.isRequired,
};

/**
 *  Exports
 */
export default WidgetChatsList;
