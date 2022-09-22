import React, { ChangeEvent, FC } from 'react';
import { Form, Formik, FormikConfig, FormikHelpers } from 'formik';
import { UploadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { convertFileSizeToMb, validateFileFormat, validateFileSize } from '../../../utils/file';
import { ALLOWED_EXTENSIONS_ERROR, FILE_SIZE_LIMIT_ERROR } from '../../../configs/constants';
import { IFileField, IFileFieldInitialValues } from './FileField.props';
import styles from './FileField.module.scss';

const INITIAL_VALUES: IFileFieldInitialValues = {
  file: null,
};

export const FileField: FC<IFileField> = ({ saveHandler, validationHandler }) => {
  const submitHandler: FormikConfig<IFileFieldInitialValues>['onSubmit'] = (
    values: IFileFieldInitialValues,
    { setSubmitting }: FormikHelpers<IFileFieldInitialValues>,
  ) => {
    setSubmitting(true);
    if (values.file) {
      saveHandler(values.file, setSubmitting);
    }
  };

  const changeHandler =
    (setFieldValue: (file: string, values: Partial<File>) => void) => (event: ChangeEvent<HTMLInputElement>) => {
      if (event.currentTarget.files !== null) {
        const file = event.currentTarget.files[0];
        const fileFormat = file?.type;
        const fileSizeInMb = convertFileSizeToMb(file?.size);
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
          <label className={styles.Label} htmlFor="file">
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
