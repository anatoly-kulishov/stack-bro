import React from "react";
// import { expect, it, jest, describe, beforeEach, afterEach } from "@jest/globals";
import CommunityMessages from "./CommunityMessages";
import { shallow } from 'enzyme';
import * as useScrollToTop from '../../commons/scroll-top';

describe('<CommunityMessages />', () => {
    let mock;

    beforeEach(() => {
        mock = jest.spyOn(useScrollToTop, 'default').mockImplementation(() => () => {
            return null;
        });
    });

    afterEach(() => {
        mock.mockRestore();
    });

    it("renders with widget", () => {
        const wrapper = shallow(<CommunityMessages />);
        expect(wrapper.find("[data-testid='widgetChat']").exists()).toBeTruthy();
    });

});