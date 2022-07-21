import { getStoreLocal } from './index';

describe('getKeys', () => {
  beforeEach(() => {
    localStorage.setItem('testKey', JSON.stringify('testValue'));
    localStorage.setItem('testObj', JSON.stringify({ key: 'value' }));
  });

  test('general cases', () => {
    expect(getStoreLocal('testKey')).toBe('testValue');
    expect(getStoreLocal('testObj')).toMatchObject({ key: 'value' });
  });
});
