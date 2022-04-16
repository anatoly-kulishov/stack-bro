import { isDarkTheme, isLightTheme } from './boolean-helpers';

describe('boolean-helpers', () => {
  test('Check theme color', () => {
    expect(isLightTheme('light')).toBe(true);
    expect(isDarkTheme('dark')).toBe(true);
  });
});
