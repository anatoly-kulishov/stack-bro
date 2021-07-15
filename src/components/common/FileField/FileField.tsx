import React, {FC} from 'react';
import {Formik, Form} from 'formik';
import {Button} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import styles from './FileField.module.scss'

type FileFieldPropsType = {
    save: (file: File | null, setSubmitting: Function) => void
}

const FileField: FC<FileFieldPropsType> = props => {
    const {save} = props;

    return (
        <Formik
            initialValues={{file: null}}
            onSubmit={(values, {setSubmitting}) => {
                setSubmitting(true)
                save(values.file, setSubmitting)
            }}>
            {({handleSubmit, setFieldValue, values, isSubmitting}) => (
                <Form onSubmit={handleSubmit}>
                    <label className={styles.label} htmlFor="file"><span
                        className="mr-2">Update photo</span><UploadOutlined/></label>
                    <input name="file" type="file" id="file" className='d-none' onChange={(event: any) => {
                        setFieldValue("file", event.currentTarget.files[0])
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