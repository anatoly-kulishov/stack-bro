const getFileType = (fileName: string) => {
  const lastIndexOfDot = `${fileName}`.lastIndexOf('.');
  return `${fileName}`.substr(lastIndexOfDot + 1, `${fileName}`.length);
}

const getTruncTextByMaxLen = (str: string, maxLen: number = 0) => {
  return str.length > maxLen ? `${str.substring(0, maxLen)}...` : str;
}

export {
  getTruncTextByMaxLen,
  getFileType
}
