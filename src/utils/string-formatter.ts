import trim from 'lodash/trim';

import { Nullable } from '../types';

export const trimStringToTenChar = (str: string) => {
  try {
    return `${trim(str).substr(0, 12)}...`;
  } catch (error) {
    console.log('error in trim');
  }
};

export const getFileType = (str: string) => {
  try {
    if (str) {
      const lastIndexOfDot = `${str}`.lastIndexOf('.');
      return `${str}`.substr(lastIndexOfDot + 1, `${str}`.length);
    }
    return '';
  } catch (error) {
    console.log('error in getting file str');
  }
};

export function getRealTextWidthPx(str: string, fontSettings: Nullable<string> = null) {
  // Checking an input data
  if (fontSettings === null) {
    return 0;
  }

  // Variables
  const canvasCtx = document.createElement('canvas').getContext('2d');

  let textMetrics;

  // Checking an exception
  if (canvasCtx === null) {
    return 0;
  }

  // Set a new font settings
  canvasCtx.font = fontSettings;

  // Getting a text metrics
  textMetrics = canvasCtx.measureText(str);

  // Return a result
  return textMetrics.width;
}

export function getTruncTextByMaxLen(str: string, maxLen: number = 0) {
  return str.length > maxLen ? `${str.substring(0, maxLen)}...` : str;
}
