/**
 *  External Imports
 */
import cloneDeep from "lodash/cloneDeep";
import v4 from "uuid/v4";

/**
 *  Internal Imports
 */
import iconUser from "../../../assets/images/user/default-profile-image.png";
import { getValidDate, getValidChatDate } from "../../../utils/date-formatter";
import { TIME_FORMATS } from "../../../constants/time-format";

/**
 *  Variables
 */
const WS_ENDPOINT = `${
    window.location.protocol === "https:" ? "wss" : "ws"}://${window.location.host}/chat`;

const CHAT_MESSAGES_TYPE_KEYS = {
    SEPARATOR: "separator",
    SENDER: "sender",
    RECIPIENT: "recipient",
};

const WS_INSTANCE_TYPE = {
    CONNECT: "connect",
    MESSAGE: "message",
};

const WS_MESSAGE_TYPE = {
    NEW_CONNECT: "new_connect",
    CHAT_LIST: "chat_list",
    HISTORY: "history",
    MESSAGE: "message",
    RETURN_MESSAGE: "return_message",
    READ_MESSAGE: "read"
};

const DEFAULT_AVATAR = iconUser;

/**
 *  Functions
 */

 const isSenderMsgType = (type) => type === CHAT_MESSAGES_TYPE_KEYS.SENDER;

/**
 *  @function getChatsListData
 *
 *  @param {Array<void | object>} rawData Set a raw data
 *
 *  @return {Array<void | object>}
 */
function getChatsListData(rawData) {
    if (!Array.isArray(rawData) || !rawData.length) {
        return [];
    }

    return rawData.sort((a, b) => b.timestamp - a.timestamp).map(
        ({
            user_id,
            first_name,
            last_name,
            last_message,
            unread_counter,
            timestamp,
            avatar_image_url
        }) => ({
            userID: user_id,
            userIcon: avatar_image_url ? avatar_image_url : DEFAULT_AVATAR,
            name: `${first_name} ${last_name}`,
            lastMessage: last_message ?? "",
            time: getValidChatDate(timestamp),
            timestamp: timestamp,
            counter: unread_counter,
            isActive: false,
        })
    );
}

/**
 *  @function getChatMessageData
 *
 *  @param {CHAT_MESSAGES_TYPE_KEYS | null?} [customType=null] Set a custom type key for the chat message
 *
 *  @return {function}
 */
const getChatMessageData = (customType = null) =>
    /**
     *  @param {object} rawDataItem Set a raw data item
     *
     *  @return {object}
     */
    (rawDataItem) => {
        const type = customType === null ? rawDataItem.type : customType;
        const timeFormat =
            type === CHAT_MESSAGES_TYPE_KEYS.SEPARATOR
                ? TIME_FORMATS.MESSAGES_SEPARATOR
                : TIME_FORMATS.MESSAGE;

        return {
            type,
            messageID: rawDataItem.message_id ?? v4(),
            recipientID: rawDataItem.recipient_id ?? null,
            senderID: rawDataItem.sender_id ?? null,
            message: rawDataItem.text ?? "",
            fileName: rawDataItem.file_name ?? "",
            time:
                type === CHAT_MESSAGES_TYPE_KEYS.SEPARATOR
                    ? getValidChatDate(rawDataItem.timestamp, true)
                    : getValidDate(rawDataItem.timestamp, TIME_FORMATS.MESSAGE),
            timestamp: rawDataItem.timestamp * 1000,
        };
    };

/**
 *  @function getChatMessagesList
 *
 *  @param {Array<void | object>} rawData Set a raw data
 *
 *  @return {Array<void | object>}
 */
function getChatMessagesList(rawData) {
    if (!Array.isArray(rawData) || !rawData.length) {
        return [];
    }

    return rawData.map(getChatMessageData());
}

export {
    WS_ENDPOINT,
    CHAT_MESSAGES_TYPE_KEYS,
    WS_INSTANCE_TYPE,
    WS_MESSAGE_TYPE,
    DEFAULT_AVATAR,
    getChatsListData,
    getChatMessageData,
    getChatMessagesList,
    isSenderMsgType,
};
