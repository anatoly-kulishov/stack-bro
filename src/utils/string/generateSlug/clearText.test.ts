import { generateSlug } from './index';

describe('generateSlug', () => {
  test('translate cases', () => {
    expect(generateSlug('тест')).toBe('test');
    expect(generateSlug('СТОП')).toBe('stop');
    expect(generateSlug('СтАрТ')).toBe('start');
  });
  test('slag cases', () => {
    expect(generateSlug('Русский, Английский и тд')).toBe('russkij-anglijskij-i-td');
    expect(generateSlug('T/t')).toBe('tt');
  });
});
