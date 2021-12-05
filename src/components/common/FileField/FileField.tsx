import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {Formik, Form} from 'formik';
import {Button} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import styles from './FileField.module.scss'
import {ThunkType} from "../../../store/actions/profileActions";

type FileFieldPropsType = {
  save: (file: File, setSubmitting: Function) => ThunkType
}

const FileField: FC<FileFieldPropsType> = ({save}) => {
  const dispatch = useDispatch();
  const initialValues = {file: null};
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, {setSubmitting}) => {
        setSubmitting(true);
        if (values.file) {
          dispatch(save(values.file, setSubmitting))
        }
      }}>
      {({handleSubmit, setFieldValue, values, isSubmitting}) => (
        <Form onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="file"><span
            className="mr-2">Update photo</span><UploadOutlined/></label>
          <input name="file"
                 type="file"
                 id="file"
                 className='d-none'
                 onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                   if (event.currentTarget.files) {
                     setFieldValue("file", event.currentTarget.files[0])
                   }
                 }}/>
          {values.file && (
            <>
              <div className="mt-2">
                <Button htmlType="submit" block disabled={!values.file || isSubmitting}>Submit</Button>
              </div>
              <div className="mt-2">
                <Button htmlType="reset" block danger
                        disabled={!values.file || isSubmitting}>Cancel</Button>
              </div>
            </>
          )}
        </Form>
      )}
    </Formik>
  )
}

export default FileField;
