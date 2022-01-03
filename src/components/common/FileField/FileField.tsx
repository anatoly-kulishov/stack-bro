/** Libs **/
import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {Formik, Form, FormikConfig, FormikHelpers} from 'formik';
import {Button} from 'antd';
import {UploadOutlined} from '@ant-design/icons';

/** Utils **/
import {ThunkType} from "../../../store/actions/profileActions";

/** Styles & Images **/
import styles from './FileField.module.scss'

type FileFieldPropsType = {
  save: (file: File, setSubmitting: Function) => ThunkType
}

type initialValuesType = {
  file: File | null
}

const INITIAL_VALUES: initialValuesType = {
  file: null
}

const FileField: FC<FileFieldPropsType> = ({save}) => {
  const dispatch = useDispatch();

  const submitHandler: FormikConfig<initialValuesType>['onSubmit'] = (values: initialValuesType, {setSubmitting}: FormikHelpers<initialValuesType>) => {
    setSubmitting(true);
    if (values.file) {
      dispatch(save(values.file, setSubmitting))
    }
  }

  const changeHandler = (setFieldValue: (file: string, values: Partial<File>) => void) => (event: React.ChangeEvent<any>) => {
    if (event.currentTarget.files[0]) {
      setFieldValue("file", event.currentTarget.files[0])
    }
  }

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={submitHandler}>
      {({handleSubmit, setFieldValue, values, isSubmitting}) => (
        <Form onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="file">
            <span className="mr-2">Update photo</span><UploadOutlined/>
          </label>
          <input name="file" type="file" id="file" className='d-none' onChange={changeHandler(setFieldValue)}/>
          {values.file && (
            <>
              <div className="mt-2">
                <Button htmlType="submit" block disabled={!values.file || isSubmitting}>Submit</Button>
              </div>
              <div className="mt-2">
                <Button htmlType="reset" block danger disabled={!values.file || isSubmitting}>Cancel</Button>
              </div>
            </>
          )}
        </Form>
      )}
    </Formik>
  )
}

export default FileField;