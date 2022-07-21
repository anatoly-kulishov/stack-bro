import { FILE_SIZE_LIMIT } from '../../configs/constants';
import { ALLOWED_EXTENSIONS } from '../../shared/regex';

/**
 * Get file format
 * @param file
 */
export const getFileFormData = (file: File): FormData => {
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
 * @param allowedExtensions
 */
export const validateFileFormat = (fileFormat: string, allowedExtensions: RegExp = ALLOWED_EXTENSIONS): boolean => {
  return !!fileFormat.match(allowedExtensions);
};
