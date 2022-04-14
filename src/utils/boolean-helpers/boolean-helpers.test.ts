import { isDarkTheme, isLightTheme } from './boolean-helpers';

describe('boolean-helpers', () => {
  test('Check theme color', () => {
    const lightTheme = isLightTheme('light');
    expect(lightTheme).toBe(true);

    const darkTheme = isDarkTheme('dark');
    expect(darkTheme).toBe(true);
  });
});
