import { convertFileSizeToMb, getFileFormData, validateFileFormat, validateFileSize } from './file-helpers';
import { ALLOWED_EXTENSIONS } from '../../constants/regex';

describe('boolean-helpers', () => {
  let filePng: File;
  let fileTxt: File;
  let filePngSize: number;
  let filePngFormat: string;
  let fileTxtFormat: string;
  const fileSizeInMb = 0.000011444091796875;

  beforeEach(() => {
    filePng = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
    filePngSize = filePng.size;
    filePngFormat = filePng.type;

    fileTxt = new File(['(0_0)'], 'text.txt', { type: 'text' });
    fileTxtFormat = fileTxt.type;
  });

  test('Get file format', () => {
    expect(getFileFormData(filePng)).toMatchObject({});
    expect(getFileFormData(filePng)).not.toMatchObject({ example: null });
  });

  test('Convert file size in MB', () => {
    expect(convertFileSizeToMb(filePngSize)).toBe(fileSizeInMb);
    expect(convertFileSizeToMb(filePngSize)).not.toBe(fileSizeInMb - 1);
  });

  test('Validate file size', () => {
    expect(validateFileSize(convertFileSizeToMb(filePngSize), 1)).toBeTruthy();
    expect(validateFileSize(convertFileSizeToMb(filePngSize), 0)).toBeFalsy();
  });

  test('Validate file format', () => {
    expect(validateFileFormat(filePngFormat, ALLOWED_EXTENSIONS)).toBeTruthy();
    expect(validateFileFormat(fileTxtFormat, ALLOWED_EXTENSIONS)).toBeFalsy();
  });
});
