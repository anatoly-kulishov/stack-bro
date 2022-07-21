import { capitalizeFirstLetter } from './index';

describe('capitalizeFirstLetter', () => {
  test('general cases', () => {
    expect(capitalizeFirstLetter('upper and lower')).toBe('Upper and lower');
    expect(capitalizeFirstLetter('n')).toBe('N');
    expect(capitalizeFirstLetter('')).toBe('');
  });
});
