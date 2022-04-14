import React, { ChangeEvent, FC } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Formik, FormikConfig, FormikHelpers } from 'formik';
import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { ThunkType } from '../../../store/actions/profileActions';
import styles from './FileField.module.scss';
import { convertFileSizeToMb, validateFileFormat, validateFileSize } from '../../../utils/file-helpers/file-helpers';
import { ALLOWED_EXTENSIONS_ERROR, FILE_SIZE_LIMIT_ERROR } from '../../../constants/commom';

type FileFieldPropsType = {
  saveHandler: (file: File, setSubmitting: Function) => ThunkType;
  validationHandler: (errorText: string | null) => void;
};

type InitialValuesType = {
  file: File | null;
};

const INITIAL_VALUES: InitialValuesType = {
  file: null,
};

export const FileField: FC<FileFieldPropsType> = ({ saveHandler, validationHandler }) => {
  const dispatch = useDispatch();

  const submitHandler: FormikConfig<InitialValuesType>['onSubmit'] = (
    values: InitialValuesType,
    { setSubmitting }: FormikHelpers<InitialValuesType>,
  ) => {
    setSubmitting(true);
    if (values.file) {
      dispatch(saveHandler(values.file, setSubmitting));
    }
  };

  const changeHandler =
    (setFieldValue: (file: string, values: Partial<File>) => void) => (event: ChangeEvent<HTMLInputElement>) => {
      if (event.currentTarget.files !== null) {
        const file = event.currentTarget.files[0];
        const fileFormat = file.type;
        const fileSizeInMb = convertFileSizeToMb(file.size);
        const isValidSizing = validateFileSize(fileSizeInMb);
        const isValidFormat = validateFileFormat(fileFormat);
        if (!isValidSizing) {
          validationHandler(FILE_SIZE_LIMIT_ERROR);
        }
        if (!isValidFormat) {
          validationHandler(ALLOWED_EXTENSIONS_ERROR);
        }
        if (isValidSizing && isValidFormat) {
          setFieldValue('file', file);
        }
      }
    };

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={submitHandler}>
      {({ handleSubmit, setFieldValue, values, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="file">
            <span className="mr-2">Update photo</span>
            <UploadOutlined />
          </label>
          <input
            name="file"
            type="file"
            id="file"
            className="d-none"
            accept=".jpg, .jpeg, .png"
            onChange={changeHandler(setFieldValue)}
          />
          {values.file && (
            <>
              <div className="mt-2">
                <Button htmlType="submit" block disabled={!values.file || isSubmitting}>
                  Submit
                </Button>
              </div>
              <div className="mt-2">
                <Button htmlType="reset" block danger disabled={!values.file || isSubmitting}>
                  Cancel
                </Button>
              </div>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
};
