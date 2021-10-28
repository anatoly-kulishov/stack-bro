import React from "react";
// import { expect, it, describe, jest } from "@jest/globals";
import WidgetChatMessages from "./WidgetChatMessages";
import { shallow } from "enzyme";
import iconChat from "../../../../assets/icons/icon-chat.svg";
import { isSenderMsgType } from "../WidgetChat.helper";

const componentProps = {
    isActiveMsgArea: true,
    recipientName: "John Black",
    chatActivityTime: "1 hour ago",
    recipientImage: "/assets/images/user/default-profile-image.png",
    userImage: "/assets/images/user/default-profile-image.png",
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
        },
    ],
    downloadMessageFile: jest.fn()
};

describe("<WidgetChatMessages />", () => {

    it("renders with exact chat", () => {
        const wrapper = shallow(<WidgetChatMessages {...componentProps} />);
        expect(wrapper.find("[data-testid='userIcon']").exists()).toBeTruthy();
        expect(wrapper.find("[data-testid='userIcon']").props().userIcon).toEqual(componentProps.recipientImage);
        
        
        expect(wrapper.find("[data-testid='userName']").exists()).toBeTruthy();
        expect(wrapper.find("[data-testid='userName']").text()).toEqual(componentProps.recipientName);

        expect(wrapper.find("[data-testid='chatActivityTime']").exists()).toBeTruthy();
        expect(wrapper.find("[data-testid='chatActivityTime']").text()).toEqual(componentProps.chatActivityTime);
    });

    it("renders with empty chat state", () => {
        const currentProps = {...componentProps, isActiveMsgArea: false};
        const emptyStateText = "Select a chat";
        const wrapper = shallow(<WidgetChatMessages {...currentProps} />);

        expect(wrapper.find("[data-testid='chatEmptyArea']").exists()).toBeTruthy();

        expect(wrapper.find("[data-testid='emptyIcon']").exists()).toBeTruthy();
        expect(wrapper.find("[data-testid='emptyIcon']").prop("src")).toEqual(iconChat);

        expect(wrapper.find("[data-testid='emptyText']").exists()).toBeTruthy();
        expect(wrapper.find("[data-testid='emptyText']").text()).toEqual(emptyStateText);
    });

    it("renders with exact messages", () => {
        const wrapper = shallow(<WidgetChatMessages {...componentProps} />);
        expect(wrapper.find("[data-testid='chatMessages']").exists()).toBeTruthy();
        expect(wrapper.find("[data-testid='chatMessages']").length).toEqual(componentProps.chatActiveMessages.length);
        expect(wrapper.find("[data-testid='chatMessageIcon']").exists()).toBeTruthy();

        expect(wrapper.find("[data-testid='chatMessageIcon']").first().props().userIcon)
            .toEqual(isSenderMsgType(componentProps.chatActiveMessages[0].type) ? componentProps.recipientImage : componentProps.userImage);
        expect(wrapper.find("[data-testid='chatMessageText']").exists()).toBeTruthy();
        expect(wrapper.find("[data-testid='chatMessageText']").first().text()).toEqual(componentProps.chatActiveMessages[0].message);
    });
});
