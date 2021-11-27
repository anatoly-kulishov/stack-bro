const getFileFormData = (file: File) => {
  const formData = new FormData();
  formData.append("file", file, file.name);
  return formData;
};

export {
  getFileFormData
}
