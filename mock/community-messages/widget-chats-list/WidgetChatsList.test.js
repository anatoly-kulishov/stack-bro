import React from "react";
import WidgetChatsList from "./WidgetChatsList";
import { shallow } from "enzyme";

const componentProps = {
    chatUserListBubbles: new Map(),
    chatUserListLastMessages: new Map(),
    chatList: [
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
        },
    ],
    onChatItemClick: jest.fn(),
};

componentProps.chatUserListLastMessages.set(componentProps.chatList[0].userID, {
    message: componentProps.chatList[0].lastMessage,
    time: "time",
});

describe("<WidgetChatsList />", () => {
    it("renders with Chat List", () => {
        const wrapper = shallow(<WidgetChatsList {...componentProps} />);
        expect(wrapper.find("[data-testid='widgetChatItem']").exists()).toBeTruthy();
        expect(wrapper.find("[data-testid='widgetChatItem']")).toHaveLength(componentProps.chatList.length);
    });

    it("renders with exact chats", () => {
        const wrapper = shallow(<WidgetChatsList {...componentProps} />);
        expect(wrapper.find("[data-testid='userIcon']").exists()).toBeTruthy();
        expect(wrapper.find("[data-testid='userIcon']").first().props().userIcon).toEqual(componentProps.chatList[0].userIcon);
        
        expect(wrapper.find("[data-testid='userName']").exists()).toBeTruthy();
        expect(wrapper.find("[data-testid='userName']").first().text()).toEqual(componentProps.chatList[0].name);

        expect(wrapper.find("[data-testid='userTime']").exists()).toBeTruthy();
        expect(wrapper.find("[data-testid='userTime']").first().text()).toEqual(componentProps.chatUserListLastMessages.get(componentProps.chatList[0].userID).time);

        expect(wrapper.find("[data-testid='userLastMessage']").exists()).toBeTruthy();
        expect(wrapper.find("[data-testid='userLastMessage']").first().text()).toEqual(componentProps.chatUserListLastMessages.get(componentProps.chatList[0].userID).message);
    });

    it("calls function on click", () => {
        const wrapper = shallow(<WidgetChatsList {...componentProps} />);
        expect(wrapper.find("[data-testid='widgetChatItem']").exists()).toBeTruthy();

        wrapper.find("[data-testid='widgetChatItem']").first().simulate('click');
        expect(componentProps.onChatItemClick).toHaveBeenCalled();
        expect(componentProps.onChatItemClick).toHaveBeenCalledWith(componentProps.chatList[0].userID, componentProps.chatList[0].name);
    });
    
});
