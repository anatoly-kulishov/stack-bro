import { addCommasToStringsInArray } from './array-strings-helpers';

describe('array-strings-helpers', () => {
  test('addCommasToStringsInArray()', () => {
    expect(addCommasToStringsInArray(['1', '2', '3'])).toStrictEqual('1, 2, 3');
    expect(addCommasToStringsInArray(['React', 'Redux', 'TypeScript'])).toStrictEqual('React, Redux, TypeScript');
    expect(addCommasToStringsInArray([])).toBe('');
  });
});
