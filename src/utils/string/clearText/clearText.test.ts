import { clearText } from './index';

describe('clearText', () => {
  test('clearing tags', () => {
    expect(clearText('<h1>Test</h1>')).toBe('Test');
    expect(clearText('<p><span>txt</span></p>')).toBe('txt');
  });
  test('limitation', () => {
    expect(clearText('123456789', 5)).toBe('12345...');
    expect(clearText('<h1>123</h1><h2>456</h2>', 5)).toBe('12345...');
  });
});
