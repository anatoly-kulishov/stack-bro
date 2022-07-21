import { addCommasToStringsInArray } from './index';

describe('addCommasToStringsInArray', () => {
  test('general cases', () => {
    expect(addCommasToStringsInArray(['1', '2', '3'])).toStrictEqual('1, 2, 3');
    expect(addCommasToStringsInArray(['React', 'Redux', 'TypeScript'])).toStrictEqual('React, Redux, TypeScript');
    expect(addCommasToStringsInArray([])).toBe('');
  });
});
