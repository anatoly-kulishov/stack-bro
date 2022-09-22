export interface IFileField {
  saveHandler: (file: File, setSubmitting: Function) => void;
  validationHandler: (errorText: string | null) => void;
}

export interface IFileFieldInitialValues {
  file: File | null;
}
