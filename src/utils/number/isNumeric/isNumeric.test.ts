import { isNumeric } from './index';

describe('isNumeric', () => {
  test('true cases', () => {
    expect(isNumeric('123456789')).toBeTruthy();
    expect(isNumeric('69')).toBeTruthy();
    expect(isNumeric('0')).toBeTruthy();
  });
  test('false cases', () => {
    expect(isNumeric('123/')).toBeFalsy();
    expect(isNumeric('abc')).toBeFalsy();
    expect(isNumeric('')).toBeFalsy();
  });
});
