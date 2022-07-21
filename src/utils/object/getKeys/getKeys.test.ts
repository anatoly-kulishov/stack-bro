import { getKeys } from './index';

describe('getKeys', () => {
  const obj1 = { firstKey: 1, secondKey: 2, thirdKey: 3 };
  const obj2 = { 1: 'first', 2: 'second', 3: 'third' };

  test('general cases', () => {
    expect(getKeys({})).toStrictEqual([]);
  });

  test('string keys', () => {
    expect(getKeys(obj1)).toStrictEqual(['firstKey', 'secondKey', 'thirdKey']);
  });

  test('number keys', () => {
    expect(getKeys(obj2)).toStrictEqual(['1', '2', '3']);
  });
});
