import { getSessionStorage } from './index';

describe('getKeys', () => {
  beforeEach(() => {
    sessionStorage.setItem('testKey', JSON.stringify('testValue'));
  });

  test('general cases', () => {
    expect(getSessionStorage('testKey')).toBe('testValue');
  });
});
