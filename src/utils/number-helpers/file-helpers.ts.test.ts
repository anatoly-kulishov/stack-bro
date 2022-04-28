import { isNumeric } from './number-helpers';

describe('number-helpers', () => {
  test('isNumeric', () => {
    expect(isNumeric('123456789')).toBeTruthy();
    expect(isNumeric('69')).toBeTruthy();
    expect(isNumeric('0')).toBeTruthy();

    expect(isNumeric('123/')).toBeFalsy();
    expect(isNumeric('abc')).toBeFalsy();
    expect(isNumeric('')).toBeFalsy();
  });
});
