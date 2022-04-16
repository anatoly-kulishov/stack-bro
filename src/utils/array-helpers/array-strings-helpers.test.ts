import { addCommasToStringsInArray } from './array-strings-helpers';

describe('array-strings-helpers', () => {
  test('adding commas to strings in array', () => {
    expect(addCommasToStringsInArray(['1', '2', '3'])).toStrictEqual('1, 2, 3');
    expect(addCommasToStringsInArray(['React', 'Redux', 'TypeScript'])).toStrictEqual('React, Redux, TypeScript');
    expect(addCommasToStringsInArray([])).toBe('');
  });
});
