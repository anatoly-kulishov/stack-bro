/**
 * Get file format
 * @param file
 */
import { FILE_SIZE_LIMIT } from '../constants/commom';
import { ALLOWED_EXTENSIONS } from '../constants/regex';

export const getFileFormData = (file: File) => {
  const formData = new FormData();
  formData.append('file', file, file.name);
  return formData;
};

/**
 * Create a link to download the file
 * @param file
 * @param fileTitle
 * @param fileType
 */
export const downloadFile = async (file: File, fileTitle: string, fileType: string) => {
  const tagLink = document.createElement('a');
  tagLink.href = window.URL.createObjectURL(new Blob([file], { type: fileType }));
  tagLink.download = fileTitle;
  document.body.appendChild(tagLink);
  tagLink.click();
  document.body.removeChild(tagLink);
};

/**
 * Convert file size in MB
 * @param fileSize
 */
export const convertFileSizeToMb = (fileSize: number): number => {
  return fileSize / 1024 / 1024;
};

/**
 * Validate file size
 * @param fileSize
 * @param maxFileSizeInMb
 */
export const validateFileSize = (fileSize: number, maxFileSizeInMb: number = FILE_SIZE_LIMIT): boolean => {
  return maxFileSizeInMb > fileSize;
};

/**
 * Validate file format
 * @param fileFormat
 */
export const validateFileFormat = (fileFormat: string): boolean => {
  return !!fileFormat.match(ALLOWED_EXTENSIONS);
};
