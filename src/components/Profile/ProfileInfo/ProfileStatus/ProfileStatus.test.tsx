import React from 'react';
import { create } from 'react-test-renderer';

import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
  test('status from props should be in the state', () => {
    const component = create(<ProfileStatus status="Hello World!" isDisabled={false} />);
    const instance: any = component.getInstance();
    expect(instance.state.status).toBe('Hello World!');
  });
  test('after creation <span> should be displayed', () => {
    const component = create(<ProfileStatus status="Hello World!" isDisabled={false} />);
    const { root } = component;
    const span = root.findByType('span');
    expect(span).not.toBeNull();
  });
  test("after creation <input> shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="Hello World!" isDisabled={false} />);
    const { root } = component;
    expect(() => {
      const input = root.findByType('input');
    }).toThrow();
  });
});
