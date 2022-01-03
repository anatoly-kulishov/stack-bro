import React from 'react';
import {shallow} from "enzyme";
import {expect} from 'chai';
import MyComponent from "./MyComponent";

describe('<MyComponent />', () => {

  it('renders children when passed in', () => {
    const wrapper = shallow(<MyComponent / >);
    expect(wrapper.contains(<div className = "unique" / >)).to.equal(true);
  });

});
