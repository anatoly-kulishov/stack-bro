import React from "react";
import WidgetChat from "./WidgetChat";
import { shallow, mount } from 'enzyme';
import * as router from "@reach/router";
import * as customHook from "./useWSChatCommunication";

const componentProps = {
    chatWS: { emit: jest.fn() },
    chatUserListBubbles: new Map(),
    chatUserListLastMessages: new Map(),
    chatUsersList: [
        {
            userID: 2,
            userIcon: "/assets/images/user/default-profile-image.png",
            name: "John Smith",
            lastMessage: "Hello",
            time: "",
            counter: 0,
            isActive: true,
        },
        {
            userID: 3,
            userIcon: "/assets/images/user/default-profile-image.png",
            name: "John Black",
            lastMessage: "Good day",
            time: "",
            counter: 0,
            isActive: true,
        }
    ],
    chatRecipientID: 1,
    chatActiveMessages: [
        {
            type: "sender",
            messageID: 123,
            recipientID: 1,
            senderID: 2,
            userIcon: "/assets/images/user/default-profile-image.png",
            message: "Good day",
            fileName: "",
            time: "",
            timestamp: Date.now(),
        }
    ],

    onInitChatWS: jest.fn(),
    onCloseChatWS: jest.fn(),
    onInitChatUsersList: jest.fn(),
    onInitChatRecipientID: jest.fn(),
    onInitChatMsg: jest.fn(),
    onAddRecipientChatMsg: jest.fn(),
    onAddSenderChatMsg: jest.fn(),
    onResetChatMsg: jest.fn(),
}

describe('<WidgetChat />', () => {

    let mock;

    beforeEach(() => {
        mock = jest.spyOn(router, 'useLocation').mockImplementation(() => () => {
            return { pathname: '/' };
        });
    });

    afterEach(() => {
        mock.mockRestore();
    });

    it("renders with loader", () => {
        const wrapper = mount(<WidgetChat {...componentProps} />);
        expect(wrapper.find("[data-testid='chatLoader']").exists()).toBeTruthy();
        expect(wrapper.find("[data-testid='widgetChatsList']").exists()).toBeFalsy();
    });

    it("renders with Chat List", () => {
        const messagesMock = jest.spyOn(customHook, 'useWSChatCommunication').mockImplementation(() => {
            return {
                chatActivityTime: "1 hour ago",
                chatUserImage: "/assets/images/user/default-profile-image.png",
                chatRecipientImage: "/assets/images/user/default-profile-image.png",
                chatListLoaded: true,
                requestChatHistory: jest.fn(),
                sendChatMessage: jest.fn(),
                readNewMessages: jest.fn()
            }
        });
        const wrapper = mount(<WidgetChat {...componentProps} />);
        expect(wrapper.find("[data-testid='widgetChatsList']").exists()).toBeTruthy();
        expect(wrapper.find("[data-testid='widgetChatsList']").props().chatList).toHaveLength(componentProps.chatUsersList.length);

        messagesMock.mockRestore();
    });

    it("renders with Chat messages", () => {
        const wrapper = mount(<WidgetChat {...componentProps} />);
        expect(wrapper.find("[data-testid='widgetChatMessages']").exists()).toBeTruthy();
    });

    it("renders with searchInput", () => {
        const inputPlaceholder = "Search Connections";
        const wrapper = shallow(<WidgetChat {...componentProps} />);
        expect(wrapper.find("[data-testid='searchInput']").exists()).toBeTruthy();
        expect((wrapper.find("[data-testid='searchInput']").props().inputPlaceholder)).toEqual(inputPlaceholder);
    });
    
});

describe('<WidgetChat /> on redirect', () => {

    it("renders with exact message history after redirect", () => {
        const mock = jest.spyOn(router, 'useLocation').mockImplementation(() => {
            return { pathname: '/', state: {userChatId: componentProps.chatUsersList[0].userID} };
        });
        const wrapper = shallow(<WidgetChat {...componentProps} />);
        expect(wrapper.find("[data-testid='widgetChatMessages']").exists()).toBeTruthy();
        expect(wrapper.find("[data-testid='widgetChatMessages']").props().chatActiveMessages).toEqual(componentProps.chatActiveMessages);

        mock.mockRestore();
    });

});