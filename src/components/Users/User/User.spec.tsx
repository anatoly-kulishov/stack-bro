import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const setUp = (props) => shallow(<div className="test">...</div>)

describe("should render Post component", () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it("should contain .post wrapper", () => {
        const wrapper = component.find(".test");
        expect(wrapper.length).toBe(1);
    });
});
