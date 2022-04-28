import { isDarkTheme, isLightTheme } from './boolean-helpers';

describe('boolean-helpers', () => {
  test('isLightTheme()', () => {
    expect(isLightTheme('light')).toBe(true);
  });

  test('isDarkTheme()', () => {
    expect(isDarkTheme('dark')).toBe(true);
  });
});
