import React from "react";
import WidgetChatMessageInput from "./WidgetChatMessageInput";
import { shallow } from "enzyme";
import iconUploadFile from "../../../../assets/icons/icon-upload-file.svg";

const componentProps = {
    selectedFile: null,
    chatMsg: "",
    onMessageChange: jest.fn(),
    onMessageSend: jest.fn(),
    onFileUploaded: jest.fn
};

describe("<WidgetChatMessageInput />", () => {
    it("renders with message input", () => {
        const inputPlaceholder = "Type a message";
        const btnText = "Send";
        const wrapper = shallow(<WidgetChatMessageInput {...componentProps} />);

        expect(wrapper.find("[data-testid='iconUploadFile']").exists()).toBeTruthy();
        expect(wrapper.find("[data-testid='iconUploadFile']").prop("src")).toEqual(iconUploadFile);

        expect(wrapper.find("[data-testid='uploadFileInput']").exists()).toBeTruthy();

        expect(wrapper.find("[data-testid='messageInput']").exists()).toBeTruthy();
        expect(wrapper.find("[data-testid='messageInput']").prop("placeholder")).toEqual(inputPlaceholder);
        expect(wrapper.find("[data-testid='messageInput']").prop("value")).toEqual(componentProps.chatMsg);

        expect(wrapper.find("[data-testid='sendBtn']").exists()).toBeTruthy();
        expect(wrapper.find("[data-testid='sendBtn']").text()).toEqual(btnText);
    });

    it('input should have exact value', () => {
        const event = {
          preventDefault() {},
          target: { value: 'input value' }
        };
        const wrapper = shallow(<WidgetChatMessageInput {...componentProps} />);
        expect(wrapper.find("[data-testid='messageInput']").exists()).toBeTruthy();
        wrapper.find("[data-testid='messageInput']").simulate('change', event);
        expect(componentProps.onMessageChange).toHaveBeenCalledTimes(1);
        expect(componentProps.onMessageChange).toHaveBeenCalledWith(event);
        wrapper.setProps({chatMsg: event.target.value});
        expect(wrapper.find("[data-testid='messageInput']").prop("value")).toEqual(event.target.value);
      });

      it('call function on button click', () => {
        const currentProps = {...componentProps, chatMsg: 'hello'};
        const wrapper = shallow(<WidgetChatMessageInput {...currentProps} />);
        wrapper.find("[data-testid='sendBtn']").simulate('click');
        expect(componentProps.onMessageSend).toHaveBeenCalled();
      });

      it('call function on enter press', () => {
        const currentProps = {...componentProps, chatMsg: 'hello'};
        const wrapper = shallow(<WidgetChatMessageInput {...currentProps} />);
        wrapper.find("[data-testid='sendBtn']").simulate('keypress', {key: 'Enter'})
        expect(componentProps.onMessageSend).toHaveBeenCalled();
      });

      it('renders with uploaded file', () => {
        const fileName = 'file.jpg';
        const file = new File([new ArrayBuffer(1)], fileName);

        const currentProps = {...componentProps, chatMsg: 'hello'};
        const wrapper = shallow(<WidgetChatMessageInput {...currentProps} />);
        
        expect(wrapper.find("[data-testid='uploadFileInput']").exists()).toBeTruthy();
        expect(wrapper.find("[data-testid='fileName']").exists()).toBeFalsy();

        wrapper.find("[data-testid='uploadFileInput']").simulate('change', { target: { files: [file] } });

        wrapper.setProps({selectedFile: file});
        wrapper.update();

        expect(wrapper.find("[data-testid='fileName']").exists()).toBeTruthy();
        expect(wrapper.find("[data-testid='fileName']").text()).toEqual(fileName);

        expect(wrapper.find("[data-testid='fileClearBtn']").exists()).toBeTruthy();
      });
});