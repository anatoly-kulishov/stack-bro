/**
 * Get file format
 * @param file
 */
const getFileFormData = (file: File) => {
  const formData = new FormData();
  formData.append("file", file, file.name);
  return formData;
};

/**
 * Create a link to download the file
 * @param file
 * @param fileTitle
 * @param fileType
 */
const downloadFile = async (file: File, fileTitle: string, fileType: string) => {
  const tagLink = document.createElement('a');
  tagLink.href = window.URL.createObjectURL(new Blob([file], {type: fileType}));
  tagLink.download = fileTitle;
  document.body.appendChild(tagLink);
  tagLink.click();
  document.body.removeChild(tagLink);
};

export {getFileFormData, downloadFile};